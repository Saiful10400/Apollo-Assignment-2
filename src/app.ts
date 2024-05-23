import express from "express"
import { ProductRouter } from "./product/product.router"
import { orderRouter } from "./order/order.router"
import { Request,Response } from "express"

// declare app variable.
const app=express()
app.use(express.json())

app.use("/api/products",ProductRouter)
app.use("/api/orders",orderRouter)

// handle invalid route.
app.use((req:Request,res:Response)=>{
res.status(404).json({
    success:false,
    message:"Api route is invalid."
})
})



// export app.
export default app