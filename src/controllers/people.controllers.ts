import { Request, Response } from "express";
import { User } from "../../protocols";
import { services } from "../services/people.services";

export default async function sortUser(req:Request, res:Response){
  const user:User = await services.userSort()
  res.send(user)
}