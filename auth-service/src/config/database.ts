import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../models/user.model";
import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
    synchronize: true,
    logging: false,
    type: "postgres",
    host: process.env.POSTGRES_HOST as string,
    port: parseInt(process.env.POSTGRES_PORT as string, 10),
    database: process.env.POSTGRES_DB as string,
    username: process.env.POSTGRES_USER as string,
    password: process.env.POSTGRES_PASSWORD as string,
    entities: [User] as any[],
    subscribers: [],
});
