import { Request, Response } from "express";
import productZodSchema from "./product.zod.schema";
import { productService } from "./product.service";
// 1. create a product.
const controllCreateAProduct = async(req: Request, res: Response) => {
  try {
    const productData = req.body;
    
    // zod validate data.
    const zodValidateData=productZodSchema.parse(productData)
    const result=await productService.createOne(zodValidateData)
    res.status(200).json({
        success:true,
        message:"Product created successfully!",
        data:result
    })

  } catch (err) {
    res.status(500).json({
        success:false,
        message:err
       
    })

  }
};

// 2. get all product.
const controllGetAllProduct=async(req:Request,res:Response)=>{
    try{
        const result=await productService.getAll()
        res.status(200).json({
            success:true,
            message:"Products fetched successfully!",
            data:result
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err
           
        })
    }
}

export const productController = {
  createOne: controllCreateAProduct,
  getAll:controllGetAllProduct
};
