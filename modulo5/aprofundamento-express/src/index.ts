import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'


export const app = express()//agora temos todas as funcionalidades do express

app.use(express.json())//através desta expressão, convertemos o body das nossas respostas para o formato json
app.use(cors())//habilita o cors


//------------------------------Exercícios Propostos-------------------------------------

//Exercício 1

app.get('/ping', (req: Request, res: Response)=>{
    res.send('Pong!')
})

//Exercício 2

type toDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//Exercício 3

const toDoList: toDo [] = [
    {
        userId: 1,
        id: 12,
        title: 'Fazer exercícios de aprofundamento - express',
        completed: false
    },
    {
        userId: 3,
        id: 34,
        title: 'Revisar os tópicos da aula de ontem',
        completed: true
    },
    {
        userId: 5,
        id: 56,
        title: 'Se candidatar para vagas de dev-júnior',
        completed: false
    },
    {
        userId: 7,
        id: 78,
        title: 'Jogar tênis',
        completed: true
    },
    {
        userId: 9,
        id: 90,
        title: 'Ver o Linkedin',
        completed: true
    }
]


//Exercício 4

app.get('/to/do/list', (req: Request, res: Response)=>{
    try{
        const toDo = toDoList

        const allToDo = toDo.filter((element)=>{
            if(element.completed === true){
                return element
            }
        })
        res.status(200).send(allToDo)
    }
    catch{
        res.status(404).send('Tarefa não encontrada ou não executada')
    }
})


//Exercício 5

app.post('/create', (req: Request, res: Response)=>{
    try{
        const userId = req.body.id
        const id = req.body.id
        const title = req.body.title
        const completed = false
       

        toDoList.push({
            userId: userId,
            id: id,
            title: title,
            completed: completed
        })
        res.status(200).send(toDoList)
    }
    catch{
        res.status(404).send('Afazer não incluso')
    }
})


//Exercício 7

app.delete('/to/do/:id', (req: Request, res: Response)=>{
    const id = Number(req.params.id)

    toDoList.forEach((u, i)=>{
        if(u.id === id){
            toDoList.splice(i, 1)
        }
    })
    res.status(200).send(toDoList)
})


app.listen(3003, ()=>{
    console.log('Servidor de pé')
})


//Exercício 9
// https://web.postman.co/workspace/My-Workspace~076cf10f-7efb-4fd5-805b-ee03eba11025/documentation/19715090-854fdfff-1010-483c-90af-d78c70b3497b
