import dayjs from "dayjs"
import { prisma } from "../config"
import {CreateExecution} from "@/protocols"

 async function createExecution(params:CreateExecution[]) {
    const {exerciseId}=params[0]
    return prisma.$transaction(async (tx)=>{
        
        await tx.execution.updateMany({
            where:{
                exerciseId,
                lastExecution:true
            },
            data:{
                lastExecution:false,
                updatedAt:dayjs().format('YYYY-MM-DD')
            }
        })

        params.forEach(ex=>{
            ex.updatedAt=dayjs().format('YYYY-MM-DD')
        })

        await tx.execution.createMany({
            data:params
        })
        const exercise = await tx.exercise.findFirst({
            where:{
                id: exerciseId
            }
        })
        const {workoutId} = exercise;
        await tx.workout.updateMany({
            where:{
                current:true
            },
            data:{
                current:false,
                updatedAt:dayjs().format('YYYY-MM-DD')
            }
        }) 
        await tx.workout.update({
            where:{
                id:workoutId
            },
            data:{
                current:true,
                updatedAt:dayjs().format('YYYY-MM-DD')
            }
        })
        
    })
}
 

async function findLastExecution(exerciseId:number) {
    return await prisma.exercise.findFirst({
        where:{
            id:exerciseId,
            
        },
        include:{
            Execution:{
                where:{
                    lastExecution:true
                }
            }
        }
    })
}

async function checkAnyExecution(id:number) {
    return await prisma.workout.findFirst({
           include:{
            Exercise:{
                include:{
                    Execution:true
                }
            }
           },
           where:{userId:id}
        })
}

const executionRepository = {
    createExecution,
    findLastExecution,
    checkAnyExecution
}
export default executionRepository;
