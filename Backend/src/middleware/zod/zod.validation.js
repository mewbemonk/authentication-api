import {z} from 'zod'

const register_schema = z.object({
    name: z
    .string({required_error:"name is required"})
    .trim()
    .min(3,{message:"Min 3 character is required"})
    .max(10,{message:"Max 10 character is required"}),

    email:z
    .string({required_error:"email is required"})
    .email({message:"enter valid email"})
    .trim()
    .min(3,{message:"Min 3 character is required"})
    .max(255,{message:"Max 255 character is required"}),

    password:z
    .string({required_error:"password is required"})
    .trim()
    .min(8,{message:"Min 8 character is required"})
    .max(16,{message:"Max 16 is required"})
    .regex(/[A-Z]/,{message:"At least one UpperCase character is required in Password"})
    .regex(/[a-z]/,{message:"At least one LowerCase character is required in Password"})
    .regex(/[0-9]/,{message:"At least one Number character is required in Password"})
    .regex(/[!@#$%^&*(),.?":{}|<>-]/,{message:"At least one special character required in Password"})
    
})


export default register_schema