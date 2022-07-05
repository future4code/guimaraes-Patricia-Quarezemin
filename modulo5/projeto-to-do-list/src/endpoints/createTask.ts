import { Request, Response } from 'express'
import connection from '../connection'

export default async function createTask(
    req: Request,
    res: Response
): Promise<void>{
    try {
        
        const { title, description, limitDate } = req.body

        await connection('Task')
        .insert({ title, description, limitDate })

        res.status(201).send('Task created successfully!')
    } catch (error) {
        res.status(500).send('Something weng wrong.')
    }
}