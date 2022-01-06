const express=require('express')
const router=express.Router()
const BookedRoom = require('../models/BookedRoom')



router.post('/bookedrooms', async (req, res) => {  
    let room = {
        room_id: req.body.room_number,
        entry_date: req.body.entry_date,
        leave_date: req.body.leave_date,
        room_id: req.body.room_id,
        client_id: req.body.client_id
    }
   



    const createRoom = await BookedRoom.create(room)
    .catch((err) => res.send({message: err.message}))

    return res.send(createRoom)
})



router.get('/bookedrooms', async (req, res) => {
    const room = await BookedRoom.findAll({}).catch((err) => res.send({message: err.message}))

    return res.send(room)
})

router.get('/bookedrooms/:bookedroomId', async (req, res) => {
    const room = await BookedRoom.findByPk(req.params.bookedroomId) 
    if(room) {
        return res.send(room)
    }else{ 
        return res.send("The given ID was not found.") 
    }

})


router.delete('/bookedrooms/:bookedroomId', async (req, res) => {
    const room = await BookedRoom.destroy({where: {id: req.params.bookedroomId}})
    if(room) {
        return res.send("Book was deleted succesfully.")
    }else{ 
        return res.send("The given ID was not found.") 
    }
})


router.put('/bookedrooms/:bookedroomId', async (req, res) => {
    let room = {
        room_id: req.body.room_number,
        leave_date: req.body.leave_date,
        room_id: req.body.room_id,
        client_id: req.body.client_id
    }

    const createRoom = await BookedRoom.update(room,{ where: { id: req.params.bookedroomId } })
    .catch((err) => res.send({message: err.message}))
    const getRoom = await Room.findByPk(req.params.roomId)

    return res.send(getRoom)
})

module.exports=router
