import React from 'react';
import { useStore } from '../store';

export default function ListTodo() {
	const [state] = useStore();
	const { todos } = state;

	return (
		<ul>
			{todos.length > 0 &&
				todos.map((todo, index) => <li key={index}>{todo}</li>)}
		</ul>
	);
}
