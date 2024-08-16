import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);
// console.log('hi');
root.render(<App />);
