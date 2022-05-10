const dotenv = require('dotenv'); 
dotenv.config(); 
module.exports = { 
  dbserver: process.env.DBSERVER, 
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT
};