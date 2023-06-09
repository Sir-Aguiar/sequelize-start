import { DataTypes } from "sequelize";
import Northwind from "../database";
import { Orders } from "./orders";
import { Products } from "./products";

export const OrderDetails = Northwind.define("order_details", {
  order_id: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    allowNull: false,
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

Products.belongsToMany(Orders, {
  through: {
    model: OrderDetails,
  },
  constraints: true,
  foreignKey: "product_id",
});

Orders.belongsToMany(Products, {
  through: {
    model: OrderDetails,
  },
  constraints: true,
  foreignKey: "order_id",
});

Products.hasMany(OrderDetails, { foreignKey: "product_id" });
OrderDetails.belongsTo(Products, { foreignKey: "product_id" });

Orders.hasMany(OrderDetails, { foreignKey: "order_id" });
OrderDetails.belongsTo(Orders, { foreignKey: "order_id" });

/* (async () => {
  const result = await OrderDetails.findAll({
    where: {
      order_id: "10248",
    },
    include: [Products, Orders],
  });
  console.log(result);
})();
 */
/* 
(async () => {
  const result = await OrderDetails.findAll({
    where: {
      order_id: "10248",
    },
    include: [Products, Orders],
  });
})();
 */
