import { useEffect, useState } from "react";

export default function Theme() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            className="theme-btn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ? "🌙 Тёмная тема" : "☀️ Светлая тема"}
        </button>
    );
}
