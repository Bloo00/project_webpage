'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Character.belongsTo( models.Schedule, { foreignKey: 'scheduleId'});
      models.Character.belongsTo( models.User, { foreignKey: 'userId'});
    }
  };
  Character.init({
    name: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    strength: DataTypes.INTEGER,
    dexterity: DataTypes.INTEGER,
    constitution: DataTypes.INTEGER,
    wisdom: DataTypes.INTEGER,
    intelligence : DataTypes.INTEGER,
    charisma : DataTypes.INTEGER,
    race : DataTypes.STRING,
    class :DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};