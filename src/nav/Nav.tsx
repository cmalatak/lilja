import React, { ReactHTMLElement } from "react";
import styled from "styled-components";
import "./Nav.css";
import logo from "./Lilja.png";

const MobileNav = styled.div`
  // display: flex;
  // width: 96%;
  // justify-content: space-between;
  // align-items: center;
  grid-column-start: 1;
`;

const Hamburger = styled.p`
  grid-column-start: 1;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  grid-column-start: 3;
  @media (min-width: 768px) {
    grid-column-start: 2;
  }
`;

const DesktopNav = styled.div``;

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
`;

const Nav = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <>
      <nav className="mobile-nav">
        <p>|||</p>
        <img src={logo} className="App-logo" alt="logo" />
      </nav>

      {/* <nav className="desktop-nav"><p>Home</p><p>Recipes</p></nav> */}
    </>
  );
  // return (
  //   <>
  //     {isMobile ? (
  //       <div>|||</div>
  //     ) : (
  //       <div>
  //         <p>Home</p>
  //         <p>Recipes</p>
  //       </div>
  //     )}
  //   </>
  // );
};

export default Nav;
