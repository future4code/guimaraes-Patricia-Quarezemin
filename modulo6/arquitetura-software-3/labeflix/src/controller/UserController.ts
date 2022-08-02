import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/UserInputDTO";

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { email, name, password } = req.body

      const input: UserInputDTO = {
        email,
        name,
        password
      }

      const userBusiness = new UserBusiness();
      userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message) || error.sqlMessage;
    }
  }

  async getAllUser(req: Request, res: Response): Promise<any> {

    try {
      const getAllUser = new UserBusiness()
      await getAllUser.getAllUser()

      res.status(200).send(getAllUser)
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
