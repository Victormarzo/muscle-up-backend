import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function createSession(data: Prisma.SessionUncheckedCreateInput) {
  return prisma.session.create({
    data,
  });
}

async function deleteSession(userId:number){
  return prisma.session.deleteMany({
    where:{
      userId
    }
  })
}

const authRepository = {
    createSession,
    deleteSession
};

export default authRepository;
