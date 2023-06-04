import Northwind from "./database";
import { DataTypes } from "sequelize";

const Employee = Northwind.define("employees", {
	employee_id: {
		type: DataTypes.SMALLINT,
		allowNull: false,
		primaryKey: true,
	},
	last_name: {
		type: DataTypes.STRING(20),
		allowNull: false,
	},
	first_name: {
		type: DataTypes.STRING(10),
		allowNull: false,
	},
	title: {
		type: DataTypes.STRING(30),
	},
	title_of_courtesy: {
		type: DataTypes.STRING(25),
	},
	birth_date: { type: DataTypes.DATE },
	hire_date: { type: DataTypes.DATE },
	address: { type: DataTypes.STRING(60) },
	city: { type: DataTypes.STRING(15) },
	region: { type: DataTypes.STRING(15) },
	postal_code: { type: DataTypes.STRING(10) },
	country: { type: DataTypes.STRING(15) },
	home_phone: { type: DataTypes.STRING(24) },
	extension: { type: DataTypes.STRING(4) },
	photo: { type: DataTypes.BLOB },
	notes: { type: DataTypes.TEXT },
	reports_to: { type: DataTypes.SMALLINT },
	photo_path: { type: DataTypes.STRING(255) },
});

export { Employee };
