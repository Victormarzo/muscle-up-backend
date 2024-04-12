import { Exercise, User, Execution, Workout } from "@prisma/client";

export type CreateUser = Omit <User, "createdAt" | "id" >;
export type CreateUserUpdate = Omit <User, "createdAt" | "updatedAt" | "id">;
export type LogUser = Omit<User, "createdAt" | "updatedAt" | "id" | "name">
export type CreateExercise = Omit <Exercise, "createdAt" | "id">;
export type CreateExecution = Omit <Execution, "createdAt" | "id"|"lastExecution">;
export type ApplicationError = {
    name: string;
    message: string;
  };
export type CreateWorkout = {
  name:string,
  exercise:CreateExercise[]
};
export type NewWorkout = Omit <Workout, "createdAt" | "updatedAt" | "id" |"isActive">;