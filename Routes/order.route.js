const {orderModel} = require("../Model/order.model")
const express = require("express")
const jwt = require('jsonwebtoken');
const {authenticate} = require("../Middleware/auth.middleware")
const orderRouter = express.Router()


orderRouter.get("/:id",async(req,res)=>{
    try {
     const id = req.params.id
        const product = await orderModel.find({userID:id})
    res.send(product)

} catch (error) {
        res.status(400).json({"err":"bad request"})
        
    }
   
})

module.exports = {orderRouter}