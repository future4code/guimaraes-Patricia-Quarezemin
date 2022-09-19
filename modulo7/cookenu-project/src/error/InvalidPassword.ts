import { CustomError } from "./CustomError"

export class InvalidPassword extends CustomError {
    constructor() {
        super('Invalid password, one or more information is missing', 400)
    }
}