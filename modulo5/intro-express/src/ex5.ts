import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express'

const app = express() //agora temos todas as funcionalidades do express

app.use(express.json()) //através desta expressão, vamos trocar informações por meio do formato json
app.use(cors()) //habilita o cors

app.post('/posts', (req: Request, res: Response)=>{
    try{
        res.status(200).send('Lista dos posts')
    }
    catch(error){
        res.status(404).send('Página não encontrada!')
    }
})

export type post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

app.listen(3003, ()=>{
    console.log('Servidor de pé')
})