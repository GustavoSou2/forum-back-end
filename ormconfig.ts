import { DataSource } from "typeorm";
import {resolve} from "node:path";

export const appDataSource = new DataSource({
    migrationsTableName: 'migrations',
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "blog",
    synchronize: true,
    entities: [
        resolve(
            'src/modules/**/infra/typeorm/entities/*.{ts,js}'
        ),
        resolve(__dirname, 'src/shared/typeorm/entities/*.{ts,js}')
    ],
    migrations: [resolve('src/shared/typeorm/migrations/*.{ts,js}')],
})

appDataSource.initialize()
.then(() => console.log('Connection with database is successful'))
.catch(() => console.log("Cannot create connection with database"))