import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { usersBank } from './data'


const app = express()//agora temos todas as funcionalidades do express

app.use(express.json())//com essa sintaxe, convertemos o body das nossas respostas para o formato json
app.use(cors())//habilita o cors


//LaBeBank - (POC)

//Funcionalidades
//1. Criar Conta

app.post('/account/create', (req: Request, res: Response)=>{
    try {
        const newUser = {
            name: req.body.name,
            CPF: req.body.CPF,
            dateOfBirth: req.body.dateOfBirth,
            balance: 0,
            bankStatement: []
        }

         for(let user of usersBank) {
             if(user.CPF === newUser.CPF) {
                 throw new Error('CPF already registered.')
             }
         }    

         if(!req.body.name || !req.body.CPF || !req.body.dateOfBirth) {
             throw new Error('Please fill in all all fields.')
         }
               
    } catch (error :any) {
        
    }
})



app.listen(3003, ()=>{
    console.log('Servidor de pé')
})