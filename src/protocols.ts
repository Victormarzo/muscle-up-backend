import { Exercise, User, Workout, Stats, Execution} from "@prisma/client";

export type CreateUser = Omit <User, "createdAt" | "updatedAt" | "id" >;
export type LogUser = Omit<User, "createdAt" | "updatedAt" | "id" | "name">
export type CreateWorkout = Omit <Workout, "createdAt" | "updatedAt" | "id"  >;
export type CreateStats = Omit <Stats, "createdAt" | "updatedAt" | "id">;
export type CreateExercise = Omit <Exercise, "createdAt" | "updatedAt" | "id">;
export type CreateExecution = Omit <Execution, "createdAt" | "updatedAt" | "id">;
export type ApplicationError = {
    name: string;
    message: string;
  };
  