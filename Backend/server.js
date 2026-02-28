import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import router from './src/routes/auth.route.js';
import db from './src/db/db.js';
dotenv.config();



const app = express();

app.use(cors());

app.use(express.json());

db();


app.use('/api',router);

app.listen(process.env.PORT,console.log("server started"));
