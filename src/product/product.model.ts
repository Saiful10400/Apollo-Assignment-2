import { Schema, model } from "mongoose";
import { inventoryType, productType, variantType } from "./type.product";

// Define the Variant schema
const variantSchema = new Schema<variantType>({
    type: { type: String, required: true },
    value: { type: String, required: true }
});

// Define the Inventory schema
const inventorySchema = new Schema<inventoryType>({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
});

// Define the Product schema
const productSchema = new Schema<productType>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [variantSchema], required: true },
    inventory: { type: inventorySchema, required: true }
});


//export the product schema.
export const productModel=model("product",productSchema)