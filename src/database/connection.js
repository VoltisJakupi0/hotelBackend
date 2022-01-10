const Sequelize = require("sequelize")

//postgres://wjhlwvcbtytkmy:233a481ed43d6359dbb0779b65b22b34486b7cadbdba6ae8c96f11e2b7211137@ec2-52-211-158-144.eu-west-1.compute.amazonaws.com:5432/dfjnm25kkaakb3
const sequelize = new Sequelize("dfjnm25kkaakb3", 'wjhlwvcbtytkmy', '233a481ed43d6359dbb0779b65b22b34486b7cadbdba6ae8c96f11e2b7211137', {host: 'ec2-52-211-158-144.eu-west-1.compute.amazonaws.com', dialect: "postgres", dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
},
})

sequelize.sync()


module.exports = sequelize

global.sequelize = sequelize

