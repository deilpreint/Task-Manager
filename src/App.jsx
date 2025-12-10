import { useState, useEffect } from "react";
import TaskForm from "./main/tasks/TaskForm.jsx";
import TaskList from "./main/tasks/TaskList.jsx";
import Theme from "./main/theme/Theme.jsx";

export default function App() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([
            ...tasks,
            { ...task, id: Date.now(), done: false }
        ]);
    };

    const toggleDone = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    const filterByTag = (tag) => {
        if (!tag.trim()) {
            setFiltered([]);
            return;
        }
        const result = tasks.filter(t => t.tags?.includes(tag));
        setFiltered(result);
    };

    return (
        <div className="app-wrapper">
            <Theme />

            <h1 className="title">Task Manager</h1>

            <TaskForm addTask={addTask} filterByTag={filterByTag} />

            <TaskList
                tasks={filtered.length > 0 ? filtered : tasks}
                toggleDone={toggleDone}
                removeTask={removeTask}
            />
        </div>
    );
}
