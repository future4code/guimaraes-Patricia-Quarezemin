import { UserDataBase } from "../data/UserDataBase"
import { CustomError } from "../error/CustomError";
import { InvalidEmail } from "../error/InvalidEmail";
import { InvalidPassword } from "../error/InvalidPassword";
import { InvalidRequest } from "../error/InvalidRequest";
import { UserNotFound } from "../error/UserNotFound";
import { LoginInputDTO, UserInputDTO } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator"

const idGenerator = new IdGenerator()
const authenticator = new Authenticator()

export class UserBusiness {

    async signup(input: any): Promise<string> {
        try {
            const { name, email, password } = input

            if (!email || !password) {
                throw new InvalidRequest();

            }

            if (!email.includes('@')) {
                throw new InvalidEmail();

            }

            if (password.length < 6) {
                throw new InvalidPassword();

            }

            const id: string = idGenerator.generateId()

            const userDataBase = new UserDataBase()
            const newUser = {
                id,
                name,
                email,
                password
            }

            await userDataBase.insert(newUser)


            const token = authenticator.generateToken({ id })
            return token


        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode);

        }
    }

    async login(input: LoginInputDTO): Promise<string> {
        try {
            const { email, password } = input

            if (!email || !password) {
                throw new InvalidRequest();

            }

            if (!email.includes('@')) {
                throw new InvalidEmail();

            }

            if (password.length < 6) {
                throw new InvalidPassword();

            }

            const userDataBase = new UserDataBase()
            const user = await userDataBase.findUserByEmail(email)

            if (!user) {
                throw new UserNotFound();
            }

            if(user.password !== password) {
                throw new InvalidPassword();
            }

            const id = user.id
            const token = authenticator.generateToken({ id })
            return token


        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode);

        }
    }
}