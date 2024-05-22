import { productModel } from "./product.model"
import { productType } from "./type.product"

// 1.create a product.
const serviceCreateProduct=async(data:productType)=>{
    const result=await productModel.create(data)
    return result
}

// 2. get all products.
const serviceGetAllProducts=async()=>{
    const result=await productModel.find()
    return result
}

export const productService={
createOne:serviceCreateProduct,
getAll:serviceGetAllProducts
}