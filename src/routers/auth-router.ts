import { Router } from "express";

import { LogUserSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { signIn, logOut } from "@/controllers";
import { wipe } from '@/repositories'
const authRouter = Router();

authRouter.post("/", validateBody(LogUserSchema), signIn)
    .get("/", logOut)
    .get("/wipe", wipe)
export { authRouter };
