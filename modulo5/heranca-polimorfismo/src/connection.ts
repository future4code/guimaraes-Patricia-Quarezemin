import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export const connection = knex ({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        password: process.env.PASS,
        database: process.env.DB_NAME,
        multipleStatements: true
    }
})
