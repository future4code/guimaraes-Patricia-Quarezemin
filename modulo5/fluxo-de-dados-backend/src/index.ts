import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { toDoList } from './data'

const app = express()
app.use(express.json())
app.use(cors())

//--------------------------------------EXERCÍCIOS PROPOSTOS--------------------------------------//

//Exercício 1.

app.get('/test', (req: Request, res: Response) => {
    res.status(200).send('API funcionando!')
})


//Exercício 3

app.post('/new/product', (req: Request, res: Response)=>{
    try{
        const id = req.body.id
        const name = req.body.name
        const price = req.body.price

        toDoList.push({
            id: id,
            name: name,
            price: price
        })
        
        res.status(200).send(toDoList)
    }
    catch{
        res.status(400).send('Produto não inserido')
    }
})


//Exercício 4

app.get('/list', (req: Request, res: Response)=>{
    try{
        toDoList.map((element)=>{
            return element
        })

        res.status(200).send(toDoList)
    }
    catch{
        res.status(400).send('Lista não encontrada')
    }
})


//Exercício 5

app.put('/list/put', (req: Request, res: Response)=>{
    try{
        
    }
    catch{
        res.status(400).send('Preço não alterado')
    }
})

app.listen(3003, () => {
    console.log('Servidor de pé')
})
