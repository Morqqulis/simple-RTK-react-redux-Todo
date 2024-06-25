import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  if (todos.length === 0)
    return <h1 className={`text-center mt-10 text-3xl`}>No todos</h1>;
  else
    return (
      <ul
        className={`mt-5 max-w-[500px] mx-auto rounded-lg ${todos.length > 0 ? "bg-black p-5" : ""} flex flex-col gap-5`}
      >
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    );
};

export default TodoList;
