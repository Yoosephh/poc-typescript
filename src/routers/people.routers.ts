import { validateBody, validateParams } from "../middlewares/validateSchema";
import {createUser, deleteUser, sortUser, updateUser} from "../controllers/people.controllers";
import { Router } from "express";
import { idSchema, userSchema } from "../schemas/userSchema";

const ppl = Router();

ppl.get("/person", sortUser)
ppl.post("/person", validateBody(userSchema), createUser)
ppl.delete("/person/:id", validateParams(idSchema), deleteUser)
ppl.put("/person/:id", validateParams(idSchema), updateUser)

export default ppl
