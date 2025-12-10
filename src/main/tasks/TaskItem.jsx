export default function TaskItem({ task, toggleDone, removeTask }) {
    const isOverdue =
        task.deadline &&
        new Date(task.deadline) < new Date() &&
        !task.done;

    return(
        <div className={`task-item ${isOverdue ? "overdue" : ""}`}>
            <h3>{task.title}</h3>

            {task.deadline && (
                <p>Дедлайн: {task.deadline}</p>
            )}

            <div className="tags">
                {task.tags?.map((t, i) => (
                    <span key={i} className="tag">{t}</span>
                ))}
            </div>
            <button onClick={() => removeTask(task.id)}>Удалить</button>
        </div>
    );
}
