import Joi from "joi";
import { CreateExercise, CreateWorkout } from "@/protocols";

const createExerciseSchema = Joi.object<newExercise>({
    name: Joi.string().required(),
    sets: Joi.string().required(),
})

export const createWorkoutSchema = Joi.object<CreateWorkout>({
    name: Joi.string().required(),
    exercise:Joi.array().items(createExerciseSchema).required().min(1)
});

type newExercise = Omit <CreateExercise, "workoutId">
