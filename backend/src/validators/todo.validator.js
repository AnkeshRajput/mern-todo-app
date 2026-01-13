import { z } from "zod";

export const createTodoSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be under 100 characters"),
});

export const todoIdSchema = z.object({
  id: z.string().length(24, "Invalid MongoDB ObjectId"),
});
