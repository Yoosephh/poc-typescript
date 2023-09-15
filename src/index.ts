import cors from "cors";
import express, { json } from "express";
import dotenv from "dotenv";
import ppl from "./routers/people.routers";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(ppl);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));