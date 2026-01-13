import { asyncHandler } from "../middlewares/asyncHandler.js";
import {
  getAllTodosService,
  createTodoService,
  toggleTodoService,
  deleteTodoService,
} from "../services/todo.service.js";
import { ApiResponse } from "../utils/apiResponse.js";

export const getTodos = asyncHandler(async (req, res) => {
  const todos = await getAllTodosService();

  res.status(200).json(
    new ApiResponse({
      data: todos,
    })
  );
});

export const createTodo = asyncHandler(async (req, res) => {
  const todo = await createTodoService(req.body.title);

  res.status(201).json(
    new ApiResponse({
      data: todo,
      message: "Todo created successfully",
    })
  );
});

export const updateTodo = asyncHandler(async (req, res) => {
  const todo = await toggleTodoService(req.params.id);

  res.status(200).json(
    new ApiResponse({
      data: todo,
      message: "Todo updated successfully",
    })
  );
});

export const deleteTodo = asyncHandler(async (req, res) => {
  await deleteTodoService(req.params.id);

  res.status(200).json(
    new ApiResponse({
      message: "Todo deleted successfully",
    })
  );
});
