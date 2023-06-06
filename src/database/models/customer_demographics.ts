import { DataTypes } from "sequelize";
import Northwind from "../database";

export const CustomerDemographics = Northwind.define("customer_demographics", {
  customer_type_id: {
    type: DataTypes.STRING(5),
    primaryKey: true,
    allowNull: false,
  },
  customer_desc: {
    type: DataTypes.TEXT,
  },
});
