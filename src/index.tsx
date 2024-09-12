import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom-theme.scss';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Routing from "./screens/routing";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your questionnaire, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
