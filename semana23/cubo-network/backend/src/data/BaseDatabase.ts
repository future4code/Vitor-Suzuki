import knex, { Knex } from "knex";

export abstract class BaseDataBase {
    private static connection: Knex | null

    protected getConnection(): Knex {
        if (!BaseDataBase.connection) {
            BaseDataBase.connection = knex({
                client: 'mysql',
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASS,
                    database: process.env.DB_NAME,
                    port: 3306,
                    multipleStatements: true
                }
            })
        }

        return BaseDataBase.connection
    }
} 