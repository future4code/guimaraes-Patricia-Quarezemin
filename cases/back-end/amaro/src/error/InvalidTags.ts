import { CustomError } from "./CustomError"

export class InvalidTags extends CustomError {
    constructor() {
        super(400, 'Tag inválida, favor fornecer as informações corretas.')
    }
}