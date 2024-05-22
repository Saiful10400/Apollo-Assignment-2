import express from "express"
import { studentRouter } from "./product/product.router"

// declare app variable.
const app=express()


app.use("/data",studentRouter)





// export app.
export default app