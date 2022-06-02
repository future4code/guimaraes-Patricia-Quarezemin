import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express'
import { usersPq } from './ex3';

const app = express() //agora temos todas as funcionalidades do express

app.use(express.json()) //através desta expressão, vamos trocar informações por meio do formato json
app.use(cors()) //habilita o cors

app.get('/users/list', (req: Request, res: Response)=>{
    try{
        const userList = usersPq

        const lista = userList.map((element)=>{
            return element
        })

        res.status(200).send(lista)
    }
    catch(error){
        res.status(404).end('Usuário não encontrado.')
    }
})


app.listen(3003, ()=>{
    console.log('Servidor de pé')
})