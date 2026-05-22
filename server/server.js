import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import s3Router from "./routes/s3.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/s3", s3Router);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
