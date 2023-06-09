import Northwind from "../database";
import { DataTypes } from "sequelize";
import { EmployeeTerritories } from "./employee_territories";
import { Territories } from "./territories";

/*
Models are the essence of Sequelize. A model is an abstraction that represents a table in your database. In Sequelize, it is a class that extends Model.

The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).

After a model is defined, it is available within sequelize.models by its model name.

*/

export const Employees = Northwind.define("employees", {
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
  title: DataTypes.STRING(30),
  title_of_courtesy: DataTypes.STRING(25),
  birth_date: DataTypes.DATE,
  hire_date: DataTypes.DATE,
  address: DataTypes.STRING(60),
  city: DataTypes.STRING(15),
  region: DataTypes.STRING(15),
  postal_code: DataTypes.STRING(10),
  country: DataTypes.STRING(15),
  home_phone: DataTypes.STRING(24),
  extension: DataTypes.STRING(4),
  photo: DataTypes.BLOB,
  notes: DataTypes.TEXT,
  reports_to: DataTypes.SMALLINT,
  photo_path: DataTypes.SMALLINT,
});

Employees.belongsTo(Employees, {
  constraints: true,
  foreignKey: "reports_to",
});
