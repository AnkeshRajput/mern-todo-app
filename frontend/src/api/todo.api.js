import api from "./axios";

export const getTodos = () => api.get("/todos");
export const createTodo = (title) =>
  api.post("/todos", { title });
export const toggleTodo = (id) =>
  api.patch(`/todos/${id}`);
export const deleteTodo = (id) =>
  api.delete(`/todos/${id}`);
