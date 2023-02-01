import { Router } from "express";

import { LogUserSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { signIn } from "@/controllers";

const authRouter = Router();

authRouter.post("/", validateBody(LogUserSchema),signIn);

export { authRouter };
