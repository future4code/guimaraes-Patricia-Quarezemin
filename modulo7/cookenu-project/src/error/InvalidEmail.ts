import { CustomError } from "./CustomError"

export class InvalidEmail extends CustomError {
    constructor() {
        super('Invalid email, missing "@"', 400)
    }
}