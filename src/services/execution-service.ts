import { notFoundError, unauthorizedError } from "@/errors";
import executionRepository from "@/repositories/execution-repository";
import workoutRepository from "@/repositories/workout-repository";
import { CreateExecution } from "@/protocols";

export async function createExecution({executions,userId}:executionInput){
    const {exerciseId}=executions[0]
    const exercise = await workoutRepository.findExerciseById(exerciseId);
    if (!exercise) throw notFoundError();
    if (exercise.Workout.userId !== userId) throw unauthorizedError();
    return await executionRepository.createExecution(executions)
}

export async function getLastExecution(exerciseId:number){
    const lastExecution = await executionRepository.findLastExecution(exerciseId)
    return lastExecution;
}

type executionInput ={
    executions:CreateExecution[]
    userId:number
}
const executionService={
    createExecution,
    getLastExecution
}
export default executionService;