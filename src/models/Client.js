const Sequelize = require('sequelize')

module.exports = sequelize.define("Client", {
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
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    surname: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    phone_number: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    client_personal_number: Sequelize.INTEGER(30),
    client_email: Sequelize.STRING(30),
    client_name: Sequelize.STRING(30),
    client_surname: Sequelize.STRING(30),


    
})