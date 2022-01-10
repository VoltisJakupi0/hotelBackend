const express=require('express')
const router=express.Router()
const Status=require('../models/Status')
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


router.post('/status', async (req, res) => {  
    let payload = {
       status_name: req.body.status_name
    }

    // var {error} = validateCourse(req.body)

    // if(error){
    //     res.send(error.details[0].message)
    //     return ;
    // }

    const createStatus = await Status.create(payload)
    .catch((err) => res.send({message: err.message}))

    return res.send(createStatus)
})



router.get('/status', async (req, res) => {
    const status = await Status.findAll({}).catch((err) => res.send({message: err.message}))

    return res.send(status)
})

router.get('/status/:StatusId', async (req, res) => {
    const status = await Status.findByPk(req.params.StatusId) 
    if(StatusId) {
        return res.send(status)
    }else{ 
        return res.send("The given ID was not found.") 
    }

})


router.delete('/status/:statusId', async (req, res) => {
    const status = await Status.destroy({where: {id: req.params.statusId}})
    if(status) {
        return res.send("Status was deleted succesfully.")
    }else{ 
        return res.send("The given ID was not found.") 
    }
})


router.patch('/status/:statusId', async (req, res) => {
    let statusPayload = {
       status_name: req.body.status_name
    }
    const  editStatus = await Status.update(statusPayload,{ where: { id: req.params.statusId } })
    .catch((err) => res.send({message: err.message}))
    const status = await Status.findByPk(req.params.statusId)

    return res.send(status)
})

module.exports=router
