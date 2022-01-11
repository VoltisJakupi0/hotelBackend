const express = require("express")
const cors = require('cors')
let app  = express()

const PORT = process.env.PORT || 3030

const path = require("path")

const bodyParser = require("body-parser")

app.set("view engine", "pug")

app.set("views", path.resolve("./src/views"))
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())


const router = express.Router()
app.use(router)

const rootPath = path.resolve('./dist')
app.use(express.static(rootPath))

//DB CONNECTION

require('./src/database/connection')

require('./src/bootstrap.js')()


const auth = require('./middleware/auth');


const user= require('./src/routes/user.js')
const status= require('./src/routes/status.js')
const category = require("./src/routes/category.js")
const role = require("./src/routes/role.js")
const room = require("./src/routes/room.js")
const bookedroom = require("./src/routes/bookedroom.js")


app.use('/api', user) 
app.use('/api', status) 
app.use('/api', category) 
app.use('/api', role) 
app.use('/api', room) 
app.use('/api', bookedroom) 







app.use('/', (req, res) => {
    return res.send("home")
})

app.listen(PORT, err => {
    if(err) return console.log(`Cannot listen on PORT: ${PORT}`)
    console.log(`Server is listening on PORT: ${PORT}.`)
})