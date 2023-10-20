'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('statistics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      User: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      Time_in_game: {
        allowNull: false,
        type: Sequelize.TIME
      },
      Score: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Enemy_kills: {
        allowNull: false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('statistics');
  }
};