import { CustomError } from "./CustomError"

export class InvalidName extends CustomError {
    constructor() {
        super(400, 'O produto com este nome não está cadastrado. Favor inserir outro nome!')
    }
}