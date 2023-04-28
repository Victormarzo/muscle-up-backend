import { Router } from "express";
import { 
  createWorkout,
  getAllWorkouts,
  getActiveWorkouts, 
  toggleWorkout, 
  getWorkout,
  getCurrentWorkout,
  finishWorkout,
  checkWorkout
} from "@/controllers"
import { validateBody, authenticateToken} from "@/middlewares";
import { createWorkoutSchema } from "@/schemas";
const workoutRouter = Router();

workoutRouter
  .all("/*", authenticateToken)
  .get("/current", getCurrentWorkout)
  .get("/check", checkWorkout )
  .put("/finish-workout", finishWorkout)
  .post("/", validateBody(createWorkoutSchema), createWorkout)
  .get("/", getAllWorkouts)
  .get("/active", getActiveWorkouts)
  .put("/:workoutId", toggleWorkout)
  .get("/:workoutId", getWorkout);

export { workoutRouter };
