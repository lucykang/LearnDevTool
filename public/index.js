/**
 * This acts as the JS entry point of our app.
 * Essentially, we’re just loading React Router into the div with id app in index.html
 */
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from '../routes/index';
// CSS imports
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../public/styles/global.scss';

render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));