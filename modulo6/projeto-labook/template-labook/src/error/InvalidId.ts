import { CustomError } from "./CustomError"

export class InvalidId extends CustomError {
    constructor() {
        super('Id não encontrada! Favor passar o parâmetro correto.', 400)
    }
}