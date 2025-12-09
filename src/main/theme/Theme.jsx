import React from "react";
import "./theme.css";

export default function Theme({ theme, onToggleTheme }) {
    return (
        <button className="theme-btn" onClick={onToggleTheme}>
            {theme === "light" ? "🌙 Тёмная тема" : "☀️ Светлая тема"}
        </button>
    );
}
