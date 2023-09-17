import { Request, Response } from "express";
import { User } from "../../protocols";
import { services } from "../services/people.services";

export async function sortUser(req:Request, res:Response){
  const user:User = await services.userSort()
  res.send(user)
}

export async function createUser(req:Request, res:Response){
  const user:Omit<User, "id"> = req.body
  await services.userCreate(user)
  res.status(201).send("Usuario cadastrado!")
}

export async function deleteUser(req:Request, res:Response){
  const id = Number(req.params.id)
  await services.deleteUser(id)
  res.status(200).send(`Usuário deletado com sucesso!`)
}

export async function updateUser(req:Request, res:Response) {
  const id = Number(req.params.id)
  const firstName:string | null = req.body.firstName
  const lastName: string | null= req.body.lastName
  if(!firstName || !lastName) return res.status(400).send({message: 'necessário fornecer ambos os campos firstName e lastName'})
  await services.updateUser(id, firstName, lastName)
  res.status(200).send({message:`Usuário atualizado com sucesso!`})
}