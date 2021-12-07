const Sequelize = require('sequelize')

module.exports = sequelize.define("User", {
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
    }
})