import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { usersBank, account } from './data'


const app = express()//agora temos todas as funcionalidades do express

app.use(express.json())//com essa sintaxe, convertemos o body das nossas respostas para o formato json
app.use(cors())//habilita o cors


//LaBeBank - (POC)

//Funcionalidades
//1. Criar Conta

app.post('/account/create', (req: Request, res: Response)=>{
    try {
        const newUser : account = {
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

         if(!newUser.name || !newUser.CPF || !newUser.dateOfBirth) {
             throw new Error('Please fill in all all fields.')
         }

       
         usersBank.push(newUser)
               
    } catch (error :any) {
        res.status(400).send(error.message)
    }
})

//2. Pegar usuários existentes no array

app.get('/user', (req: Request, res: Response) =>{
    try {
        if(usersBank.length === 0) {
            throw new Error('No users registered.');            
        }else{
            res.status(200).send(usersBank)
        }
    } catch (error: any) {
        res.status(500).send(error.message)
    }
    
})


app.listen(3003, ()=>{
    console.log('Servidor de pé')
})