import express from "express"
import { studentRouter } from "./product/product.router"

// declare app variable.
const app=express()
app.use(express.json())

app.use("/api/products",studentRouter)





// export app.
export default app