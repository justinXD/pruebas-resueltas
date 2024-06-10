import dotenv from 'dotenv'
dotenv.config();
export interface EnvConfig {
    dev: boolean,
    nodeEnv: string,

    port: string | number,
    cors: string | undefined,
    //   salt: process.env.SALT,
    //   jwtSecret: process.env.JWT_SECRET,
    //   jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
    //   jwtActivationSecret: process.env.JWT_ACTIVATION_SECRET,

    siteUrl: string,
    //   sendGridKey: process.env.SEND_GRID_KEY,

    // dbUserTest: process.env.DB_USER_TEST,
    // dbPwdTest: process.env.DB_PWD_TEST,
    // dbNameTest: process.env.DB_NAME_TEST,
    // serverTest: process.env.SERVER_TEST, 

    dbUser: string,
    dbPwd: string | undefined,
    dbName: string,
    server: string
} 

export const config: EnvConfig = {
    dev: process.env.NODE_ENV !== 'production',
    nodeEnv: process.env.NODE_ENV || 'development',

    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    //   salt: process.env.SALT,
    //   jwtSecret: process.env.JWT_SECRET,
    //   jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
    //   jwtActivationSecret: process.env.JWT_ACTIVATION_SECRET,

    siteUrl: process.env.ENDPOINT || 'http://localhost:3000',

    //   sendGridKey: process.env.SEND_GRID_KEY,

    // dbUserTest: process.env.DB_USER_TEST,
    // dbPwdTest: process.env.DB_PWD_TEST,
    // dbNameTest: process.env.DB_NAME_TEST,
    // serverTest: process.env.SERVER_TEST, 

    dbUser: process.env.DB_USER || 'sa',
    dbPwd: process.env.DB_PWD,
    dbName: process.env.DB_NAME || 'db',
    server: process.env.SERVER || 'localhost',
}
