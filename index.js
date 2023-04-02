const express = require("express")
const {connection} = require("./db")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const app = express()
const {userRouter}  = require("./Routes/Auth.route")
const {productRouter} =  require("./Routes/product.route")
const {cartRouter} =  require("./Routes/cart.route")
const {orderRouter} =  require("./Routes/order.route")

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.mongoURL);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/product",productRouter)
app.use("/cart",cartRouter)
app.use("/order",orderRouter)



connectDB().then(() => {
    app.listen(process.env.port, () => {
        console.log("listening for requests");
    })
})
// app.listen(process.env.port,async()=>{
// try {
//     await connection
//     console.log("port is running")
// } catch (error) {
//     console.log(error)
// } 
// })