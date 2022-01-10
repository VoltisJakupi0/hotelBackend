const express=require('express')
const router=express.Router()
const Category=require('../models/Category')
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


router.post('/category', async (req, res) => {  
    let payload = {
       category_name: req.body.category_name
    }

    // var {error} = validateCourse(req.body)

    // if(error){
    //     res.send(error.details[0].message)
    //     return ;
    // }

    const createCategory = await Category.create(payload)
    .catch((err) => res.send({message: err.message}))

    return res.send(createCategory)
})



router.get('/category', async (req, res) => {
    const category = await Category.findAll({}).catch((err) => res.send({message: err.message}))

    return res.send(category)
})

router.get('/category/:categoryId', async (req, res) => {
    const CategoryId = await Category.findByPk(req.params.CategoryId) 
    if(CategoryId) {
        return res.send(Category)
    }else{ 
        return res.send("The given ID was not found.") 
    }

})


router.delete('/category/:categoryId', async (req, res) => {
    const category = await Category.destroy({where: {id: req.params.categoryId}})
    if(category) {
        return res.send("Category was deleted succesfully.")
    }else{ 
        return res.send("The given ID was not found.") 
    }
})


router.patch('/category/:categoryId', async (req, res) => {
    let categoryPayload = {
        category_name: req.body.category_name
    }
    const editCategory = await Category.update(categoryPayload,{ where: { id: req.params.categoryId } })
    .catch((err) => res.send({message: err.message}))
    const category = await Category.findByPk(req.params.CategoryId)

    return res.send(category)
})

module.exports=router
