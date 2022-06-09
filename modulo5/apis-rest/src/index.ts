import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { users, USER_TYPE, user } from './data'

const app = express()

app.use(express.json())
app.use(cors())


//-------------------------------------EXERCÍCIOS PROPOSTOS-------------------------------------//

//Exercício 1 - Fazer em endpoint que busque todos os usuários de uma lista.
//a) Qual método HTTP você deve utilizar para isso?
//R: Método GET.

//b) Como você indicaria a entidade que está sendo manipulada?
//R: '/user/list'

app.get('/user', (req: Request, res: Response) =>{
    res.send(users)
})

//Exercício 2 - Criar um endpoint que busque todos os usuários que tenham uma propriedade type específica recebendo
//apenas um type por vez.

app.get('/user', (req: Request, res: Response) => {

    let errorCode = 500
    try {

        const type = req.query.type as string

        const userList = users.filter((u) =>{
            if (type.toLowerCase() === USER_TYPE.ADMIN) {
               return u
            }

            res.status(200).send(userList)
        })

            } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//a) Como você passou os parâmetros de type para a requisição? Por quê?
//R:

//b) Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
//R: Passando uma verificação com a condicional && , assim somente aqueles que tiverem os types 'ADMIN' ou 'NORMAL' apareceram no array, caso
//contrário aparecerá uma msg no postman para correção.


//Exercício 3 - Fazer um endpoint de busca que encontre um usuário por nome.

//a) Qual o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//R:

//b) ALtere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

app.get('/user', (req: Request, res: Response) => {

    let errorCode = 500

    try {

        const name = req.query.name as string

        if (!name) {
            errorCode = 422
            throw new Error('Usuário não encontrado')
        }

        const listUsers = users.filter(u => u.name.toLowerCase() === name.toLowerCase())

        if (!listUsers.length) {
            errorCode = 404
            throw new Error('Usuário não encontrado');
        }

        res.status(200).send(listUsers)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})



//Exercício 4 - Crie um endpoint que use o método POST para adicionar um item ao nosso conjunto de usuários.
//a) Mude o método do endpoint para PUT. O que mudou?
//R: Não mudou nada, pois o usuário foi criado da mesma forma.

//b) Você considera o método PUT apropriado para esta transação? Por quê?
//R: Não acho esse endpoint apropriado para criação de um novo usuário, mas sim para atualizar alguma informação de um já existente!

app.post('/user/create', (req: Request, res: Response) => {

    let errorCode = 500

    try {

        const { name, email, type, age } = req.body

        if (!name || !email || !type || !age) {
            errorCode = 422
            throw new Error('Faltam parâmetros a serem passados no body.');
        }

        if (type != USER_TYPE.ADMIN && type != USER_TYPE.NORMAL) {
            errorCode = 422
            throw new Error('Inserir tipo de usuário válido: "ADMIN" ou "NORMAL"');
        }

        const newUser: user = {
            id: users.length +1,
            name: name,
            email: email,
            type: type,
            age: age
        }

        users.push(newUser)

        res.status(200).send(users)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.listen(3003, () => {
    console.log('Servidor de pé')
})