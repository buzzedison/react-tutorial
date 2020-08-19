import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Main name ="Dela"/>
    <Main name ="Edison">
      <li> This is first child</li>
      <li> This is second child</li>
      <li> This is third child </li>
      </Main>
    <Main name ="Ewuranna"/>
     
    
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
