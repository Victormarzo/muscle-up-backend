import express, { Express } from "express";
import cors from "cors";
import { loadEnv } from "./config/envs";
import { connectDb, disconnectDb } from "./config/database";
import { userRouter, authRouter, workoutRouter } from "@/routers";
import { executionRouter } from "./routers/execution-router";
import { handleApplicationErrors } from "@/middlewares";
loadEnv();
const app = express();
app 
    .use(cors())
    .use(express.json())
    .get("/health", (_req,res) => res.send("OK!"))
    .use("/user", userRouter)
    .use("/auth", authRouter)
    .use("/workout", workoutRouter)
    .use("/execution", executionRouter)
    .use(handleApplicationErrors);

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}
export async function close(): Promise <void> {
    await disconnectDb();
}
export default app;
