import { DataTypes } from "sequelize";
import Northwind from "../database";
import { Employees } from "./employees";
import { Territories } from "./territories";

export const EmployeeTerritories = Northwind.define("employee_territories", {
  employee_id: {
    primaryKey: true,
    type: DataTypes.SMALLINT,
    allowNull: false,
    references: {
      model: Employees,
      key: "employee_id",
    },
  },
  territory_id: {
    primaryKey: true,
    type: DataTypes.STRING(20),
    allowNull: false,
    references: {
      model: Territories,
      key: "territory_id",
    },
  },
});
