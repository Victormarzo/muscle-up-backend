import { prisma } from "../config"
import { Prisma } from "@prisma/client";
import {CreateUser} from "@/protocols"
async function findByEmail (email:string) {
    return prisma.user.findUnique({
        where:{
            email
        }
    })
}
async function createUser(data:CreateUser) {
    return prisma.user.create({
        data,
    });
}
const userRepository = {
    findByEmail,
    createUser
}
export default userRepository;