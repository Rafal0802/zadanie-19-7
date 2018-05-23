import React from 'react';
import './App.css';
import CommentsList from './CommentsListContainer';
import Panel from './PanelContainer';
const App = () => {
  return (
    <div className="App">
    	<Panel />
    	<CommentsList />
    </div>
  );
};


export default App;
