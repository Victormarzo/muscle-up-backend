import Joi from 'joi';
import { LogUser } from "@/protocols";

export const LogUserSchema = Joi.object<LogUser>({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})