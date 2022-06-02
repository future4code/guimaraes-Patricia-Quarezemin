import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express'

const app = express() //agora temos todas as funcionalidades do express

app.use(express.json()) //através desta expressão, vamos trocar informações por meio do formato json
app.use(cors()) //habilita o cors

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello from Express!')
})

app.listen(3003, ()=>{
    console.log('Servidor de pé')
})