import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      {/* Logo */}
      <Link id="logo" to="/">
        Capture
      </Link>

      {/* Navigation List */}
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "" }}
            transition={{ duration: 0.75 }}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "" }}
            transition={{ duration: 0.75 }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "" }}
            transition={{ duration: 0.75 }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

// styled Components

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 100;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #e7e7e7;
    }
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-family: "Lobster", sans-serif;
    font-size: 1.5rem;
  }
  li {
    font-size: 2.3vh !important;
    padding-left: 10rem;
    /* we will add a underline to the li element, therefore, used position : relative*/
    position: relative;
    margin-right: 1rem;
  }

  /* Media queries */
  @media (max-width: 1700px) {
    li {
      font-size: 2vh !important;
    }
  }

  @media (max-width: 1500px) {
    padding: 1rem 5rem;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    padding: 2rem 2rem;
    #logo {
      margin-bottom: 2rem;
    }
    ul {
      width: 100%;
      justify-content: space-around;
    }
    li {
      padding: 0;
    }
  }
`;

const Line = styled(motion.div)`
  position: absolute;
  height: 0.3rem;
  /* width will be added during rendering */
  /* width: 50%; */
  bottom: -50%;
  left: 60%;
  background: #23d997;

  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
