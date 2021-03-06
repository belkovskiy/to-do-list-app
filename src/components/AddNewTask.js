import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import * as actions from '../store/actions';
import { useDispatch } from 'react-redux';

const AddNewTask = () => {
	const [taskTitle, setTaskTitle] = useState('');
	const dispatch = useDispatch();

	const handleTaskTitleChange = (e) => {
		setTaskTitle(e.target.value);
	}

	const handleTaskSubmit = () => {
		dispatch(actions.addTask({
			title: taskTitle
		}));

		setTaskTitle('');
	}

	return (
		<InputGroup className="mb-3">
			<FormControl placeholder="Add New Task"
				value={taskTitle} onChange={e => handleTaskTitleChange(e)} />

			<Button variant="outline-secondary"
				onClick={handleTaskSubmit}>Save</Button>

		</InputGroup>
	)
}

export default AddNewTask;


