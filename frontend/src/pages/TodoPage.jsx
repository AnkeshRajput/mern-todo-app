import { useEffect, useState } from "react";
import { getTodos, createTodo, toggleTodo, deleteTodo } from "../api/todo.api";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const loadTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async (e) => {
    if (e.key && e.key !== "Enter") return;
    if (!title.trim()) return;

    setLoading(true);
    await createTodo(title);
    setTitle("");
    await loadTodos();
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
        
        {/* Header Section */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">My Tasks</h2>
          <p className="text-blue-100 text-sm mt-1 opacity-90">
            {todos.filter(t => !t.completed).length} items remaining today
          </p>
        </div>

        <div className="p-6">
          {/* Input Group */}
          <div className="flex gap-2 mb-8">
            <input
              className="flex-1 bg-slate-50 border-none ring-1 ring-slate-200 rounded-xl px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleAdd}
              placeholder="What's on your mind?"
            />
            <button 
              onClick={handleAdd}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 active:scale-95 disabled:opacity-50 text-white px-5 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-200"
            >
              {loading ? '...' : 'Add'}
            </button>
          </div>

          {/* List Section */}
          <ul className="space-y-3">
            {todos.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-4xl mb-2">✨</p>
                <p className="text-slate-400 text-sm font-medium">No tasks yet. Enjoy your day!</p>
              </div>
            ) : (
              todos.map((todo) => (
                <li 
                  key={todo._id} 
                  className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all"
                >
                  <div 
                    className="flex items-center gap-3 cursor-pointer flex-1"
                    onClick={() => toggleTodo(todo._id).then(loadTodos)}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      todo.completed 
                        ? "bg-green-500 border-green-500" 
                        : "border-slate-300 group-hover:border-blue-400"
                    }`}>
                      {todo.completed && <span className="text-white text-xs">✓</span>}
                    </div>
                    
                    <span className={`text-[15px] font-medium transition-all ${
                      todo.completed ? "line-through text-slate-400" : "text-slate-700"
                    }`}>
                      {todo.title}
                    </span>
                  </div>

                  <button
                    onClick={() => deleteTodo(todo._id).then(loadTodos)}
                    className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}