import { Options, Sequelize } from "sequelize";
import CREDENTIALS_CONFIG from "./config/credentials";

interface PsqlCredentials extends Options {}

const Northwind = new Sequelize(CREDENTIALS_CONFIG as PsqlCredentials);

export default Northwind;
/*
	The define section in this configuration file is just to previne some errors. Since our example database (Northwind) doesn't have createdAt or updatedAt columns, we need to say to Sequelize to don't expect it to be there.

	To connect into your Postgres set an object with its host (in this case localhost), the name of the database, Northwind, and your credentials, de name of your user and the password.
*/
