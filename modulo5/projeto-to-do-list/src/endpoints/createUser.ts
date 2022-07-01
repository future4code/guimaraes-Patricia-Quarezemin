import { Request, Response } from 'express'
import connection from '../connection'

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { name, nickname, email } = req.body

        if(!name || !nickname || !email){
            throw new Error('Parameter not sent!')
        }

        await connection.raw(`
        INSERT INTO User
        (name, nickname, email)
        VALUES(
            "${req.body.name}",
            "${req.body.nickname}",
            "${req.body.email}"
        )
        `);

        res.status(201).end(`User ${name} created successfully`)
    } catch (error) {
        res.status(500).end('Something weng wrong.')
    }


}