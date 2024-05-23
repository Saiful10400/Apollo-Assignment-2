import express from "express"
import { orderController } from "./order.controller"
export const orderRouter=express.Router()

//1. create a order
orderRouter.post("/",orderController.createOrder)