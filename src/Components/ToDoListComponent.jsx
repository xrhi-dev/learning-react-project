
import { useState, useEffect } from "react";

export function ToDoListComponent() {
    const [todolist, setTodolist] = useState(() => {
    const savedTodos = localStorage.getItem("todolist");
    return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
    }, [todolist]);

const [todo, setTodo] = useState("");

    function AddToDo(e) {
        e.preventDefault();

        if (todo.trim() === "") return;

        setTodolist(t => [...t, todo.trim()]);
        setTodo("");
    }

    function removeToDo(index) {
        setTodolist(t => t.filter((_, i) => i !== index));
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
            <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl sm:p-8">

                {/* Header */}
                <div className="mb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-400">
                        Stay productive
                    </p>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        To-Do List<span className="text-indigo-400">.</span>
                    </h1>
                    <p className="mt-2 text-sm text-slate-400">
                        Organize your day, one task at a time.
                    </p>
                </div>

                {/* Input Form */}
                <form onSubmit={AddToDo} className="mb-6 flex gap-2">
                    <input
                        type="text"
                        placeholder="What needs to be done?"
                        value={todo}
                        onChange={e => setTodo(e.target.value)}
                        className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    />

                    <button
                        type="submit"
                        className="rounded-xl bg-indigo-500 px-4 py-3 font-semibold transition hover:bg-indigo-400 active:scale-95"
                    >
                        Add +
                    </button>
                </form>

                {/* Task Count */}
                <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-slate-300">
                        Your tasks
                    </h2>
                    <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-300">
                        {todolist.length} tasks
                    </span>
                </div>

                {/* Task List */}
                {todolist.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-slate-700 py-10 text-center">
                        <p className="text-3xl">✦</p>
                        <p className="mt-3 font-medium text-slate-300">
                            All clear!
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                            Add a task to get started.
                        </p>
                    </div>
                ) : (
                    <ul className="space-y-2">
                        {todolist.map((task, index) => (
                            <li
                                key={index}
                                className="group flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-800/60 p-4 transition hover:border-slate-600 hover:bg-slate-800"
                            >
                                <span className="min-w-0 flex-1 break-words text-sm text-slate-200">
                                    {task}
                                </span>

                                <button
                                    type="button"
                                    onClick={() => removeToDo(index)}
                                    aria-label={`Delete ${task}`}
                                    className="shrink-0 rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Footer */}
                <p className="mt-6 border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
                    Small steps make big progress.
                </p>
            </div>
        </div>
    );
}
