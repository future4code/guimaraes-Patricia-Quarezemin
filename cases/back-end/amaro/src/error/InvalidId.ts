import { CustomError } from "./CustomError"


export class InvalidId extends CustomError {
    constructor() {
        super(400, 'Id inválido! Favor colocar informação correta!')
    }
}