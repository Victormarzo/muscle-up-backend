import { Request, Response } from "express";
import userService from "@/services/user-service";
import httpStatus from "http-status";

export async function createUser(req:Request,res:Response) {
    const {email,password,name}=req.body;
    try {
        const user = await userService.createUser({email,password,name})
        return res.status(httpStatus.CREATED).send({id:user.id,email:user.email});
    } catch (error) {
        if (error.name === "ConflictError") {
            return res.status(httpStatus.CONFLICT).send(error);
          }
          return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}