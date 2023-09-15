import { repository } from "repositories/people.repositories"
import { Count, User } from "../../protocols"

async function userSort():Promise<User>{
  const totalUsers:Count = await repository.usersCount()
  const countUsers = totalUsers.count
  const id = Math.floor(Math.random() * countUsers) + 1
  const user:User = await repository.sortUserId(id)

  return user
}

export const services = {userSort}