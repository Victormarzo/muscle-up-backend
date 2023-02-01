import { prisma } from "../config"
import {CreateExercise, NewWorkout} from "@/protocols"
import { createWorkoutInput } from "@/services/workout-service";

async function createWorkout(params: createWorkoutInput) {
    const {exercises, name, userId} = params;
    
    return await prisma.$transaction(async (tx)=>{
        const workout = await tx.workout.create({
            data:{
                userId,
                name
            }
        })
        exercises.forEach(ex=>{
            ex.workoutId=workout.id
        })
        await tx.exercise.createMany({
            data:exercises       
        })
        
    })
}

async function getAllWorkouts(userId:number) {
    return await prisma.workout.findMany({
        where:{
            userId
        },
        include:{
            Exercise:true
        }
    })
}

async function getActiveWorkouts(userId:number){
    return await prisma.workout.findMany({
        where:{
            userId,
            isActive:true
        },
        include:{
            Exercise:true
        }
    })
}

async function findWorkoutById(id:number){
    return await prisma.workout.findFirst({
        where:{
            id
        }
    })
}

async function toggleWorkout({workoutId,newActive}:toogleInputRepository){
    return await prisma.workout.update({
        where:{
            id:workoutId,
        },
        data:{
            isActive:newActive
        }
    })
}
type toogleInputRepository={
    workoutId:number,
    newActive:boolean
}
const workoutRepository = {
    createWorkout,
    getAllWorkouts,
    getActiveWorkouts,
    findWorkoutById,
    toggleWorkout
}

export default workoutRepository;
