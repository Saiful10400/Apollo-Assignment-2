import { productModel } from "./product.model"
import { productType } from "./type.product"

// 1.create a product.
const serviceCreateProduct=async(data:productType)=>{
    const result=await productModel.create({...data,isDeleted:false})
    return result
}

// 2. get all products.
const serviceGetAllProducts=async()=>{
    const result=await productModel.find()
    return result
}
/// 2.1 get all products with matching keyword.
const serviceGetAllProductsWithKeyword=async(keyword:string)=>{
    const result=await productModel.find({tags:{$all:[new RegExp(keyword,"i")]}})
    return result
}

// 3. get a product by id.
const serviceGetAProduct=async(id:string)=>{
   
    const result=await productModel.findById(id)
    return result
}

// 4. update a product by id.
const serviceUpdateAProduct=async(id:string,data:productType)=>{
    const result=await productModel.findOneAndUpdate({_id:id},data,{new:true})
    return result
}

// 5. delete a product by id.
const serviceDeleteAProduct=async(id:string)=>{
    const result=await productModel.deleteOne({_id:id})
    return result
}

export const productService={
createOne:serviceCreateProduct,
getAll:serviceGetAllProducts,
getOne:serviceGetAProduct,
updateOne:serviceUpdateAProduct,
deleteOne:serviceDeleteAProduct,
getOneWithKeyword:serviceGetAllProductsWithKeyword
}