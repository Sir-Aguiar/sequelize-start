/* import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import Northwind from "..";

interface ITestModel extends Model<InferAttributes<ITestModel>, InferCreationAttributes<ITestModel>> {
  name: string;
}

const TestModel = Northwind.define<ITestModel>("test_model", {
  name: DataTypes.STRING(60),
});

(async () => {
  (await TestModel.findAll())[0].toJSON().name
})
 */
