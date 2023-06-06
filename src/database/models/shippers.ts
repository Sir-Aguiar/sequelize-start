import { DataTypes } from "sequelize";
import Northwind from "../database";

export const Shippers = Northwind.define("shippers", {
  shipper_id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.SMALLINT,
  },
  company_name: {
    allowNull: false,
    type: DataTypes.STRING(40),
  },
  phone: {
    type: DataTypes.STRING(24),
  },
});
