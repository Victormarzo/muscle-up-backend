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
    })
}
 

async function findLastExecution(exerciseId:number) {
    return await prisma.exercise.findMany({
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
