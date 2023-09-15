import db from "../config/db.connection"
import { Count, User } from "../../protocols"

async function sortUserId(id:number):Promise<User>{
  const user = await db.query<User>(`SELECT * FROM people WHERE id = $1;`, [id])
  return user.rows[0]
}

async function usersCount():Promise<Count>{
  const count = await db.query<Count>(`SELECT COUNT(*) FROM people;`)
  return count.rows[0]
}

export const repository = {sortUserId, usersCount}