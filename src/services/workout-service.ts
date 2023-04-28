import { notFoundError, unauthorizedError } from "@/errors";
import { CreateExercise } from "@/protocols";
import workoutRepository from "@/repositories/workout-repository";
import dayjs from "dayjs";

export async function createWorkout({exercises,name,userId}:createWorkoutInput) {
    const workout = await workoutRepository.createWorkout({userId,name,exercises});
    return workout;
}

export type createWorkoutInput = {
    exercises:CreateExercise[],
    name:string,
    userId:number
}
export type toogleInput ={
    userId:number,
    workoutId:number
}
export async function getAllWorkouts(userId:number){
    const workouts = await workoutRepository.getAllWorkouts(userId);
    return workouts;
}

export async function getActiveWorkouts(userId:number) {
    const workouts = await workoutRepository.getActiveWorkouts(userId);
    return workouts;
}
export async function toggleWorkout({userId,workoutId}:toogleInput){
    const workout = await workoutRepository.findWorkoutById(workoutId)
    if(!workout) throw notFoundError();
    //if(userId!==workout.userId) throw unauthorizedError();
    const newActive=!workout.isActive
    return await workoutRepository.toggleWorkout({workoutId,newActive})
}

export async function getWorkoutById(id:number){
    const workout = await workoutRepository.getWorkoutById(id)
    if(!workout) throw notFoundError();
    return workout;
}

export async function getCurrentWorkout(userId:number) {
    const current = await workoutRepository.getCurrentWorkout(userId);
    return current;
}

export async function finishWorkout(userId:number) {
    const workout = await workoutRepository.getCurrentWorkout(userId);
    if (workout.id){
        const finish = await workoutRepository.finishWorkout(workout.id);
        return finish;
    }else{
        throw notFoundError();
    }    
}

export async function checkWorkout(userId:number) {
    const currentWorkout = await workoutRepository.getCurrentWorkout(userId)
    const now = dayjs().format('DD/MM/YYYY');

    if(!currentWorkout){
        throw notFoundError()
    }
    const {id}=currentWorkout;
    const exerciseList = await workoutRepository.check(id);
   
    let final = true;
    for(let i=0; i<exerciseList.length;i++){
        if(dayjs(exerciseList[i].Execution[0].createdAt).format('DD/MM/YYYY')!==now){
            final = false;
        }
    }
    
    return final;
    
}

const workoutService ={
    createWorkout,
    getAllWorkouts,
    getActiveWorkouts,
    toggleWorkout,
    getWorkoutById,
    getCurrentWorkout,
    finishWorkout,
    checkWorkout
};
export default workoutService;
