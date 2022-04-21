import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="max-width header">
      <img
        className="header-logo"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-sr-marker absolute-center location-icon" />
              <div className="location-text">
                Dubai kurukku santhu, Dubai
              </div>
            </div>
            <i className="fi fi-sr-caret-down absolute-center caret-icon"></i>
          </div>
          <div className="location-search-seperater"></div>
          <div className="header-searchbar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              type="text"
              placeholder="Search for restaurent,cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/data/user_profile_pictures/92b/f0c02833b3f94d6428966b1b2760592b.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="profile-avatar"
          />
          <span className="header-username">Akash</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
