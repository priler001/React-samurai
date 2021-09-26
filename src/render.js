import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./components/Redux/state"
import state from "./components/Redux/state"



export let rerenderEntireTree = (state1) => {
  debugger;
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
