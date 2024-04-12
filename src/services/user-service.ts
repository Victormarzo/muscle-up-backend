import { conflictError } from "@/errors";
import { CreateUserUpdate } from "@/protocols";
import userRepository from "@/repositories/user-repository";
import bcrypt from "bcrypt"
import dayjs from "dayjs";

export async function createUser({email,password,name}:CreateUserUpdate) {
    await verifyEmail(email);
    const hashedPassword = await bcrypt.hash(password,10);
    return userRepository.createUser({email,password:hashedPassword,name,updatedAt:dayjs().format('YYYY-MM-DD')})

}

async function verifyEmail(email:string){
    const userEmail = await userRepository.findByEmail(email);
    if (userEmail) throw conflictError('Esse email já está em uso')
}
const userService = {
    createUser
}
export default userService;
