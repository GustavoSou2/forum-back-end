import 'reflect-metadata';
import { resolve } from 'path';
import { config } from 'dotenv-flow';
import { DataSource } from 'typeorm';
import database from '../../../database/database';

config({ silent: true });

const databaseConfig = database();

const dataSource = new DataSource({
  migrationsTableName: 'migrations',
  migrationsRun: true,
  type: "mysql",
  host: "us-cdbr-east-06.cleardb.net",
  port: 3306,
  username: "beb80608431dfb",
  password: "af01bd07",
  database: "heroku_3072c51389dd840",
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