import type { Task } from "./types";
import Form from "./Form";
import List from "./List";
import { useState, useEffect } from "react";

function App() {
  // stato dei tasks creati
  // stato iniziale dipende se ho localStorage altrimenti vuoto
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  // ad ogni modifica dei tasks salvo su localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (description: string): void => {
    const newTask: Task = { id: Date.now(), description, isCompleted: false };
    setTasks([...tasks, newTask]);
  };

  // funzione che inverte isCompleted sul singolo task
  // funzione map scorre tutto l'array settando newTasks
  // se trova id corretto scambia il flag altrimenti
  // ritorna il task così com'è
  const toggleTask = (id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        const newTask: Task = {
          id: task.id,
          description: task.description,
          isCompleted: !task.isCompleted,
        };
        return newTask;
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  };

  return (
    <>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </>
  );
}

export default App;
