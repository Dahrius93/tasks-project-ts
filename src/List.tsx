import { type Task } from "./types";

type ListProps = {
  tasks: Task[];
  toggleComplete: ({ id }: { id: string }) => void;
  deleteTask: ({ id }: { id: string }) => void;
};

const List = ({ tasks, toggleComplete, deleteTask }: ListProps) => {
  return (
    <ul className="list">
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <input
              className="task-text"
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => {
                toggleComplete({ id: task.id });
              }}
            />
            <p>{task.description}</p>
            <button
              className="btn"
              type="button"
              onClick={() => {
                deleteTask({ id: task.id });
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
