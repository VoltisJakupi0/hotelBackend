const express=require('express')
const router=express.Router()
const Client=require('../models/Client')
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


router.post('/clients', async (req, res) => {  
    let client = {
        email: req.body.email,
        name: req.body.name,
        surname: req.body.surname,
        phone_number: req.body.phone_number
    }

  
    const createClient = await Client.create(client)
    .catch((err) => res.send({message: err.message}))

    return res.send(createClient)
})



router.get('/clients', async (req, res) => {
    const clients = await Client.findAll({}).catch((err) => res.send({message: err.message}))

    return res.send(clients)
})

router.get('/clients/:clientId', async (req, res) => {
    const client = await Client.findByPk(req.params.clientId) 
    if(client) {
        return res.send(Client)
    }else{ 
        return res.send("The given ID was not found.") 
    }

})


router.delete('/clients/:clientId', async (req, res) => {
    const client = await Client.destroy({where: {id: req.params.clientId}})
    if(client) {
        return res.send("Client was deleted succesfully.")
    }else{ 
        return res.send("The given ID was not found.") 
    }
})


router.put('/clients/:clientId', async (req, res) => {
    let client = {
        email: req.body.email,
        name: req.body.name,
        surname: req.body.surname,
        phone_number: req.body.phone_number
    }

    const createTask = await Client.update(client,{ where: { id: req.params.clientId } })
    .catch((err) => res.send({message: err.message}))
    const taskFetch = await Client.findByPk(req.params.clientId)

    return res.send(taskFetch)
})

module.exports=router
