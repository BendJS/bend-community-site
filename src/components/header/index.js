import React from 'react';
import { Link } from '@reach/router';

function Home() {
  return (
    <header data-testid="app">
      <Link to='/'>Home</Link>
      <Link to='contact-us'>Contact Us</Link>
    </header>
  );
}
export default Home;
