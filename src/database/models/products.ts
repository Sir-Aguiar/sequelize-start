import { DataTypes } from "sequelize";
import Northwind from "../database";
import { Categories } from "./categories";
import { Suppliers } from "./suppliers";

export const Products = Northwind.define("products", {
  product_id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.SMALLINT,
  },
  product_name: {
    allowNull: false,
    type: DataTypes.STRING(40),
  },
  supplier_id: {
    type: DataTypes.SMALLINT,
    references: {
      model: Suppliers,
      key: "supplier_id",
    },
  },
  category_id: {
    type: DataTypes.SMALLINT,
    references: {
      model: Categories,
      key: "category_id",
    },
  },
  quantity_per_unit: {
    type: DataTypes.STRING(20),
  },
  unit_price: {
    type: DataTypes.REAL,
  },
  units_in_stock: {
    type: DataTypes.SMALLINT,
  },
  units_on_order: {
    type: DataTypes.SMALLINT,
  },
  reorder_level: {
    type: DataTypes.SMALLINT,
  },
  discontinued: {
    type: DataTypes.INTEGER,
  },
});

