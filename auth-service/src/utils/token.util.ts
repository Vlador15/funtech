import jwt from "jsonwebtoken";

export const signTokens = (user: any) => {
    const accessToken = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET!,
        { expiresIn: "15m" }
    );
    const refreshToken = jwt.sign(
        { id: user.id },
        process.env.JWT_REFRESH_SECRET!,
        { expiresIn: "7d" }
    );
    return { accessToken, refreshToken };
};
