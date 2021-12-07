'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true
      },
      username: {
          type: Sequelize.STRING(35),
          allowNull: false,
          unique: true
      },
      passwd:{
          type: Sequelize.STRING,
          allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable("users")
  }
};
