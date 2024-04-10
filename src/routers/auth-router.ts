import { Router } from "express";

import { LogUserSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { signIn, logOut } from "@/controllers";

const authRouter = Router();

authRouter.post("/", validateBody(LogUserSchema), signIn)
    .get("/", logOut)
export { authRouter };
