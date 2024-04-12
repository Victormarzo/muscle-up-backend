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

async function countWorkout(workoutId:number) {
    return await prisma.history.count({
        where:{
            workoutId
        }
    })
}

const historyRepository ={
    getHistoryByUserId,
    getLastWorkout,
    countWorkout
}
export default historyRepository