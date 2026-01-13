import Todo from "../models/Todo.js";
import { ApiError } from "../utils/apiError.js";
import mongoose from "mongoose";


export const getAllTodosService = async () => {
  return await Todo.find().sort({ createdAt: -1 });
};

export const createTodoService = async (title) => {
  if (!title) {
    throw new ApiError("Title is required", 400);
  }

  return await Todo.create({ title });
};

export const toggleTodoService = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError("Invalid Todo ID", 400);
  }

  const todo = await Todo.findById(id);

  if (!todo) {
    throw new ApiError("Todo not found", 404);
  }

  todo.completed = !todo.completed;
  return await todo.save();
};


export const deleteTodoService = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError("Invalid Todo ID", 400);
  }

  const todo = await Todo.findByIdAndDelete(id);

  if (!todo) {
    throw new ApiError("Todo not found", 404);
  }

  return true;
};

