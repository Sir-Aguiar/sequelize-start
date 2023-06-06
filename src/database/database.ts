import "dotenv/config";
import { Sequelize } from "sequelize";

/*
	The define section in this configuration file is just to previne some errors. Since our example database (Northwind) doesn't have createdAt or updatedAt columns, we need to say to Sequelize to don't expect it to be there.

	To connect into your Postgres set an object with its host (in this case localhost), the name of the database, Northwind, and your credentials, de name of your user and the password.
*/

const Northwind = new Sequelize({
  host: "localhost",
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: "Northwind",
  dialect: "postgres",

  define: {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  },
});

export default Northwind;
