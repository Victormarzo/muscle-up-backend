import { prisma } from "../config"

async function getHistoryByUserId(userId:number) {
    return await prisma.history.findMany({
        where:{
            Workout:{
                userId
            }
        },
        orderBy:{
            updatedAt:'desc'
        }
    })
}
async function getLastWorkout(userId:number){
    return await prisma.history.findFirst({
        where:{
            Workout:{
                userId
            }
        },
        include:{
            Workout:true
        },
        orderBy:{
            updatedAt:'desc'
        }

    })
}
const historyRepository ={
    getHistoryByUserId,
    getLastWorkout
}
export default historyRepository