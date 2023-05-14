import React from 'react';

function Home() {
  // Steps to repro:
  // 1. Start a dev server, note the server-logged error
  // 2. Delete this next line of code:
  window.localStorage.getItem('hello');

  return <p>Hi</p>;
}

export default Home;
