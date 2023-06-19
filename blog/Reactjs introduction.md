# React js

-ReactJS is an open-source, component based front end library responsible only for the view layer of theapplication.
-It is maintained by Facebook.
-ReactJS uses virtual DOM based mechanism to fill in data (views) in HTML DOM. The virtual DOM works fast owning to the fact that it only changes individual DOM elements instead of reloading complete DOM every time
-React allows us to write components using a domain-specific language called JSX. JSX allows us to write our components using HTML, whilst mixing in JavaScript events. React will internally convert this into a virtual DOM, and will ultimately output our HTML for us.
-React "reacts" to state changes in your components quickly and automatically to rerender the components in the HTML DOM by utilizing the virtual DOM. The virtual DOM is an in-memory representation of an actual DOM. By doing most of the processing inside the virtual DOM rather than directly in the browser's DOM, React can act quickly and only add, update, and remove components which have changed since the last render cycle occurred.

# INSTALLATION AND SETUP

-Installing via npm
You can also install React using npm by doing the following:
-npm install --save react react-dom
To use React in your JavaScript project, you can do the following:
var React = require('react');
var ReactDOM = require('react-dom')
ReactDOM.render(<App />, ...);

# Installing via Yarn

Facebook released its own package manager named Yarn, which can also be used to install React. After installing
Yarn you just need to run this command:
-yarn add react react-dom

# Create React App

create-react-app is a React app boilerplate generator created by Facebook. It provides a development environment
configured for ease-of-use with minimal setup, including:
-ES6 and JSX transpilation
-Dev server with hot module reloading
-Code linting
-CSS auto-prefixing
-Build script with JS, CSS and image bundling, and sourcemaps
-Jest testing framework
-Installation
First, install create-react-app globally with node package manager (npm).
-npm install -g create-react-app
Then run the generator in your chosen directory.
-create-react-app my-app
Navigate to the newly created directory and run the start script.
-cd my-app/
-npm start

# EXAMPLE

code for hello world in react js

import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
return (

<div className="App">
Hello World !
</div>
);
}
export default App;
