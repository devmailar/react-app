import React, { Component } from 'react';
import './Home.css'; // Tell webpack that Button.js uses these styles
import icon from '../../assets/developer.png'; // Tell webpack this JS file uses this image

function Home() {
  return (
    
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={icon}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Hello, my name is Mailar</h1>
            <p>
              I'm junior full-stack web developer who is currently learning amazing techologies including react, nodejs, js, html, css.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Home;