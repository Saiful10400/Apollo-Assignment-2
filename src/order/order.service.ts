
import { productModel } from "../product/product.model"
import { orderModel } from "./order.model"
import { orderType } from "./type.order"

// # Inventory status checking and updating functions.

// #1. inventory check
const serviceInventoryCheck=async(id:string):Promise<{quantity:number,inStock:boolean}| null> =>{
    const result=await productModel.findById({_id:id}).select({inventory:1})
    if (!result){
        return null
    } else{
        return result.inventory
    }
}

//#2. update the inventory.
const serviceInventoryUpdate=async(id:string,quantity:number)=>{
    // //check invetntory quantity, so that we can update instock status.
    // //stpe1. check quantity.
    // const preInventoryStatus= await serviceInventoryCheck(id)
    
    const willUPdate=quantity===0?{$set:{"inventory.quantity":quantity,"inventory.inStock":false}}:{$set:{"inventory.quantity":quantity}}
    const result=await productModel.findOneAndUpdate({_id:id},willUPdate,{new:true})
    return result
}


// ## order managing functions.

//##1. create a order.
const serviceCreateAOrder=async (data:orderType)=>{
    const result=await orderModel.create(data)
    return result
}





export const orderService={
    inventoryStatus:serviceInventoryCheck,
    updateQuantity:serviceInventoryUpdate,
    createOrder:serviceCreateAOrder,
}