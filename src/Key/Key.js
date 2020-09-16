import React from 'react';
import "Key/Key.css"

function Key (props) {
	return (
		<span className="key">
			{props.text}
		</span>
	);
}

export default Key;