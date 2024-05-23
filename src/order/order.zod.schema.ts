import { z } from 'zod'

// Define the Zod schema for Order
export const orderZodSchema = z.object({
    email: z.string().email(), 
    productId: z.string().length(24),
    price: z.number().nonnegative(), 
    quantity: z.number().int().nonnegative()
});

export const orderZodEmailSchema=z.string().email()