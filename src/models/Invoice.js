const Sequelize = require('sequelize')

module.exports = sequelize.define("Invoice", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    client_id: Sequelize.INTEGER(11),
    total_price: Sequelize.INTEGER(30)


})