const express=require('express')
const router=express.Router()
const Room=require('../models/Room')
const User=require('../models/User')
const jwt = require("jsonwebtoken")
const Joi = require("joi")



function validateCourse(course){
    const schema = {
        taskName: Joi.string().min(3).required(),
        description: Joi.string().required(),
    }
    return Joi.validate(course, schema)
}


router.post('/rooms', async (req, res) => {  
    let room = {
        room_number: req.body.room_number,
        category_id: req.body.category_id,
        status_id: req.body.status_id,
        room_price: req.body.room_price
    }
   
    // var {error} = validateCourse(req.body)

    // if(error){
    //     res.send(error.details[0].message)
    //     return ;
    // }

    const createRoom = await Room.create(room)
    .catch((err) => res.send({message: err.message}))

    return res.send(createRoom)
})



router.get('/rooms', async (req, res) => {
    const rooms = await Room.findAll({}).catch((err) => res.send({message: err.message}))

    return res.send(rooms)
})

router.get('/rooms/:RoomId', async (req, res) => {
    const room = await Room.findByPk(req.params.RoomId) 
    if(room) {
        return res.send(Room)
    }else{ 
        return res.send("The given ID was not found.") 
    }

})


router.delete('/rooms/:roomId', async (req, res) => {
    const room = await Room.destroy({where: {id: req.params.roomId}})
    if(room) {
        return res.send("Room was deleted succesfully.")
    }else{ 
        return res.send("The given ID was not found.") 
    }
})


router.put('/rooms/:roomId', async (req, res) => {
    let task = {
        taskName: req.body.taskName,
        description: req.body.description,
        userId: req.userId
    }
    const createRoom = await Room.update(task,{ where: { id: req.params.roomId } })
    .catch((err) => res.send({message: err.message}))
    const getRoom = await Room.findByPk(req.params.roomId)

    return res.send(getRoom)
})

module.exports=router
