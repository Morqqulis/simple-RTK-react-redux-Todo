import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    if (text === "") return;

    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <>
      <div>
        <div className={`p-5 bg-cyan-700 rounded-xl max-w-[500px] mx-auto`}>
          <InputField
            text={text}
            handleInput={setText}
            handleSubmit={addTask}
          />
        </div>

        <TodoList />
      </div>
    </>
  );
}

export default App;
