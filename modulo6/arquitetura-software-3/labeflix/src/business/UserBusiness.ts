import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { UserInputDTO } from "../model/UserInputDTO"

export class UserBusiness {
  async create(input: UserInputDTO): Promise<void> {

    const { email, name, password } = input
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  async getAllUser(): Promise<void> {

    try {
      return await new UserDatabase().getAllUser()
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

}
