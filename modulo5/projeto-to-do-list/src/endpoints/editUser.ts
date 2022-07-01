import { Request, Response } from 'express'
import connection from '../connection'

export default async function editUser(
    req: Request,
    res: Response
): Promise<void>{
    try {
        
       const id = req.params.id
       const { name, nickname, email } = req.body

       await connection('User')
       .update({
        name: name,
        nickname: nickname,
        email: email
       })
       .where({
        id
       })

       res.status(200).send('User data sucessfully changed.')
    } catch (error) {
        res.status(500).send('Something weng wrong.')
    }
}