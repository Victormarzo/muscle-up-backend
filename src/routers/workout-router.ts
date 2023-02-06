import { Router } from "express";
import { 
  createWorkout,
  getAllWorkouts,
  getActiveWorkouts, 
  toggleWorkout, 
  getWorkout,
  updateLastWorkout,
  getLastWorkout
} from "@/controllers"
import { validateBody, authenticateToken} from "@/middlewares";
import { createWorkoutSchema } from "@/schemas";
const workoutRouter = Router();

workoutRouter
  .all("/*", authenticateToken)
  .get("/last", getLastWorkout)
  .post("/", validateBody(createWorkoutSchema), createWorkout)
  .get("/", getAllWorkouts)
  .get("/active", getActiveWorkouts)
  .put("/:workoutId", toggleWorkout)
  .get("/:workoutId", getWorkout)
  .put("/last/:id", updateLastWorkout)
 
export { workoutRouter };
