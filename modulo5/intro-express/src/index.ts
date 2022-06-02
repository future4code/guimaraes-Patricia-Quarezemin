import express from 'express';
import cors from 'cors';

const app = express() //agora temos todas as funcionalidades do express

app.use(express.json()) //através desta expressão, vamos trocar informações por meio do formato json
app.use(cors()) //habilita o cors



app.listen(3003, ()=>{
    console.log('Servidor de pé')
})

