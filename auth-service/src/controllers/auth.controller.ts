import {Request, Response} from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import {User} from "../models/user.model";
import {signTokens} from "../utils/token.util";
import {AppDataSource} from "../config/database";

const userRepository = AppDataSource.getRepository(User);

export const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const existing = await userRepository.findOne({ where: { username } });
    if (existing) {
        return res.status(409).json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = userRepository.create({
        username,
        passwordHash: hash,
    });

    await userRepository.save(user);

    const tokens = signTokens(user);

    res.json({
        user: {
            id: user.id,
            username: user.username,
        },
        tokens,
    });
};


export const login = (req: Request, res: Response) => {
    passport.authenticate("local", { session: false }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const tokens = signTokens(user);

        res.json({
            user: {
                id: user.id,
                username: user.username,
            },
            tokens,
        });
    })(req, res);
};