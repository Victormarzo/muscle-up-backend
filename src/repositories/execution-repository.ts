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
                lastExecution:false
            }
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
        console.log('esse é o workout',workoutId)
        await tx.workout.updateMany({
            where:{
                current:true
            },
            data:{
                current:false
            }
        }) 
        const abacaxi = await tx.workout.update({
            where:{
                id:workoutId
            },
            data:{
                current:true
            }
        })
        console.log('aqui mano abacaxi',abacaxi)
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
const executionRepository = {
    createExecution,
    findLastExecution
}
export default executionRepository;
