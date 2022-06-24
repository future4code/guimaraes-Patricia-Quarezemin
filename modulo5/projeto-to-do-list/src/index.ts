import connection from './connection'
import app from './app'
import { Request, Response } from 'express'

app.post('/user', async (req: Request, res: Response)=>{

    const { name, nickname, email } = req.body;

    try{
        await connection('')

    } catch(e) {
        console.error({e});
        return res.status(500).send('Algo deu errado!')
    }
})