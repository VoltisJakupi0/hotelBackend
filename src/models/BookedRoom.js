const Sequelize = require('sequelize')

module.exports = sequelize.define("BookedRoom", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    entry_date: Sequelize.STRING(30),
    leave_date: Sequelize.STRING(30),
    room_id: Sequelize.INTEGER(11),
    client_id: Sequelize.INTEGER(11),
})