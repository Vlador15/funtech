import {app} from "./app";
import {AppDataSource} from "./config/database";
import dotenv from "dotenv";

dotenv.config();

AppDataSource.initialize().then(() => {
    app.listen(process.env.PORT || 4001, () =>
        console.log(`Auth Service started`)
    );
});
