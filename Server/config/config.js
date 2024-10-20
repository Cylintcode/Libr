require('dotenv').config();



console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME); 
console.log('DB_HOST:', process.env.DB_HOST);
module.exports =
{
  development: {
    username: 'postgres.nfaxhurissvjztlaktop',
    password: 'Roninsage@0202',
    database: 'postgres',
    host: 'aws-0-us-west-1.pooler.supabase.com',
    logging: true,
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  }
}
