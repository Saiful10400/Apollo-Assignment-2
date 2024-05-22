import express from "express"
import { productController } from "./product.controller"
export const studentRouter=express.Router()

//1. create one product.
studentRouter.post("/",productController.createOne)

//2. get all products.
studentRouter.get("/",productController.getAll)