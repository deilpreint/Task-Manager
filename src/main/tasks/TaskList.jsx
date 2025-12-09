import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleDone, removeTask }) {
    return (
        <div className="tasks-container">
            <h2>Список задач</h2>

            {tasks.length === 0 && <p>Задач пока нет</p>}

            {tasks.map((t) => (
                <TaskItem
                    key={t.id}
                    task={t}
                    toggleDone={toggleDone}
                    removeTask={removeTask}
                />
            ))}
        </div>
    );
}
