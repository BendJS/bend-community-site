import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import ContactUs from './components/contact-us';
import Home from './components/home';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Home path='/' />
        <ContactUs path='contact-us' />
      </Router>
    </Fragment>
  );
}

export default App;
