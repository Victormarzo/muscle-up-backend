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
  .get("/toggle/:workoutId", toggleWorkout)
  .put("/finish-workout", finishWorkout)
  .post("/", validateBody(createWorkoutSchema), createWorkout)
  .get("/", getAllWorkouts)
  .get("/active", getActiveWorkouts)
  .get("/:workoutId", getWorkout);

export { workoutRouter };
    