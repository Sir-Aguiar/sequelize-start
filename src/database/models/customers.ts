import { DataTypes } from "sequelize";
import Northwind from "../database";

export const Customers = Northwind.define("customers", {
  customer_id: {
    type: DataTypes.STRING(5),
    primaryKey: true,
  },
  fax: {
    type: DataTypes.STRING(24),
  },
  phone: {
    type: DataTypes.STRING(24),
  },
  country: {
    type: DataTypes.STRING(15),
  },
  postal_code: {
    type: DataTypes.STRING(10),
  },
  region: {
    type: DataTypes.STRING(15),
  },
  city: {
    type: DataTypes.STRING(15),
  },
  address: {
    type: DataTypes.STRING(60),
  },
  contact_title: {
    type: DataTypes.STRING(30),
  },
  contact_name: {
    type: DataTypes.STRING(30),
  },
  company_name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
});
