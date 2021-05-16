import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopMenu from './components/TopMenu';
import reportWebVitals from './reportWebVitals';
import MainFrame from './components/mainFrame';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <MainFrame />
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
