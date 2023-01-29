import { Router } from "express";
import {getWorkout} from "@/controllers"
const workoutRouter = Router();

workoutRouter
  
  .get("/", getWorkout)

export { workoutRouter };
