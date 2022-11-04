import 'reflect-metadata';
import * as dotenv from 'dotenv';
import {app} from "./app";

dotenv.config();

app.listen(3333, () => {
    console.log('Server is running...')
    console.log('http://localhost:3333/')
})