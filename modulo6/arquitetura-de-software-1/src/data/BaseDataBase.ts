import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export class BaseDataBase {
   //será protegido e estático, pois somente classe filhas acessarão essa conexão e static
   //para não precisar criar uma instância para acessar o meu DataBase; quero que seja algo único
   protected static connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        }
    })
}