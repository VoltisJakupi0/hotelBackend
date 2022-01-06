const Sequelize = require('sequelize')

module.exports = sequelize.define("Category", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    category_name: Sequelize.STRING(30)
})