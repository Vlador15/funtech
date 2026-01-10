import { Router } from "express";
import {register, login, me} from "../controllers/auth.controller";
import passport from "passport";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get(
    '/me',
    passport.authenticate('jwt', { session: false }),
    me
);

export default router;
