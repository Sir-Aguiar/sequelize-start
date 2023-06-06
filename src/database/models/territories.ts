import { DataTypes } from "sequelize";
import Northwind from "../database";
import { Region } from "./region";

export const Territories = Northwind.define("territories", {
  territory_id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING(20),
  },
  territory_description: {
    allowNull: false,
    type: DataTypes.STRING(60),
  },
  region_id: {
    allowNull: false,
    type: DataTypes.SMALLINT,
    references: {
      model: Region,
      key: "region_id",
    },
  },
});
