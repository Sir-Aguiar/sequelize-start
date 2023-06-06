import { DataTypes } from "sequelize";
import Northwind from "../database";
import { Orders } from "./orders";
import { Products } from "./products";

export const OrderDetails = Northwind.define("order_details", {
  order_id: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Orders,
      key: "order_id",
    },
  },
  product_id: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Products,
      key: "product_id",
    },
  },
  unit_price: {
    type: DataTypes.REAL,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  discount: {
    type: DataTypes.REAL,
    allowNull: false,
  },
});
