import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import './ColorList.css';

function ColorList({ colors }) {
	return (
		<div className="ColorList">
			<Link className="ColorList-button" to="/colors/new">
				Add Color
			</Link>

			{colors.map((c) => (
				<Link
					className="ColorList-item"
					style={CSS.supports('color', c) ? { color: c } : { color: '#' + c }}
					to={`/colors/${c}`}
					key={uuid()}
				>
					{c[0].toUpperCase() + c.slice(1)}
				</Link>
			))}
		</div>
	);
}

export default ColorList;
