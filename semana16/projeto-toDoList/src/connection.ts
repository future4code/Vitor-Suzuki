import knex from "knex";
import dotenv from "dotenv";
import express from "express";

dotenv.config();



export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app = express()
app.use(express.json())

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003")
})