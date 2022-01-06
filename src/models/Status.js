const Sequelize = require('sequelize')

module.exports = sequelize.define("Status", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    status_name: Sequelize.STRING(30)
})