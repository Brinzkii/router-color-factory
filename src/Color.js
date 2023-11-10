import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './Color.css';

function Color(colors) {
	const { color } = useParams();
	const isValid = colors.colors.find((val, idx, arr) => {
		return val === color;
	});

	if (!isValid) return <Navigate replace to="/colors" />;

	return (
		<div
			className="Color"
			style={CSS.supports('color', color) ? { backgroundColor: color } : { backgroundColor: '#' + color }}
		>
			<h2 className="Color-title">{color}</h2>
		</div>
	);
}

export default Color;
