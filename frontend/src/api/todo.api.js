import api from "./axios";

export const getTodos = async () => {
  const res = await api.get("/todos");
  return res.data;
};

export const createTodo = async (title) => {
  const res = await api.post("/todos", { title });
  return res.data;
};

export const toggleTodo = async (id) => {
  const res = await api.put(`/todos/${id}`);
  return res.data;
};

export const deleteTodo = async (id) => {
  const res = await api.delete(`/todos/${id}`);
  return res.data;
};
