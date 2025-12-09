import React, { useState, useEffect } from "react";

import TaskList from "./main/tasks/TaskList.jsx";
import TaskForm from "./main/tasks/TaskForm.jsx";
import SearchBar from "./main/search/SearchBar.jsx";
import Theme from "./main/theme/Theme.jsx";

import "./index.css";

export default function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((t) => (t === "light" ? "dark" : "light"));
    }

    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function addTask(text, tags, deadline) {
        const newTask = {
            id: Date.now(),
            text,
            tags,
            deadline,
            completed: false,
        };
        setTasks((prev) => [...prev, newTask]);
    }

    function toggleTaskComplete(id) {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    function editTask(id, newText, newTags, newDeadline) {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, text: newText, tags: newTags, deadline: newDeadline }
                    : task
            )
        );
    }
    function deleteTask(id) {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }

    const [query, setQuery] = useState("");

    const filteredTasks = tasks.filter((task) => {
        const text = task.text.toLowerCase();
        const tags = task.tags.join(" ").toLowerCase();
        const q = query.toLowerCase();
        return text.includes(q) || tags.includes(q);
    });

    return(
        <div className="app">
            <h1>Task Manager</h1>

            {/* Theme switcher */}
            <Theme theme={theme} onToggleTheme={toggleTheme} />

            {/* --- Search bar --- */}
            <SearchBar query={query} onSearch={setQuery} />

            {/* --- Task form --- */}
            <TaskForm onAddTask={addTask} />

            {/* --- Task list --- */}
            <TaskList
                tasks={filteredTasks}
                onToggleComplete={toggleTaskComplete}
                onEditTask={editTask}
                onDeleteTask={deleteTask}
            />
        </div>
    );
}
