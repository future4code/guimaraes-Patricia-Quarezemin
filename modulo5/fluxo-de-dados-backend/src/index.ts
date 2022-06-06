import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { appendFile } from 'fs'

const app = express()
app.use(express.json())
//faltou o cors
app.listen(3003, ()=>{
    console.log('Servidor de pé')
})