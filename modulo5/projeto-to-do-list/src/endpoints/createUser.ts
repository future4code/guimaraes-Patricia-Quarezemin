import { Request, Response } from 'express'
import connection from '../connection'

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { name, nickname, email } = req.body

        await connection('User')
        .insert({ name, nickname, email })

        res.status(201).end('User created successfully')
    } catch (error) {
        res.status(500).end('Something weng wrong.')
    }


}