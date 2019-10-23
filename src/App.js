import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import ContactUs from './components/contact-us';
import Home from './components/home';
import Header from './components/header';
import './App.css';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Fragment>
      <Header />
      <Container maxWidth="md" style={{padding: `40px 10px`}} component="main">
        <Router>
          <Home path='/' />
          <ContactUs path='contact-us' />
        </Router>
      </Container>
    </Fragment>
  );
}

export default App;
