import React from 'react';

const Panel = ({ addComment }) => (
	<div>
		<button onClick={() => addComment(prompt('Treść komentarza') + ' ')}>Dodaj</button>
	</div>
);

export default Panel;