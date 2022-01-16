module.exports  = async () => {
    const User = require("./models/User")
    const Client = require("./models/Client")
    const Role = require("./models/Role")
    const Room = require("./models/Room")
    const Status = require("./models/Status")
    const BookedRoom = require("./models/BookedRoom")
    const Category = require("./models/Category")

    User.belongsTo(Role ,{as: "Role", foreignKey: 'role_id'})
    Room.belongsTo(Category,{as: "Category", foreignKey: 'category_id'})
    Room.belongsTo(Status,{as: "Status", foreignKey: 'status_id'})
    BookedRoom.belongsTo(Room,{as: "Room", foreignKey: 'room_id'})



}

