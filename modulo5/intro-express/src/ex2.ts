import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express'

const app = express() //agora temos todas as funcionalidades do express

app.use(express.json()) //através desta expressão, vamos trocar informações por meio do formato json
app.use(cors()) //habilita o cors

app.get('/users', (req: Request, res: Response)=>{
    res.status(200).send('Usuários visualizados')
})

app.listen(3003, ()=>{
    console.log('Servidor de pé')
})



export type user = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string | number
}