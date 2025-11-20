import React from "react";

function TopBar() {
  return (
    <>
    <div className="promo-header">
        <span className="promo-text">
          <strong>Black Friday Sale!</strong> Sitewide deals from E£279.99. Ends Nov 28.
        </span>
        <button className="promo-close">✕</button>
      </div>

    <header className="navbar">
      <div className="brand-search">
      <img src="public/pictures/udemy.png" 
      alt="text 9" 
      className="logo-image"
    />
        <div className="nav-text-link">Explore</div>
        <input
          type="text"
          placeholder="Search for anything"
          className="input-search"
        />
      </div>
      <div className="nav-actions">
        <div className="nav-text-Plans&Pricing">Plans & Pricing</div>
        <div className="nav-text-UB">Udemy Business</div>
        <div className="nav-text-TeachUdemy">Teach on Udemy</div>
        <span className="cart-icon">🛒</span>
        <button className="login_button">Log in</button>
        <button className="signup_button">Sign Up</button>
        <button className="globe-button">🌐</button>
      </div>
    </header>
    </>
  );
}

export default TopBar;
