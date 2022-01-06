const Sequelize = require('sequelize')

module.exports = sequelize.define("Role", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    role_name: Sequelize.STRING(30)
})