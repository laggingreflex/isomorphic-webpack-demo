import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import 'font-awesome/css/font-awesome.css';

const app = <div className={style.greetings}>Hello, World!</div>;

if (typeof ISOMORPHIC_WEBPACK === 'undefined') {
  ReactDOM.render(app, document.getElementById('app'));
}

export default app;
