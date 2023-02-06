import Joi from "joi";
import { CreateExecution } from "@/protocols";

const executionSchema = Joi.object<CreateExecution>({
    reps:Joi.number().required(),
    weight:Joi.number().required(),
    exerciseId:Joi.number().required()
})

export const createExecutionSchema = Joi.object({
    executions:Joi.array().items(executionSchema).required()
})