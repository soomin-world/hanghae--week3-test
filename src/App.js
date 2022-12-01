import "./App.css";
import { useState } from "react";

function Todo(props) {
  return <div className="todoCard">{props.todo.content}</div>;
}

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "시험 잘보기",
    },
  ]);
  const [content, setContent] = useState("");

  const addTodoHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      content: content,
    };
    setTodos([...todos, newTodo]);
    setContent("");
  };

  return (
    <div className="App">
      <div className="inputBox">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>
        <button onClick={addTodoHandler}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className="todoContainer">
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id}></Todo>;
        })}
      </div>
    </div>
  );
};

export default App;
