const express=require('express')
const router=express.Router()
const Invoice=require('../models/Invoice')
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


router.post('/invoices', async (req, res) => {  
    let payload = {
        client_id: req.body.client_id,
       total_price: req.body.total_price
    }

    // var {error} = validateCourse(req.body)

    // if(error){
    //     res.send(error.details[0].message)
    //     return ;
    // }

    const createInvoice = await Invoice.create(payload)
    .catch((err) => res.send({message: err.message}))

    return res.send(createInvoice)
})



router.get('/invoices', async (req, res) => {
    const invoice = await Invoice.findAll({}).catch((err) => res.send({message: err.message}))

    return res.send(invoice)
})

router.get('/invoices/:invoiceId', async (req, res) => {
    const InvoiceId = await Invoice.findByPk(req.params.invoiceId) 
    if(InvoiceId) {
        return res.send(Invoice)
    }else{ 
        return res.send("The given ID was not found.") 
    }

})


router.delete('/invoices/:invoiceId', async (req, res) => {
    const invoice = await Invoice.destroy({where: {id: req.params.invoiceId}})
    if(Invoice) {
        return res.send("Invoice was deleted succesfully.")
    }else{ 
        return res.send("The given ID was not found.") 
    }
})


router.put('/invoices/:invoiceId', async (req, res) => {
    let task = {
        invoice_name: req.body.invoice_name
    }
    const editInvoice = await Invoice.update(task,{ where: { id: req.params.InvoiceId } })
    .catch((err) => res.send({message: err.message}))
    const Invoice = await Invoice.findByPk(req.params.InvoiceId)

    return res.send(Invoice)
})

module.exports=router
