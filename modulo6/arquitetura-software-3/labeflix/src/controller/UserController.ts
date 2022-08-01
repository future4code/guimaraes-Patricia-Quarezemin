import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const userBusiness = new UserBusiness();
      await userBusiness.create({ email, name, password });

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
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
