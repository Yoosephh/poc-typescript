import db from "../config/db.connection"
import { ICount, IUser, IName } from "../../protocols"

async function sortUserId(id:number):Promise<IUser>{
  const user = await db.query<IUser>(`SELECT * FROM people WHERE id = $1;`, [id])
  return user.rows[0]
}

async function usersCount():Promise<ICount>{
  const count = await db.query<ICount>(`SELECT COUNT(*) FROM people;`)
  return count.rows[0]
}

async function createUser(user:IName) {
  const {firstName, lastName} = user
  await db.query(`INSERT INTO people ("firstName", "lastName") VALUES ($1, $2);`, [firstName, lastName])
}

async function deleteUser(id:number):Promise<void>{
  await  db.query(`DELETE * FROM people WHERE id=$1;`, [id]);
}

async function updateUser(id:number, firstName:string, lastName:string):Promise<void>{
  await db.query(`UPDATE people  SET "firstName" = $1, "lastName" = $2 WHERE id = $3;`, [firstName, lastName, id])
}

export const repository = {sortUserId, usersCount, createUser, deleteUser, updateUser}