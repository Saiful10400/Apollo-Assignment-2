import { z } from 'zod';

// Define the Variant schema
const VariantSchema = z.object({
    type: z.string(),
    value: z.string()
});

// Define the Inventory schema
const InventorySchema = z.object({
    quantity: z.number(),
    inStock: z.boolean()
});

// Define the Product schema
const productZodSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(VariantSchema),
    inventory: InventorySchema
});

export default productZodSchema