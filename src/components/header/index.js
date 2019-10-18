import React from 'react';
import { Link } from '@reach/router';
import './header.css';

function Home() {
  return (
    <header data-testid="app">
      <Link to='/'>Home</Link>
      <Link to='contact-us'>Contact Us</Link>
        <Link to='calendar'>Calendar</Link>
    </header>
  );
}
export default Home;
