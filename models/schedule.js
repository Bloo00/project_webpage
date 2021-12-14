'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Schedule.belongsTo(models.User, {foreignKey: 'userId'});
      models.Schedule.hasMany(models.Character, {foreignKey: 'scheduleId'});
    }
  };
  Schedule.init({
    monday: DataTypes.STRING,
    tuesday: DataTypes.STRING,
    wednesday: DataTypes.STRING,
    thursday: DataTypes.STRING,
    friday: DataTypes.STRING,
    saturday: DataTypes.STRING,
    sunday: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};