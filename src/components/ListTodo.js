import React, { useRef } from 'react';
import { useStore, actions } from '../store';

export default function ListTodo() {
	const [state, dispatch] = useStore();
	const { todoInput, todos } = state;
	const inputRef = useRef();

	function handleAdd() {
		dispatch(actions.addTodoInput(todoInput));
		dispatch(actions.setTodoInput(''));
		inputRef.current.focus();
	}

	console.log('re-render ListTodo');

	return (
		<>
			<input
				ref={inputRef}
				value={todoInput}
				placeholder='Enter todo...'
				onChange={(e) => {
					dispatch(actions.setTodoInput(e.target.value));
				}}
			/>
			<button onClick={handleAdd}>Add</button>
			<ul>
				{todos.length > 0 &&
					todos.map((todo, index) => <li key={index}>{todo}</li>)}
			</ul>
		</>
	);
}
