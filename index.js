/**
 * This acts as the JS entry point of our app. 
 * Essentially, we’re just loading React Router into the div with id app in index.html
 */
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes/index';

render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));