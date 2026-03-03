import { useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(todosList);
  const ref = useRef(null);

  const handleClick = () => {
    const newTodo = { id: nextId++, text };
    

   //issue here
    flushSync(()=>{
      setTodos([...todos, newTodo]);
    })
    setText("");
    ref.current.lastChild.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div>
      <button onClick={handleClick}>Add Todo</button>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <ul ref={ref}>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
}

let nextId = 0;
let todosList = [];

for (let i = 0; i < 200; i++) {
  todosList.push({ id: nextId++, text: `Todo ${i + 1}` });
}
