import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.controller.js";

import { validate } from "../middlewares/validate.js";
import {
  createTodoSchema,
  todoIdSchema,
} from "../validators/todo.validator.js";

const router = express.Router();

router.get("/", getTodos);

router.post(
  "/",
  validate(createTodoSchema),
  createTodo
);

router.put(
  "/:id",
  validate(todoIdSchema, "params"),
  updateTodo
);

router.delete(
  "/:id",
  validate(todoIdSchema, "params"),
  deleteTodo
);

export default router;
