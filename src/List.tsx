import type { Task } from "./types";

type Props = {
  tasks: Task[];
  toggleTask: (id: number) => void;
};

const List = ({ tasks, toggleTask }: Props) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.description}
            <input
              type="checkbox"
              defaultChecked={task.isCompleted}
              onChange={() => toggleTask(task.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
