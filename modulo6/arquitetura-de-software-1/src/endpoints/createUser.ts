import { Request, Response } from 'express'

export const createUser = async(req: Request, res: Response) => {
    try {
        
        const { name, email, password } = req.body

        if(
            !name || !email || !password
        ) {
            throw new Error('Preencha os campos "name", "email" e "password"')
        }

        // await insertUser ({
        //     name,
        //     email,
        //     password
        // })

        res.status(201).send({message: 'Usuário criado com sucesso!'})
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}