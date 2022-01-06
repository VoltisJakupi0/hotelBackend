const express=require('express')
const router=express.Router()
const Role=require('../models/Role')
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


router.post('/roles', async (req, res) => {  
    let payload = {
       role_name: req.body.role_name
    }

    const createRole = await Role.create(payload)
    .catch((err) => res.send({message: err.message}))

    return res.send(createRole)
})



router.get('/roles', async (req, res) => {
    const role = await Role.findAll({}).catch((err) => res.send({message: err.message}))

    return res.send(role)
})

router.get('/roles/:roleId', async (req, res) => {
    const RoleId = await Role.findByPk(req.params.roleId) 
    if(RoleId) {
        return res.send(Role)
    }else{ 
        return res.send("The given ID was not found.") 
    }

})


router.delete('/roles/:roleId', async (req, res) => {
    const role = await Role.destroy({where: {id: req.params.roleId}})
    if(role) {
        return res.send("Role was deleted succesfully.")
    }else{ 
        return res.send("The given ID was not found.") 
    }
})


router.put('/roles/:roleId', async (req, res) => {
    let task = {
        role_name: req.body.role_name
    }
    const editRole = await Role.update(task,{ where: { id: req.params.roleId } })
    .catch((err) => res.send({message: err.message}))
    const Role = await Role.findByPk(req.params.RoleId)

    return res.send(Role)
})

module.exports=router
