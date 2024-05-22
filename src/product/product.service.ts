import { productModel } from "./product.model"
import { productType } from "./type.product"

const serviceCreateProduct=async(data:productType)=>{
    // create a product.
    const result=await productModel.create(data)
    return result
}
export const productService={
createOne:serviceCreateProduct
}