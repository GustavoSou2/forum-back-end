import 'reflect-metadata';
import * as dotenv from 'dotenv';
import {app} from "./app";

const port = process.env.PORT || 3000;

dotenv.config();

app.listen(port, () => {
    console.info(`Server is running http://localhost:3333/${port}`)
})