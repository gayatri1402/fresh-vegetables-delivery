import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="banner">
        <h2>Fresh Vegetables Delivered to Your Door</h2>
        <p>Shop now for organic, locally sourced vegetables.</p>
        <Link to="/shop" className="shop-button">Shop Now</Link>
      </header>
      
      <section className="popular-section">
        <h2>Popular Vegetables</h2>
        {/* Add Product Cards here */}
      </section>
    </div>
  );
}

export default Home;
