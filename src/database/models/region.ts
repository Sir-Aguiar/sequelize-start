import { DataTypes } from "sequelize";
import Northwind from "../database";

const Region = Northwind.define(
  "region",
  {
    region_id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.SMALLINT,
    },
    region_description: {
      allowNull: false,
      type: DataTypes.STRING(60),
    },
  },
  { tableName: "region" },
);

export { Region };
