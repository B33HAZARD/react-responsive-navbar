import React from 'react';
import Navbar from '../Components/Navbar';

const HomeScreen = () => {
  return (
    <div>
      <Navbar selectedNav="home" />
      <div className="container">
        <article>
          <h1>Responsive Navbar Project</h1>
          <p>This is an example responsive Navbar in react.</p>
        </article>
      </div>
    </div>
  )
}

export default HomeScreen