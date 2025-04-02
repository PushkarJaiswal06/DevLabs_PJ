import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0; /* Prevent logo from shrinking or moving */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  transition: transform 0.5s ease-in-out; /* Smooth movement */
  transform: ${(props) => (props.isOpen ? "translateX(-30rem)" : "translateX(0)")};
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

const ToggleButton = styled.button`
  padding: 10px 16px;
  background-color: rgb(36, 45, 55);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgb(139, 148, 158);
    color: black;
    transform: scale(1.05);
    font-weight: 500;
    font-size: 1.05rem;
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
  }
`;

const Navbar = ({ toggleSidebar, isOpen }) => {
  return (
    <NavContainer>
      <Logo
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          DEVLABS
        </Link>
      </Logo>
      <NavLinks isOpen={isOpen}>
        <NavLink to="/domains">Domains</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/join">Community</NavLink>
        <NavLink to="/contributors">Contributors</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        <ToggleButton onClick={toggleSidebar}>☰ Sidebar</ToggleButton>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
