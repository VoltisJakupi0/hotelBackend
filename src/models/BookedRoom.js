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
    room_number: Sequelize.INTEGER(11),
    room_price: Sequelize.INTEGER(11),
    client_personal_number: Sequelize.INTEGER(30),
    client_email: Sequelize.STRING(30),
    client_name: Sequelize.STRING(30),
    client_surname: Sequelize.STRING(30),
    status: Sequelize.STRING(30)

})