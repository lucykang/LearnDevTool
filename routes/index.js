import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../public/components/App';
import HomePage from '../public/components/home/HomePage';
import AboutPage from '../public/components/about/AboutPage';
import ContactPage from '../public/components/contact/ContactPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="contact" component={ContactPage} />
  </Route>
);