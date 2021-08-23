import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306,
        multipleStatements: true
    }
})

const recipeTableName = "cookenu_recipes"

connection.raw(`
            CREATE TABLE ${recipeTableName} (
                id VARCHAR(255) PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description VARCHAR(10000) NOT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                authorId VARCHAR(255),
                FOREIGN KEY (authorId) REFERENCES cookenu_users(id)
            );
        `).then(() => console.log("Tabela de receitas criada com sucesso"))
    .catch(error => console.log(error.message))
    .finally(() => { connection.destroy() })

