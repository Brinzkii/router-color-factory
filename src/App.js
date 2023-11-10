import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import ColorList from './ColorList';
import Color from './Color';
import ColorForm from './ColorForm';

import './App.css';

function App({ props }) {
	const INITIAL_STATE = [
		'crimson',
		'lightcoral',
		'tomato',
		'chartreuse',
		'darkseagreen',
		'palegreen',
		'cornflowerblue',
		'midnightblue',
	];
	const [colors, setColors] = useState(INITIAL_STATE);
	const addColor = (color) => {
		if (CSS.supports('color', color)) {
			setColors([color.slice(1), ...colors]);
		}
	};
	return (
		<div className="App">
			<h1 className="App-header">Color Factory</h1>
			<BrowserRouter>
				<Routes>
					<Route exact path="/colors" element={<ColorList colors={colors} />} />
					<Route path="/colors/:color" element={<Color colors={colors} />} />
					<Route path="/colors/new" element={<ColorForm addColor={addColor} />} />
					<Route path="*" element={<Navigate replace to="/colors" />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
