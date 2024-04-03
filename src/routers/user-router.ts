import { Router } from "express";
import { createUserSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { createUser } from "@/controllers";

const userRouter = Router();

userRouter.post("/", validateBody(createUserSchema), createUser)
export { userRouter };
