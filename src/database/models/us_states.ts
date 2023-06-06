import { DataTypes } from "sequelize";
import Northwind from "../database";

export const USStates = Northwind.define("us_states", {
  state_id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.SMALLINT,
  },
  state_name: {
    type: DataTypes.STRING(100),
  },
  state_abbr: {
    type: DataTypes.STRING(2),
  },
  state_region: {
    type: DataTypes.STRING(50),
  },
});
