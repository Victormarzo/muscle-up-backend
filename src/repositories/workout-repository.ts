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
            Exercise:{
                include:{
                    Execution:{
                        where:{
                            lastExecution:true
                        }
                    }
                }
            }
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

async function findExerciseById(id:number) {
    return await prisma.exercise.findFirst({
        where:{
            id
        },
        include:{
            Workout:true
        }
    })
}

async function getWorkoutById(workoutId:number){
    return await prisma.exercise.findMany({
        where:{
            workoutId
        },
        include:{
            Execution:{
                where:{
                    lastExecution:true
                },take:1
            },
            Workout:{
                select:{
                    name:true
                }
            }

        }
    })
}

async function getCurrentWorkout(userId:number) {
    return await prisma.workout.findFirst({
        where:{
            userId,
            current:true
        }
    })
}

async function  finishWorkout(id:number) {
    return await prisma.$transaction(async(tx)=>{
        await tx.workout.update({
            where:{
                id,
            },
            data:{
                current:false
            }
        })
        await tx.history.create({
            data:{
                workoutId:id
            }
        })
    })
    
}

async function check(id:number){
    return await prisma.exercise.findMany({
        where:{
            workoutId:id
        },
        include:{
            Execution:{
                where:{
                    lastExecution:true
                },take:1
            }
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
    toggleWorkout,
    findExerciseById,
    getWorkoutById,
    getCurrentWorkout,
    finishWorkout,
    check
}

export default workoutRepository;
