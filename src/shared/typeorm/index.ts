import 'reflect-metadata';
import { resolve } from 'path';
import { config } from 'dotenv-flow';
import { DataSource } from 'typeorm';
import database from '../../database/database';

config({ silent: true });

const databaseConfig = database();

const dataSource = new DataSource({
  migrationsTableName: 'migrations',
  migrationsRun: true,
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "admin",
  database: "blog",
  synchronize: true,
  logging: true,
  entities: [
    resolve(
        __dirname,
        '..',
        '..',
        'modules/**/infra/typeorm/entities/**/*.{ts,js}'
    ),
      resolve(__dirname, 'entities/*.{ts,js}')
  ],
  migrations: [resolve(__dirname, 'migrations/*.{ts,js}')],
  subscribers: [],
})

export async function createConnection(): Promise<DataSource> {
  return dataSource.initialize();
}

export default dataSource;