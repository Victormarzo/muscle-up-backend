import { conflictError } from "@/errors";
import { CreateUser } from "@/protocols";
import userRepository from "@/repositories/user-repository";
import { User } from "@prisma/client";
import bcrypt from "bcrypt"

export async function createUser({email,password,name}:CreateUser) {
    await verifyEmail(email);
    const hashedPassword = await bcrypt.hash(password,10);
    return userRepository.createUser({email,password:hashedPassword,name})

}

async function verifyEmail(email:string){
    const userEmail = await userRepository.findByEmail(email);
    if (userEmail) throw conflictError('Esse email já está em uso')
}
const userService = {
    createUser
}
export default userService;
