import { ListTodo, TestReRender } from './components';
import './App.css';

function App() {
	console.log('re-render App');

	return (
		<div className='App'>
			<ListTodo />
			<TestReRender />
		</div>
	);
}

export default App;
