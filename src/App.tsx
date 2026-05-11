import Form from "./Form";
import List from "./List";
import { useState, useEffect } from "react";
import { type Task } from "./types";

const loadTask = (): Task[] => {
  const storedTask = localStorage.getItem("tasks");
  return storedTask ? JSON.parse(storedTask) : [];
};

const updateStorage = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTask());

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const toggleComplete = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        } else return task;
      }),
    );
  };

  const deleteTask = ({ id }: { id: string }) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);

  return (
    <>
      <Form addTask={addTask} />
      <List
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
