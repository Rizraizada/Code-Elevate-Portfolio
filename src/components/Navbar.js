import React from 'react';
import './nav.css';

const Navbar = () => {
  return (
    <div class="home-section">
    <nav class="navbar">
      <div class="logo">
        <img src="./assets/logo.png" alt="" />
      </div>
     <div  class="nav-search">
      <div class="search-btn">
          <input type="text" placeholder="search your dream job" />
          <button><i class="fas fa-search"></i></button>
        </div>
     </div>
      <div class="menu">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Join with us!</li>
          <li>Hire Developer</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="nav-btn">
        <button class="register-btn">Register</button>
        <button>Login</button>
      </div>
      <button class="nav-menu">
        <i class="fa-solid fa-bars fa-xl"></i>
      </button>
    </nav>
    <div class="benner-content">
      <div class="large-btn-bordered">
        <button>
          <i class="fa-solid fa-wand-magic-sparkles"></i>Comprehensive
          Offshore IT Solutions
        </button>
      </div>
      <div class="benner-header">
        <h1>
          Hiring developers starting <span class="hourly-rate">$18/hour</span>
        </h1>
      </div>
      <p class="">
        Unlock the power of seamless technology integration with our
        comprehensive offshore IT solutions. As a dedicated team of seasoned
        developers, we specialize in providing end-to-end IT services tailored
        to meet the diverse needs of businesses across the globe.
      </p>
      <div class="search-btn">
        <input type="text" placeholder="search your dream job" />
        <button><i class="fas fa-search"></i></button>
      </div>
    </div>
    <div class="group-img">
      <img src="./assets/group-photo.png" alt="" />
    </div>
  </div>

  );
};

export default Navbar;
