import type { Task } from "./types";
import Form from "./Form";
import List from "./List";
import { useState } from "react";

function App() {
  // stato dei tasks creati
  // alla modifica aggiorno la pagina
  const [tasks, setTasks] = useState<Task[]>([]);

  // funzione richiamata dal componente Form
  // Form richiama la funzione passando la descrizione del nuovo task da aggiungere
  const addTask = (description: string): void => {
    // creo il nuovo task con la decrizione passata dal Form
    // e aggiorno i tasks
    const newTask: Task = { id: Date.now(), description, isCompleted: false };
    setTasks([...tasks, newTask]);
  };

  // funzione che inverte isCompleted sul singolo task
  // funzione map scorre tutto l'array settando newTasks
  // se trova id corretto scambia il flag altrimenti
  // ritorna il task così com'è
  const toggleTask = (id: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id == id) {
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
