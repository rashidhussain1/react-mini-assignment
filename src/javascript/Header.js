import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
          <div className="left_top">
            <img
            className="header__logo"
            alt="logo"
            src="https://media.istockphoto.com/vectors/electric-vehicle-car-icon-stock-illustration-vector-id1290018183?k=20&m=1290018183&s=612x612&w=0&h=LdpwEiZ2Pd4-hz8GC7xjCyjOFE0ktccdOYIePa2vsxo="
            />
            <h4>e-Ride</h4>
          </div>

      </div>

      <div className="header_right">
          <div className="right_top">
                <a className="header_text">Electric Cars</a>
                <a className="header_text2">Suitability Tools</a>
                <a className="header_text2">My Bookings</a>
                <a className="header_text3">Sign Out</a>
          </div>
        
      </div>
    </div>
  );
}

export default Header;
