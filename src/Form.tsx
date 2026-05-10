import { type Task } from "./types";
import { useState } from "react";

type FormProps = {
  addTask: (task: Task) => void;
};

const Form = ({ addTask }: FormProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) {
      alert("no task added");
    }
    addTask({
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    });
  };

  return (
    <form className="form task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn">
        addTask
      </button>
    </form>
  );
};

export default Form;
