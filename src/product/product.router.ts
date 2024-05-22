import express from "express"
import { productController } from "./product.controller"
export const studentRouter=express.Router()

studentRouter.post("/",productController.createOne)