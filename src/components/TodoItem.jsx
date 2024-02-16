import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoCompleted } from "../store/todoSlice";

const TodoItem = ({ id, text, completed }) => {
	console.log(completed);
	const dispatch = useDispatch();

	return (
		<li key={id}>
			<input
				type="checkbox"
				checked={completed}
				onChange={() => dispatch(toggleTodoCompleted({ id }))}
			/>
			<span>{text}</span>
			<span
				style={{ cursor: "pointer", color: "red" }}
				onClick={() => dispatch(removeTodo({ id }))}
			>
				&times;
			</span>
		</li>
	);
};

export default TodoItem;
