import { DataTypes } from "sequelize";
import Northwind from "../database";
import { Employees } from "./employees";
import { Territories } from "./territories";

export const EmployeeTerritories = Northwind.define("employee_territories", {
  employee_id: {
    primaryKey: true,
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  territory_id: {
    primaryKey: true,
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});

Employees.belongsToMany(Territories, {
  through: EmployeeTerritories,
  constraints: true,
  foreignKey: "employee_id",
});

Territories.belongsToMany(Employees, {
  constraints: true,
  through: EmployeeTerritories,
  foreignKey: "territory_id",
});

Employees.hasMany(EmployeeTerritories, { foreignKey: "employee_id" });
EmployeeTerritories.belongsTo(Employees, { foreignKey: "employee_id" });

Territories.hasMany(EmployeeTerritories, { foreignKey: "territory_id" });
EmployeeTerritories.belongsTo(Territories, { foreignKey: "territory_id" });

/* (async () => {
  const result = await Employees.findByPk(1, { include: Employees });
  const result2 = await EmployeeTerritories.findByPk(1, {
    include: [Territories, Employees],
  });
  console.log(result2?.toJSON());
})();
 */
