import { useState } from "react";

export default function TaskForm({ addTask, filterByTag }) {
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [deadline, setDeadline] = useState("");
    const [searchTag, setSearchTag] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        const tagList = tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean);

        addTask({ title, tags: tagList, deadline });
        setTitle("");
        setTags("");
        setDeadline("");
    };

    return (
        <div className="task-form">
            <h2>Добавить задачу</h2>

            <textarea
                placeholder="Описание задачи..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <div className="tag-input">
                <input
                    type="text"
                    placeholder="Теги"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
            </div>

            <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />

            <button onClick={handleSubmit}>Добавить</button>

            {}
            <div className="search-tags">
                <input
                    type="text"
                    placeholder="Поиск по тегу"
                    value={searchTag}
                    onChange={(e) => setSearchTag(e.target.value)}
                />
                <button onClick={() => filterByTag(searchTag)}>Найти</button>
            </div>
        </div>
    );
}
