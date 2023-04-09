import React from 'react';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar selectedNav="about" />
      <div className="container">
        <article>
          <h1>About</h1>
          <p>About page in an example responsive Navbar.</p>
        </article>
      </div>
    </div>
  )
}

export default About