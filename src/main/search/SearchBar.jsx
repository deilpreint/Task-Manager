import React from "react";

export default function SearchBar({ query, onSearch }) {
    return(
        <div className="search-bar">
            <input
                className="search-input"
                type="text"
                value={query}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Поиск задач..."
            />
        </div>
    );
}
