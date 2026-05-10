import { useState } from "react";

// dichiarazione tipo prop
type props = {
  addTask: (text: string) => void; // richiamo la funzione su parent passando una stringa.
};

const Form = ({ addTask }: props) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert("no input");
      return;
    }
    console.log(text);
    addTask(text);
    setText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          value={text}
          name="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn" type="submit">
          add task
        </button>
      </form>
    </>
  );
};

export default Form;
