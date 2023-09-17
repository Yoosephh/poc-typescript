import { repository } from "../repositories/people.repositories"
import { Count, User } from "../../protocols"

async function userSort():Promise<User>{
  const totalUsers:Count = await repository.usersCount()
  const countUsers = totalUsers.count
  const id = Math.floor(Math.random() * countUsers) + 1
  const user:User = await repository.sortUserId(id)

  return user
}

async function userCreate(user:Omit<User, "id">):Promise<void>{
  await repository.createUser(user)
}

async function deleteUser(id:number):Promise<void>{
  await repository.deleteUser(id)
}

async function updateUser(id:number, firstName:string|null, lastName:string|null):Promise<void>{
  
  await repository.updateUser(id, firstName, lastName)
}

export const services = {userSort, userCreate, deleteUser, updateUser}