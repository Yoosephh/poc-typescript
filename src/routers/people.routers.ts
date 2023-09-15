import sortUser from "../controllers/people.controllers";
import { Router } from "express";

const ppl = Router();

ppl.get("/person", sortUser)

export default ppl