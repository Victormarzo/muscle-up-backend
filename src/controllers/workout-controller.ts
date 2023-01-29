import { Request, Response } from "express";
import { prisma } from "@/config";
import { User } from "@prisma/client";
export async function getWorkout(req:Request,res:Response) {
    const user = await prisma.user.findMany();
    res.send(user)
    
}