import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from 'js/hello-world.jsx!';


ReactDOM.render(
    <HelloWorld phrase="ES6"/>,
    document.getElementById('container')
);