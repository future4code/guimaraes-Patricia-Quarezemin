import { Request, Response } from 'express'
import connection from '../connection'
import { user } from '../types'

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { name, nickname, email } = req.body

        await connection('User')
        .insert({ name, nickname, email })

        res.status(201).end()
    } catch (error) {
        res.status(500).end()
    }


}