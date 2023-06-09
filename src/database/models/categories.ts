import { DataTypes } from "sequelize";
import Northwind from "../database";
export const Categories = Northwind.define("categories", {
  category_id: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    allowNull: false,
  },
  category_name: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  picture: {
    type: DataTypes.BLOB,
  },
});
