import { Router } from "express";
import { validateBody, authenticateToken} from "@/middlewares";
import { createExecutionSchema } from "@/schemas";
import { createExecution,getLastExecutionSet } from "@/controllers";
const executionRouter = Router();

executionRouter
  .all("/*", authenticateToken)
  .post("/", validateBody(createExecutionSchema), createExecution)
  .get("/:exerciseId", getLastExecutionSet)
  
export { executionRouter };
