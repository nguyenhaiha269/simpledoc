import React, { useState } from 'react';
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import './CustomHeader.css';

const CustomHeader = ({
  logo,
  menuItems,
  textColor = "#FFFFFF",
  onMenuClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (onMenuClick) {
      onMenuClick();
    }
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const closeSearchOverlay = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="custom-header">
      <div className="header-content">
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX size={24} color={textColor} /> : <FiMenu size={24} color={textColor} />}
        </div>

        <div className="header-logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav className="header-menu">
          {menuItems.map((item, index) => (
            <a href={item.link} key={index} style={{ color: textColor }}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-icons">
          <FiSearch size={24} color={textColor} onClick={handleSearchClick} style={{ cursor: 'pointer' }} />
          {/* <FiUser size={24} color={textColor} /> */}
          {/* <FiShoppingCart size={24} color={textColor} /> */}
        </div>
      </div>

      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-overlay-content">
            <input
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              autoFocus
            />
            <button className="close-search-btn" onClick={closeSearchOverlay}>
              <FiX size={24} />
            </button>
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="overlay-close-button" onClick={toggleMobileMenu}>
            <FiX size={24} color="#FFFFFF" />
          </div>
          <nav className="mobile-menu">
            {menuItems.map((item, index) => (
              <a href={item.link} key={index} onClick={toggleMobileMenu} style={{ color: textColor }}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default CustomHeader;
