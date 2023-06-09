import { DataTypes } from "sequelize";
import Northwind from "../database";
import { CustomerDemographics } from "./customer_demographics";
import { Customers } from "./customers";

export const CustomerCustomerDemo = Northwind.define("customer_customer_demo", {
  customer_id: {
    type: DataTypes.STRING(5),
    allowNull: false,
    primaryKey: true,
  },
  customer_type_id: {
    type: DataTypes.STRING(5),
    allowNull: false,
    primaryKey: true,
  },
});

CustomerDemographics.belongsToMany(Customers, {
  through: CustomerCustomerDemo,
  constraints: true,
  foreignKey: "customer_type_id",
});

Customers.belongsToMany(CustomerDemographics, {
  through: CustomerCustomerDemo,
  constraints: true,
  foreignKey: "customer_id",
});

Customers.hasMany(CustomerDemographics, { foreignKey: "customer_id" });
CustomerDemographics.belongsTo(Customers, { foreignKey: "customer_id" });

CustomerDemographics.hasMany(Customers, { foreignKey: "customer_type_id" });
Customers.belongsTo(CustomerDemographics, { foreignKey: "customer_type_id" });
