import { DataTypes, Op } from "sequelize";
import Northwind from "../database";
import { Categories } from "./categories";
import { Suppliers } from "./suppliers";
import { OrderDetails } from "./order_details";
import { Orders } from "./orders";

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
  },
  category_id: {
    type: DataTypes.SMALLINT,
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

Products.belongsTo(Categories, {
  constraints: true,
  foreignKey: "category_id",
});
Categories.hasMany(Products, {
  foreignKey: "category_id",
});

Products.belongsTo(Suppliers, {
  constraints: true,
  foreignKey: "supplier_id",
});
Suppliers.hasMany(Products, {
  foreignKey: "supplier_id",
});


/* (async () => {
  const product_category = await Products.findByPk(1, { include: Categories });
  console.log(product_category?.toJSON());
  const product_supplier = await Products.findByPk(1, { include: Suppliers });
  console.log(product_supplier?.toJSON());
})(); */

/*
  Uma categória tem mais de um produto
  Um produto pertence apenas a uma categoria
*/

