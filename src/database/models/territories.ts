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
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
});

Territories.belongsTo(Region, {
  constraints: true,
  foreignKey: "region_id",
});

Region.hasMany(Territories, {
  foreignKey: "region_id",
});

/* 
(async () => {
  const result = await Territories.findByPk("01581", { include: Region });
  console.log(result?.toJSON());
})(); */

/*

  (errado)
  Um território possui apenas a uma região
  Uma região pertence a vários territórios

  (certo)
  Um território, pertence apenas a uma região
  Uma região, possui vários territórios
*/
