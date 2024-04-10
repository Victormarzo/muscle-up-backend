import { AuthenticatedRequest } from "@/middlewares";
import { Response,  } from "express";
import httpStatus from "http-status";
import historyService from "@/services/history-service";

export async function getHistory(req:AuthenticatedRequest,res:Response) {
    const {userId} = req;
    try {
        const history = await historyService.getHistoryByUserId(userId);
        return res.status(httpStatus.OK).send(history)
    } catch (error) {
        return res.status(httpStatus.NOT_FOUND).send(error);
    }
}

export async function getLastWorkout(req:AuthenticatedRequest,res:Response) {
    const {userId} = req;
    try {
        const workout = await historyService.getLastWorkoutFromHistory(userId);
        console.log(workout)
        return res.status(httpStatus.OK).send(workout)
    } catch (error) {
        return res.status(httpStatus.NOT_FOUND).send(error);
    }
}
