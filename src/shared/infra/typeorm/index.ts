import 'reflect-metadata';
import { resolve } from 'path';
import { config } from 'dotenv-flow';
import { DataSource } from 'typeorm';
import { IDatabase, database } from '../../../database/database';

config({ silent: true });

const databaseConfig: IDatabase = database(true);

const dataSource = new DataSource({
  type: "mysql",
  migrationsTableName: 'migrations',
  migrationsRun: true,
  host: databaseConfig.HOST,
  port: databaseConfig.PORT,
  username: databaseConfig.USER,
  password: databaseConfig.PASSWORD,
  database: databaseConfig.NAME,
  synchronize: true,
  logging: true,
  entities: [
    resolve(__dirname, 'entities/*.{ts,js}'),
    resolve(
        __dirname,
        '..',
        '..',
        '..',
        'modules/**/infra/typeorm/entities/**/*.{ts,js}'
    ),
  ],
  migrations: [
    resolve(__dirname, 'migrations/*.{ts,js}')
],
  subscribers: [],
})

export async function createConnection(): Promise<DataSource> {
  return dataSource.initialize();
}

export default dataSource;