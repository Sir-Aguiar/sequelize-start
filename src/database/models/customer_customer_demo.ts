import { DataTypes } from "sequelize";
import Northwind from "../database";
import { CustomerDemographics } from "./customer_demographics";
import { Customers } from "./customers";

export const CustomerCustomerDemo = Northwind.define("customer_customer_demo", {
  customer_id: {
    type: DataTypes.STRING(5),
    allowNull: false,
    primaryKey: true,

    references: {
      model: Customers,
      key: "customer_id",
    },
  },
  customer_type_id: {
    type: DataTypes.STRING(5),
    allowNull: false,
    primaryKey: true,
    references: {
      model: CustomerDemographics,
      key: "customer_type_id",
    },
  },
});
