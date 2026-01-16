/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(0, 0, 0, 0.9)",
        padding: "1rem 1.5rem",
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
