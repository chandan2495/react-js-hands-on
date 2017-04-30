// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Button from './Button.jsx';
import GitCard from './GitCard.jsx';

let data = [
    {
      name: 'Chandan Singh',
      avatar: 'https://avatars0.githubusercontent.com/u/6929170?v=3',
      company: 'Commvault'
    },
    {
      name: 'Chandan Singh',
      avatar: 'https://avatars0.githubusercontent.com/u/6929170?v=3',
      company: 'Commvault'
    }
];

ReactDOM.render(<App />, document.getElementById('react-root'));
ReactDOM.render(<Button />, document.getElementById('react-root'));
ReactDOM.render(<GitCard />, document.getElementById('git-cards'));
