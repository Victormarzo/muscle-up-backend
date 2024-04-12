import { notFoundError, unauthorizedError } from "@/errors";
import { CreateExercise } from "@/protocols";
import historyRepository from "@/repositories/history-repository";
import workoutRepository from "@/repositories/workout-repository";
import dayjs from "dayjs";

export async function createWorkout({ exercises, name, userId }: createWorkoutInput) {
    const workout = await workoutRepository.createWorkout({ userId, name, exercises });
    return workout;
}

export type createWorkoutInput = {
    exercises: CreateExercise[],
    name: string,
    userId: number
}
export type toogleInput = {
    userId: number,
    workoutId: number
}
export async function getAllWorkouts(userId: number) {
    const workouts = await workoutRepository.getAllWorkouts(userId);
    return workouts;
}

export async function getActiveWorkouts(userId: number) {
    const workouts = await workoutRepository.getActiveWorkouts(userId);
    return workouts;
}
export async function toggleWorkout({ userId, workoutId }: toogleInput) {
    const workout = await workoutRepository.findWorkoutById(workoutId)
    if (!workout) throw notFoundError();
    if (userId !== workout.userId) throw unauthorizedError();
    const newActive = !workout.isActive
    return await workoutRepository.toggleWorkout({ workoutId, newActive })
}

export async function getWorkoutById(id: number) {
    const workout = await workoutRepository.getWorkoutById(id)
    if (!workout) throw notFoundError();
    const count = await historyRepository.countWorkout(id)
    const response = {count,workout}
    return response;
}

export async function getCurrentWorkout(userId: number) {
    const current = await workoutRepository.getCurrentWorkout(userId);
    if (current) {
        return current;
    }
    else {
        return false;
    }
}

export async function finishWorkout(userId: number) {
    const workout = await workoutRepository.getCurrentWorkout(userId);
    if (workout.id) {
        const finish = await workoutRepository.finishWorkout(workout.id);
        return finish;
    } else {
        throw notFoundError();
    }
}

export async function checkWorkout(userId: number) {
    const currentWorkout = await workoutRepository.getCurrentWorkout(userId)
    const now = dayjs().format('YYYY-MM-DD');
    console.log(now)
    let final = true;
    if (!currentWorkout) {
        return final = false;
    }
    console.log(final)
    const { id } = currentWorkout;
    const exerciseList = await workoutRepository.check(id);
    for (let i = 0; i < exerciseList.length; i++) {
        if (exerciseList[i].Execution[0] == null || dayjs(exerciseList[i].Execution[0].updatedAt).format('YYYY-MM-DD') !== now) {
            final = false;
        }
    }
    return final;

}
// 
const workoutService = {
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
