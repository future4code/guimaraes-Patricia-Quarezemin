import { UserDatabase } from "../data/UserDatabase"
import { generateId } from "../services/generateId"
import { UserInputDTO } from "../model/UserInputDTO"
import { CustomError } from "../error/CustomError"
import { InvalidRequest } from "../error/InvalidRequest"

export class UserBusiness {
  async create(input: UserInputDTO): Promise<void> {

    try {
      const { email, name, password } = input
      if (!email || !name || !password) {
        throw new InvalidRequest()
      }

      const id = generateId()

      const userDatabase = new UserDatabase()
      await userDatabase.create({
        id,
        name,
        email,
        password
      })
    } catch (error: any) {
      throw new CustomError(error.message || error.sqlMessage, error.statusCode);

    }

  }

  async getAllUser(): Promise<void> {

    try {
      return await new UserDatabase().getAllUser()
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

}
