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

async function updateLastWorkout(id:number) {
    return prisma.$transaction(async (tx)=>{
        await prisma.workout.updateMany({
            where:{
                lastWorkout:true
            },
            data:{
                lastWorkout:false
            }
        })
        await prisma.workout.update({
            where:{
                id
            },
            data:{
                lastWorkout:true
            }
        })
    })
    
}

async function getLastWorkout(){
    return await prisma.workout.findFirst({
        where:{
            lastWorkout:true
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
    updateLastWorkout,
    getLastWorkout
}

export default workoutRepository;
