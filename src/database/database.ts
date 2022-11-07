export interface IDatabase {
    DIALECT: any;
    HOST: string;
    PORT: number;
    NAME: string;
    USER: string;
    PASSWORD: string;
}

export function database(isLocal: boolean = true): IDatabase {
    return {
        DIALECT: isLocal ? process.env.DB_CONNECT : process.env.DB_CONNECT_PROD,
        HOST: isLocal ? String(process.env.DB_HOST) : String(process.env.DB_HOST_PROD),
        PORT: Number(process.env.DB_PORT) || 3306,
        NAME: isLocal ? String(process.env.DB_DATABASE) : String(process.env.DB_DATABASE_PROD),
        USER: isLocal ? String(process.env.DB_USERNAME) : String(process.env.DB_USERNAME_PROD),
        PASSWORD: isLocal ? String(process.env.DB_PASSWORD) : String(process.env.DB_PASSWORD_PROD),
    };
};
