import Joi from "joi";
import { CreateUser } from "@/protocols";

export const createUserSchema = Joi.object<CreateUser>({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().min(3).required()
})