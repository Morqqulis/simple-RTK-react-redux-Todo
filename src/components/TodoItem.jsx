import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoCompleted } from "../store/todoSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className={`flex justify-between items-center text-xl`} key={id}>
      <input
        className={`hover:cursor-pointer`}
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoCompleted({ id }))}
      />
      <span className={``}>{text}</span>
      <span
        className={` rounded-lg flex items-center justify-center hover:scale-110 duration-300`}
        style={{ cursor: "pointer", color: "red" }}
        onClick={() => dispatch(removeTodo({ id }))}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
