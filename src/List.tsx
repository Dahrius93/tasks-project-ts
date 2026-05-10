import { type Task } from "./types";

type ListProps = {
  tasks: Task[];
  toggleComplete: ({ id }: { id: string }) => void;
};

const List = ({ tasks, toggleComplete }: ListProps) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <p>{task.description}</p>
            <input
              className="task-text"
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => {
                toggleComplete({ id: task.id });
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
