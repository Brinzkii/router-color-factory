import React, { useState } from 'react';
import { useNavigate, redirect } from 'react-router-dom';
import './ColorForm.css';

function ColorForm({ addColor }) {
	const INITIAL_STATE = { color: '' };
	const navigate = useNavigate();
	const [data, setData] = useState(INITIAL_STATE);
	const handleChange = (evt) => {
		const { value } = evt.target;
		setData({
			color: value,
		});
	};
	const handleSubmit = (evt) => {
		evt.preventDefault();
		addColor(data.color);
		navigate('/colors');
	};

	return (
		<form onSubmit={handleSubmit} className="ColorForm">
			<input className="ColorForm-input" type="color" value={data.color} onChange={handleChange} />
			<button className="ColorForm-button">Add</button>
		</form>
	);
}

export default ColorForm;
