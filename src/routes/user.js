const express=require('express')
const router=express.Router()
const User=require('../models/User')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const createToken = (userId) => {
    const token = jwt.sign({
        userId: userId
    }, "2233");
    return token
}



router.post('/register', async (req, res) => {
    if(req.body.username.length < 5){
        res.send("Username should be at least 5 characters.")
    }
    else if(req.body.email.length < 5){
        res.send("Email should be at least 5 characters.")
    }
    else if(req.body.username.length > 5 && req.body.passwd.length < 5){
        res.send("Password should be at least 5 characters.")
    }else {
        let user = await User.create({username: req.body.username, email: req.body.email ,passwd: await bcrypt.hash(req.body.passwd, 10)})
        .catch((err) => res.send({message: err.message}))
        const getResponse = user => ({
            status: "success", 
            code: 200,
            message: "Authorized",
            data: {
                token: createToken(user.id),
                user,
            }
        })
        res.json(getResponse(user))
    }
})




router.post('/login', function (req, res) {
    User.findOne({
         where: {
             email: req.body.email
                }
    }).then(function (user) {
        if (!user) {
           res.send('No user');
        } else {
            bcrypt.compare(req.body.passwd, user.passwd, function (err, result) {
            if (result == true) {
                const getResponse = user => ({
                    status: "success",
                    code: 200,
                    message: "Authorized",
                    data: {
                        token: createToken(user.id),
                        user,
                    }
                })
                res.json(getResponse(user))
            } else {
                res.send('Incorrect password');
            }
            });
        }
    })
});



router.get('/logout', (req, res) => {
    res.status(401).send('Logged out')

})

module.exports=router
