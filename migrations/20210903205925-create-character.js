'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      scheduleId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.INTEGER
      },
      strength: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.INTEGER
      },
      dexterity: {
        type: Sequelize.INTEGER
      },
      constitution: {
        type: Sequelize.INTEGER
      },
      wisdom: {
        type: Sequelize.INTEGER
      },
      intelligence: {
        type: Sequelize.INTEGER
      },
      charisma: {
        type: Sequelize.INTEGER
      },
      
      // characters: 
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
    await queryInterface.dropTable('Characters');
  }
};