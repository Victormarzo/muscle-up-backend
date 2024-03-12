import { loginError } from "@/errors";
import { LogUser } from "@/protocols";
import authRepository from "@/repositories/auth-repository";
import userRepository from "@/repositories/user-repository";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export async function signIn({email,password}:LogUser){
    const user = await userRepository.findByEmail(email);
    if(!user) throw loginError();   
    const userId=user.id
    const name=user.name
    const correctPassword = await bcrypt.compare(password,user.password);
    if(!correctPassword) throw loginError();
    
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    await authRepository.createSession({token,userId})

    return {userId,token,name}
}

const authService = {
    signIn
}
export default authService