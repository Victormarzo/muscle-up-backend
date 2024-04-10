import { AuthenticatedRequest } from "@/middlewares";
import authService from "@/services/auth-service";
import { Response, Request } from "express";
import httpStatus from "http-status";

export async function signIn(req:Request,res:Response) {
    const {email, password}= req.body 
    try {
        const session = await authService.signIn({email,password})    
        return res.status(httpStatus.OK).send(session);   
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
}

export async function logOut(req:AuthenticatedRequest,res:Response) {
    const { userId }=req;
    try {
        await authService.logUserOut(userId);
        return res.sendStatus(httpStatus.OK)
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error)
    }
}