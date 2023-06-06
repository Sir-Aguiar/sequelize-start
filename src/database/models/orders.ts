import { DataTypes } from "sequelize";
import Northwind from "../database";
import { Customers } from "./customers";
import { Shippers } from "./shippers";
import { Employees } from "./employees";

export const Orders = Northwind.define("orders", {
  order_id: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    allowNull: false,
  },
  customer_id: {
    type: DataTypes.STRING(5),
  },
  employee_id: {
    type: DataTypes.SMALLINT,
  },
  order_date: {
    type: DataTypes.DATE,
  },
  required_date: {
    type: DataTypes.DATE,
  },
  shipped_date: {
    type: DataTypes.DATE,
  },
  ship_via: {
    type: DataTypes.SMALLINT,
  },
  freight: {
    type: DataTypes.REAL,
  },
  ship_name: {
    type: DataTypes.STRING(40),
  },
  ship_address: {
    type: DataTypes.STRING(60),
  },
  ship_city: {
    type: DataTypes.STRING(15),
  },
  ship_region: {
    type: DataTypes.STRING(15),
  },
  ship_postal_code: {
    type: DataTypes.STRING(10),
  },
  ship_country: {
    type: DataTypes.STRING(15),
  },
});
