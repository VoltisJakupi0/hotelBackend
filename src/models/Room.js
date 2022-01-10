const Sequelize = require('sequelize')

module.exports = sequelize.define("Room", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    room_number: Sequelize.INTEGER(11),
    category_id: Sequelize.INTEGER(30),
    categoryName: Sequelize.STRING(30),
    status_id: Sequelize.INTEGER(30),
    statusName: Sequelize.STRING(30),
    room_price: Sequelize.INTEGER(30),

})