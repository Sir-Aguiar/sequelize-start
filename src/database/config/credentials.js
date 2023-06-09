require("dotenv/config");

const CREDENTIALS_CONFIG = {
  host: "localhost",
  port: process.env.DATABASE_PORT,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: "Northwind",
  dialect: "postgres",
  define: {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  },
};

module.exports = CREDENTIALS_CONFIG;
