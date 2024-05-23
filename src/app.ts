import express from "express"
import { ProductRouter } from "./product/product.router"
import { orderRouter } from "./order/order.router"

// declare app variable.
const app=express()
app.use(express.json())

app.use("/api/products",ProductRouter)
app.use("/api/orders",orderRouter)





// export app.
export default app