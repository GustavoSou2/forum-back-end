export default (): {
    DIALECT: any;
    HOST: string;
    PORT: number;
    NAME: string;
    USER: string;
    PASSWORD: string;
} => {
    return {
        DIALECT: process.env.DB_CONNECT || 'mysql',
        HOST: process.env.DB_HOST || 'localhost',
        PORT: Number(process.env.DB_PORT) || 3306,
        NAME: process.env.DB_DATABASE || 'blog',
        USER: process.env.DB_USERNAME || 'root',
        PASSWORD: process.env.DB_PASSWORD || 'admin',
    };
};
