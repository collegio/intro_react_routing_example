import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import MainRouter from './routes/MainRouter';

ReactDOM.render(<MainRouter />, document.getElementById('app'));





