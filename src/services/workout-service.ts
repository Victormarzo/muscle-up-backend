import { notFoundError } from "@/errors";
import { CreateExercise } from "@/protocols";
import workoutRepository from "@/repositories/workout-repository";

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
    //to do conferir userId
    const newActive=!workout.isActive
    return await workoutRepository.toggleWorkout({workoutId,newActive})

}

export async function getWorkoutById(id:number){
    const workout = await workoutRepository.getWorkoutById(id)
    if(!workout) throw notFoundError();
    return workout;
}
export async function updateLastWorkout(id:number) {
    await workoutRepository.updateLastWorkout(id)
}
export async function getLastWorkout() {
    const lastWorkout = await workoutRepository.getLastWorkout();
    return lastWorkout;
}

const workoutService ={
    createWorkout,
    getAllWorkouts,
    getActiveWorkouts,
    toggleWorkout,
    getWorkoutById,
    updateLastWorkout,
    getLastWorkout
};
export default workoutService;
