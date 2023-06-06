import { DataTypes } from "sequelize";
import Northwind from "../database";

export const Suppliers = Northwind.define("suppliers", {
  supplier_id: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    allowNull: false,
  },
  company_name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  contact_name: {
    type: DataTypes.STRING(30),
  },
  contact_title: {
    type: DataTypes.STRING(30),
  },
  address: {
    type: DataTypes.STRING(60),
  },
  city: {
    type: DataTypes.STRING(15),
  },
  region: {
    type: DataTypes.STRING(15),
  },
  postal_code: {
    type: DataTypes.STRING(10),
  },
  country: {
    type: DataTypes.STRING(15),
  },
  phone: {
    type: DataTypes.STRING(24),
  },
  fax: {
    type: DataTypes.STRING(24),
  },
  homepage: {
    type: DataTypes.TEXT,
  },
});
