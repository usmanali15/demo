import React, { Fragment, useEffect, useState } from 'react';
import { Button } from '../components/styles/Button.styled';
import EditTasks from './EditTasks';
import { Container } from '../components/styles/Container.styled';
import Card from '../components/Card';

const ShowTasks = () => {
	const [todos, setTodos] = useState([]);

	//delete todo function

	const deleteTodo = async (id) => {
		try {
			const deleteTodo = await fetch(
				`http://localhost:5000/delete/${id}`,
				{
					method: 'DELETE'
				}
			);

			setTodos(todos.filter((todo) => todo.todo_id !== id));
		} catch (error) {
			console.error(error.message);
		}
	};

	const getTodos = async () => {
		try {
			const response = await fetch('http://localhost:5000/getTodo');
			const jsonData = await response.json();

			setTodos(jsonData);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<>
			<Container>
				{todos.map((item, index) => (
					<>
						<Card key={index} item={item} />
						<EditTasks todo={item} />
						&nbsp;
						<Button
							bg='#8b0000 '
							color='#fff'
							onClick={() => deleteTodo(item.todo_id)}
						>
							Delete
						</Button>
					</>
				))}
			</Container>
			<br />
			<br />
		</>
	);
};

export default ShowTasks;
