import { loginError } from "@/errors";
import { LogUser } from "@/protocols";
import authRepository from "@/repositories/auth-repository";
import userRepository from "@/repositories/user-repository";
import bcrypt from "bcrypt"
import dayjs from "dayjs";
import jwt from "jsonwebtoken";

export async function signIn({email,password}:LogUser){
    const user = await userRepository.findByEmail(email);
    const updatedAt =dayjs().format('YYYY-MM-DD')
    if(!user) throw loginError();   
    const userId=user.id
    const name=user.name
    const correctPassword = await bcrypt.compare(password,user.password);
    if(!correctPassword) throw loginError();
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    await authRepository.deleteSession(userId)
    await authRepository.createSession({token,userId,updatedAt})

    return {userId,token,name}
}

export async function logUserOut(userId:number){
    return await authRepository.deleteSession(userId)
}

const authService = {
    signIn,
    logUserOut
}
export default authService