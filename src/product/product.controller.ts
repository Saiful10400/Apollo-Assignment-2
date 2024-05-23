import { Request, Response } from "express";
import productZodSchema from "./product.zod.schema";
import { productService } from "./product.service";
import { productSchema } from "./product.model";
import { productType } from "./type.product";
// 1. create a product.
const controllCreateAProduct = async(req: Request, res: Response) => {
  try {
    const productData = req.body;
    
    // zod validate data.
    const zodValidatedData=productZodSchema.parse(productData)
    const result=await productService.createOne(zodValidatedData)
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
        // query parametere.
        const{searchTerm}=req.query
        // getting data via condition.
        const callService=async ():Promise<unknown> =>{
            if(searchTerm){
                const result=await productService.getOneWithKeyword(searchTerm as string)
                return result
            }else{
                const result=await productService.getAll()
                return result
            }
        }
        
        const result=await callService()
        if(searchTerm){
            res.status(200).json({
                success:true,
                message:`Products matching search term '${searchTerm}' fetched successfully!`,
                data:result
            })
        } else{
            res.status(200).json({
                success:true,
                message:"Products fetched successfully!",
                data:result
            })
        }
    }catch(err){
        res.status(500).json({
            success:false,
            message:err
           
        })
    }
}

// 3. get a product.
const controllGetAProduct=async(req:Request,res:Response)=>{
    try{
        const {id}=req.params
       
        const result=await productService.getOne(id as string)
        res.status(200).json({
            success:true,
            message:"Product fetched successfully!",
            data:result
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:err
           
        })
    }
}

// 4. update a product.
const controllUpdateAProduct=async(req:Request,res:Response)=>{
    try{
        const {id}=req.params
        const data=req.body
         
        const result=await productService.updateOne(id,data)
        if(!result){
            res.status(500).json({
                success:false,
                message:"incorrect query parameter"
               
            })
            
        }
       else{
        res.status(200).json({
            success:true,
            message:"Product updated successfully!",
            data:result
        })
    }
    }catch(err){
        res.status(500).json({
            success:false,
            message:err
           
        })
    }
}

// 5. delete a product.
const controllDeleteAProduct=async(req:Request,res:Response)=>{
    try{
        const {id}=req.params
        const result=await productService.deleteOne(id)
        res.status(200).json({
            success:true,
            message:"Product deleted successfully!",
            data:null
        })


    } catch(err){
        res.status(500).json({
            success:false,
            message:err
           
        })
    }
}

export const productController = {
  createOne: controllCreateAProduct,
  getAll:controllGetAllProduct,
  getOne:controllGetAProduct,
  updateOne:controllUpdateAProduct,
  deleteOne:controllDeleteAProduct
};
