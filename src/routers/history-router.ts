import { Router } from "express";
import {getHistory, getLastWorkout  } from "@/controllers";
import { authenticateToken } from "@/middlewares";

const historyRouter = Router();

historyRouter
    .all("/*", authenticateToken)
    .get("/", getHistory)
    .get("/last", getLastWorkout)
             
export { historyRouter };
