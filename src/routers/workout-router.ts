import { Router } from "express";
import { createWorkout, getAllWorkouts, getActiveWorkouts, toggleWorkout } from "@/controllers"
import { validateBody, authenticateToken} from "@/middlewares";
import { createWorkoutSchema } from "@/schemas";
const workoutRouter = Router();

workoutRouter
  .all("/*", authenticateToken)
  .post("/", validateBody(createWorkoutSchema), createWorkout)
  .get("/", getAllWorkouts)
  .get("/active", getActiveWorkouts)
  .put("/:workoutId", toggleWorkout)
export { workoutRouter };
