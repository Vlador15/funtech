import express from "express";
import passport from "passport";
import authRoutes from "./routes/auth.routes";
import "./config/passport";

export const app = express();
app.use(express.json());
app.use(passport.initialize());

app.use(authRoutes);

app.get("/protected", passport.authenticate("jwt", { session: false }), (req, res) => {
    res.json({ message: "Protected" });
});
