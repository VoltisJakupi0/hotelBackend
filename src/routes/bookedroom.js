const express=require('express')
const router=express.Router()
const BookedRoom = require('../models/BookedRoom')
const Room = require('../models/Room')



router.post('/bookedrooms', async (req, res) => {  

    const room = await Room.findByPk(req.body.room_id) 

    let bookedroom = {
        room_number: room.room_number,
        room_price: room.room_price,
        entry_date: req.body.entry_date,
        leave_date: req.body.leave_date,
        room_id: req.body.room_id,
        client_email: req.body.client_email,
        client_name: req.body.client_name,
        client_surname: req.body.client_surname,
        client_personal_number:req.body.client_personal_number,
        status: 'ACTIVE'
    }
   



    const createRoom = await BookedRoom.create(bookedroom)
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


router.patch('/bookedrooms/:bookedroomId', async (req, res) => {
    const room = await Room.findByPk(req.body.room_id) 

    let bookedroom = {
        room_number: room.room_number,
        room_price: room.room_price,
        entry_date: req.body.entry_date,
        leave_date: req.body.leave_date,
        room_id: req.body.room_id,
        client_email: req.body.client_email,
        client_name: req.body.client_name,
        client_surname: req.body.client_surname,
        client_personal_number:req.body.client_personal_number,
        status: req.body.status
    }

    const createRoom = await BookedRoom.update(bookedroom,{ where: { id: req.params.bookedroomId } })
    .catch((err) => res.send({message: err.message}))

    return res.send(createRoom)
})

module.exports=router
