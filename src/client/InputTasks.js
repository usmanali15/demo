import React, { Fragment, useState } from 'react';
import { Button } from '../components/styles/Button.styled';
import { Container } from '../components/styles/Container.styled';

const InputTasks = () => {
	const [description, setDescription] = useState('');

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { description };
			const response = await fetch('http://localhost:5000/addTodo', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			});

			window.location = '/';
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<Container>
			<h1>Add Task</h1>
			<form onSubmit={onSubmitForm}>
				<input
					type='text'
					className='form-control'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				&nbsp;
				<Button bg='#333' color='#fff'>
					Add
				</Button>
			</form>
		</Container>
	);
};

export default InputTasks;
