import 'reflect-metadata';
import express from "express";
import cors from 'cors'
import {routes} from "./routes/routes";
import {createConnection} from "../typeorm";

const app = express();

createConnection()
    .then(() => console.log('Connected to database'))
    .catch(() => console.log('Cannot connect to database'));

app.use(cors())
app.use(express.json())
app.use(routes)

export { app }