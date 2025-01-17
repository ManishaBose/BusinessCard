const {z} = require("zod");

const signupSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})

const createSchema = z.object({
    name: z.string(),
    description: z.string(),
    interests: z.array(z.string()),
    linkedin: z.string().url(),
    twitter: z.string().url()
})

const updateSchema = z.object({
    id:z.string(),
    name: z.string(),
    description: z.string(),
    interests: z.array(z.string()),
    linkedin: z.string().url(),
    twitter: z.string().url()
})

const deleteSchema = z.object({
    id: z.string()
})
module.exports = {
    signupSchema,
    createSchema,
    updateSchema,
    deleteSchema
}