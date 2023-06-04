import "dotenv/config";
import { Sequelize } from "sequelize";

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
