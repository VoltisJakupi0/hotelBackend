'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("clients", {
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
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    client_personal_number: Sequelize.INTEGER(30),
    client_email: Sequelize.STRING(30),
    client_name: Sequelize.STRING(30),
    client_surname: Sequelize.STRING(30),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable("clients")
  }
};
