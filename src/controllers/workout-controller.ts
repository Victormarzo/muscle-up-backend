import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "@/middlewares";
import workoutService from "@/services/workout-service";

export async function createWorkout(req:AuthenticatedRequest,res:Response) {
    const { exercise, name } = req.body
    const { userId } = req;
    try {
        const workout = await workoutService.createWorkout({exercises:exercise,name,userId})
        return res.status(httpStatus.CREATED).send(workout);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error)
    }
}

export async function getAllWorkouts(req:AuthenticatedRequest,res:Response) {
    const { userId } = req;
    try {
        const workouts = await workoutService.getAllWorkouts(userId)
        return res.status(httpStatus.OK).send(workouts)
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error)
    }
   
}

export async function getActiveWorkouts(req:AuthenticatedRequest,res:Response) {
    const { userId } = req;
    try {
        const workouts = await workoutService.getActiveWorkouts(userId)
        return res.status(httpStatus.OK).send(workouts)
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error)
    }
   
}

export async function toggleWorkout(req:AuthenticatedRequest,res:Response) {
    const { userId } = req;
    const workoutId = Number(req.params.workoutId)
    try {
        await workoutService.toggleWorkout({userId,workoutId})
        return res.sendStatus(httpStatus.OK)
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
        return res.status(httpStatus.BAD_REQUEST).send(error)
    }


}