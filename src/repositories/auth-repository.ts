import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function createSession(data: Prisma.SessionUncheckedCreateInput) {
  return prisma.session.create({
    data
  });
}

async function deleteSession(userId:number){
  return prisma.session.deleteMany({
    where:{
      userId
    }
  })
}

export async function wipe() {
  await prisma.execution.deleteMany({})
  await prisma.exercise.deleteMany({})
  await prisma.history.deleteMany({})
  await prisma.workout.deleteMany({})
  await prisma.session.deleteMany({})
  await prisma.user.deleteMany({})
}

const authRepository = {
    createSession,
    deleteSession,
    wipe
};

export default authRepository;
