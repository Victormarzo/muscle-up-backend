import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "@/middlewares";
import workoutService from "@/services/workout-service";

export async function createWorkout(req:AuthenticatedRequest,res:Response) {
    const { exercise, name } = req.body
    const { userId } = req;
    try {
        const workout = await workoutService.createWorkout({exercises:exercise,name,userId})
        return res.sendStatus(httpStatus.CREATED);
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

export async function getWorkout(req:AuthenticatedRequest,res:Response){
    const workoutId = Number(req.params.workoutId);
    try {
        const workout= await workoutService.getWorkoutById(workoutId)
        return res.send(workout)
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
        return res.status(httpStatus.BAD_REQUEST).send(error)
    }
}

export async function getCurrentWorkout (req:AuthenticatedRequest,res:Response) {
    const { userId } = req;
        try {
        const current = await workoutService.getCurrentWorkout(userId)
        return res.send(current).status(httpStatus.OK)
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
        return res.status(httpStatus.BAD_REQUEST).send(error)
    }
}

export async function finishWorkout(req:AuthenticatedRequest,res:Response) {
    const  {userId} = req;
    try {
        await workoutService.finishWorkout(userId)
        return res.sendStatus(httpStatus.OK)      
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
        return res.status(httpStatus.BAD_REQUEST).send(error)
    }
}

export async function checkWorkout(req:AuthenticatedRequest,res:Response) {
    const  {userId} = req;
    try {
        const check = await workoutService.checkWorkout(userId);
        return res.send(check).status(httpStatus.OK)

    } catch (error) {
        return res.status(httpStatus.PAYMENT_REQUIRED).send(error)
    }
}

export  async function getLastWorkout(req:AuthenticatedRequest, res:Response) {
    const {userId} =req;
    try {
        const last = await workoutService.getLastWorkout(userId);
        return res.send(last).status(httpStatus.OK)

    } catch (error) {
        return res.status(httpStatus.NOT_FOUND).send(error)
    }
}