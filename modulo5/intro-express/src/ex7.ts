import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express'
import { postArray } from './ex6';

const app = express() //agora temos todas as funcionalidades do express

app.use(express.json()) //através desta expressão, vamos trocar informações por meio do formato json
app.use(cors()) //habilita o cors

app.get('/posts/users', (req: Request, res: Response)=>{
    try{
       const postUsers = postArray

       const posts = postUsers.map((element)=>{
            return element
       })
        res.status(200).send(posts)
    }
    catch{
        res.status(404).send('Post não encontrado')
    }
})

app.listen(3003, ()=>{
    console.log('Servidor de pé')
})