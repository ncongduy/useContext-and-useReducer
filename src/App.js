import { useRef } from 'react';
import { useStore, actions } from './store';
import { ListTodo, TestReRender } from './components';
import './App.css';

function App() {
	const [state, dispatch] = useStore();
	const { todoInput } = state;
	const inputRef = useRef();

	function handleAdd() {
		dispatch(actions.addTodoInput(todoInput));
		dispatch(actions.setTodoInput(''));
		inputRef.current.focus();
	}

	return (
		<div className='App'>
			<input
				ref={inputRef}
				value={todoInput}
				placeholder='Enter todo...'
				onChange={(e) => {
					dispatch(actions.setTodoInput(e.target.value));
				}}
			/>
			<button onClick={handleAdd}>Add</button>
			<ListTodo />
			<TestReRender />
		</div>
	);
}

export default App;
