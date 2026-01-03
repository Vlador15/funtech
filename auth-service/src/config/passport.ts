import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await User.findOne({ where: { username } });
            if (!user) return done(null, false);
            const match = await bcrypt.compare(password, user.passwordHash);
            if (!match) return done(null, false);
            return done(null, user);
        } catch (e) { done(e); }
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET!
}, async (payload, done) => {
    try {
        const user = await User.findOne({ where: { id: payload.id } });
        done(null, user);
    } catch (e) { done(e, false); }
}));
