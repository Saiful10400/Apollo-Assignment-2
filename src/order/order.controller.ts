import { Request, Response } from "express";
import { orderZodSchema } from "./order.zod.schema";
import { orderService } from "./order.service";
// 1. create a order request.
const controllCreateAOrder=async (req:Request,res:Response)=>{
    try{
        const orderData=req.body
        // zod validataion.
        const zodValidatedData=orderZodSchema.parse(orderData)
        const {productId}=zodValidatedData
        //step1. check inventory status.
        const inventory=await orderService.inventoryStatus(productId)
        if(inventory){
            if(inventory.quantity>=zodValidatedData.quantity && inventory.inStock){
                //create a order and update the inventory.

                // step1. create the order.
                const orderCreatedResult=await orderService.createOrder(zodValidatedData) 
                // step2. update the inventory.
                const quantity=inventory.quantity-zodValidatedData.quantity
                const inventoryUpdate=await orderService.updateQuantity(productId,quantity)
                res.status(200).json({
                    success:true,
                    message:"Order created successfully!",
                    data:orderCreatedResult
                })
            }else if(zodValidatedData.quantity===0){
                throw new Error("You can't create a order with 0 quantity.")
            }
            else if(!inventory.inStock){
                throw new Error("Product is out of stock.")
            }
             else if(inventory.quantity<zodValidatedData.quantity){
                //throw a error.
                throw new Error("Insufficient quantity available in inventory.")
            }
        }else{
            throw new Error("invalid Product id.")
        }
    }catch(err){
        if(err instanceof Error){
            res.status(500).json({
                success:false,
                message:err.message
            })
        }
    }
}

//2. get all order or get one order with query parametere.
const controllGetOrder=async  (req:Request,res:Response)=>{
    try{
        // call the service funciton.
        const result=await orderService.getOrder(req)
        res.status(200).json({
            success:true,
            message:result.message,
            data:result.result
        })

    } catch(err){
        if(err instanceof Error){
            res.status(500).json({
                success:false,
                message:err.message
            })
        }
        
    }
}



export const orderController={
    createOrder:controllCreateAOrder,
    getOrder:controllGetOrder
}