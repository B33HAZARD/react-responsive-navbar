import React from 'react';
import Navbar from '../Components/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar selectedNav="contact" />
      <div className="container">
        <article>
          <h1>Contact</h1>
          <p>This is a Contact page in responsive Navbar example.</p>
        </article>
      </div>
    </div>
  )
}

export default Contact