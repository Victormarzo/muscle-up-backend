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
        //todo update onde tira qualquer current que possa estar ativo
        await tx.workout.updateMany({
            where:{
                current:true
            },
            data:{
                current:false
            }
        })
        await tx.workout.update({
            where:{
                id:workoutId
            },
            data:{
                current:true
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
const executionRepository = {
    createExecution,
    findLastExecution
}
export default executionRepository;
