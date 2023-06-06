import { Model } from "sequelize";
import { Categories } from "./categories";
import { Customers } from "./customers";
import { Employees } from "./employees";
import { Orders } from "./orders";
import { Products } from "./products";
import { Shippers } from "./shippers";
import { OrderDetails } from "./order_details";
import { Suppliers } from "./suppliers";
import { Territories } from "./territories";
import { Region } from "./region";
import { EmployeeTerritories } from "./employee_territories";
import { CustomerCustomerDemo } from "./customer_customer_demo";
import { CustomerDemographics } from "./customer_demographics";

Categories.belongsToMany(Products, {
  foreignKey: "category_id",
  through: "category_id",
});
Products.hasOne(Categories, {
  foreignKey: "category_id",
  sourceKey: "category_id",
});

Products.hasOne(Suppliers, {
  foreignKey: "supplier_id",
  sourceKey: "supplier_id",
});

Customers.belongsToMany(Orders, {
  foreignKey: "customer_id",
  through: "customer_id",
});
Orders.hasOne(Customers, {
  foreignKey: "customer_id",
  sourceKey: "customer_id",
});

Employees.belongsToMany(Orders, {
  foreignKey: "employee_id",
  through: "employee_id",
});

Orders.hasOne(Employees, {
  foreignKey: "employee_id",
  sourceKey: "employee_id",
});

Shippers.belongsToMany(Orders, {
  foreignKey: "shipper_id",
  through: "ship_via",
});

Orders.hasOne(Shippers, {
  foreignKey: "shipper_id",
  sourceKey: "ship_via",
});

Products.belongsToMany(OrderDetails, {
  foreignKey: "product_id",
  through: "product_id",
});

OrderDetails.hasOne(Products, {
  foreignKey: "product_id",
  sourceKey: "product_id",
});

OrderDetails.hasOne(Orders, {
  foreignKey: "order_id",
  sourceKey: "order_id",
});

Territories.hasOne(Region, {
  foreignKey: "region_id",
  sourceKey: "region_id",
});

EmployeeTerritories.hasOne(Territories, {
  foreignKey: "territory_id",
  sourceKey: "territory_id",
});

EmployeeTerritories.hasOne(Employees, {
  foreignKey: "employee_id",
  sourceKey: "employee_id",
});

CustomerCustomerDemo.hasOne(CustomerDemographics, {
  foreignKey: "customer_type_id",
  sourceKey: "customer_type_id",
});
CustomerCustomerDemo.hasOne(Customers, {
  foreignKey: "customer_id",
  sourceKey: "customer_id",
});

/* Employees.hasOne(Employees, {
  foreignKey: "reports_to",
});

Employees.findAll({ include: [{ model: Employees }] }).then((res) => {
  console.log(res[0].toJSON());
});
 */
