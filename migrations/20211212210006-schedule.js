'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schedule', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      monday: {
        type: Sequelize.INTEGER
      },
      tuesday: {
        type: Sequelize.INTEGER
      },
      wednesday: {
        type: Sequelize.INTEGER
      },
      thursday: {
        type: Sequelize.INTEGER
      },
      friday: {
        type: Sequelize.INTEGER
      },
      saturday: {
        type: Sequelize.INTEGER
      },
      sunday: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};