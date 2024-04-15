export default () => ({
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  // DATABASE
  database: {
    databaseHost: process.env.DATABASE_HOST || 'localhost',
    databasePort: parseInt(process.env.DATABASE_PORT) || 3306,
    databaseUser: process.env.DATABASE_USER || 'root',
    databasePassword: process.env.DATABASE_PASSWORD || 'password',
    databaseName: process.env.DATABASE_NAME || 'test',
    syncronize: process.env.DATABASE_SYNC === 'true',
  },
});
