import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "@/middlewares";
import { CreateExecution } from "@/protocols";
import executionService from "@/services/execution-service";

export async function createExecution(req:AuthenticatedRequest,res:Response){
    const {executions} = req.body 
    const {userId} = req;
    try {
        const exec = await executionService.createExecution({executions,userId})
        return res.send(exec)
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        if (error.name === "UnauthorizedError"){
            return res.sendStatus(httpStatus.UNAUTHORIZED)
        } 
        return res.status(httpStatus.BAD_REQUEST).send(error)
    }
}

export async function getLastExecutionSet(req:AuthenticatedRequest,res:Response){
    const exerciseId = Number(req.params.exerciseId)
    try {
        const execution = await executionService.getLastExecution(exerciseId)
        res.send(execution).status(httpStatus.OK)
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error)
    }
} 

