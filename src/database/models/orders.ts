import { DataTypes, or } from "sequelize";
import Northwind from "../database";
import { Customers } from "./customers";
import { Shippers } from "./shippers";
import { Employees } from "./employees";

export const Orders = Northwind.define("orders", {
  order_id: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    allowNull: false,
  },
  customer_id: {
    type: DataTypes.STRING(5),
  },
  employee_id: {
    type: DataTypes.SMALLINT,
  },
  order_date: {
    type: DataTypes.DATE,
  },
  required_date: {
    type: DataTypes.DATE,
  },
  shipped_date: {
    type: DataTypes.DATE,
  },
  ship_via: {
    type: DataTypes.SMALLINT,
  },
  freight: {
    type: DataTypes.REAL,
  },
  ship_name: {
    type: DataTypes.STRING(40),
  },
  ship_address: {
    type: DataTypes.STRING(60),
  },
  ship_city: {
    type: DataTypes.STRING(15),
  },
  ship_region: {
    type: DataTypes.STRING(15),
  },
  ship_postal_code: {
    type: DataTypes.STRING(10),
  },
  ship_country: {
    type: DataTypes.STRING(15),
  },
});

Orders.belongsTo(Customers, {
  constraints: true,
  foreignKey: "customer_id",
});
Customers.hasMany(Orders, {
  foreignKey: "customer_id",
});

Orders.belongsTo(Employees, {
  constraints: true,
  foreignKey: "employee_id",
});
Employees.hasMany(Orders, {
  foreignKey: "employee_id",
});

Orders.belongsTo(Shippers, {
  constraints: true,
  foreignKey: "ship_via",
});
Shippers.hasMany(Orders, {
  foreignKey: "ship_via",
});

/* (async () => {
  const order_customer = await Orders.findByPk("10248", { include: Customers });
  console.log(order_customer?.toJSON());

  const order_employee = await Orders.findByPk("10248", { include: Employees });
  console.log(order_employee?.toJSON());

  const order_shipper = await Orders.findByPk("10248", { include: Shippers });
  console.log(order_shipper?.toJSON());
})(); */
