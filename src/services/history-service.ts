import { notFoundError } from "@/errors"
import historyRepository from "@/repositories/history-repository"

export async function getHistoryByUserId (userId:number){
    const history = historyRepository.getHistoryByUserId(userId)
    if(!history) throw notFoundError()
    return history
}

export async function getLastWorkoutFromHistory (userId:number){
    const workout = await historyRepository.getLastWorkout(userId)
    if(!workout) return false
    return workout
}

const historyService ={
    getHistoryByUserId,
    getLastWorkoutFromHistory
}

export default historyService