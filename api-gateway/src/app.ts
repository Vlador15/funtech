import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import proxyRoutes from "./routes/proxy.routes";

export const app = express();

app.use(cors());
app.use(morgan("combined")); // логирование

app.use(proxyRoutes);
app.use(express.json());

app.get("/", (_, res) => {
    res.send("API Gateway is Alive!");
});
