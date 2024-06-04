import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "./Nav.css";
import logo from "./Lilja.png";

// const MobileNav = styled.div`
//   // display: flex;
//   // width: 96%;
//   // justify-content: space-between;
//   // align-items: center;
//   grid-column-start: 1;
// `;

// const Hamburger = styled.p`
//   grid-column-start: 1;
//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

const Logo = styled.img`
  grid-column-start: 3;
  @media (min-width: 768px) {
    grid-column-start: 2;
  }
`;

const Link = styled.a`
  color: white;
  @media (max-width: 1024px) {
    margin: 10px 0;
    font-size: 18px;
  }
`;

const LogoLink = styled(Link)`
  justify-self: center;
`;

// const DesktopNav = styled.div``;

// const NavContainer = styled.div`
//   display: grid;
//   grid-template-columns: 33% 33% 33%;
// `;

const Sidebar = styled.div`
  background-color: #ffffff;
  position: absolute;
  left: 0;
  top: 0;
  width: 180px;
  height: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: 0.6s;

  &.is-closed {
    transform: translateX(-16em);
  }
`;

const Nav = () => {
  const [sidebarClass, setSidebarClass] = useState("is-closed");
  const sidebarNav = useRef<any>(null);

  const handleHamburgerClick = () => {
    setSidebarClass("");
  };

  const closeSidebar = () => {
    setSidebarClass("is-closed");
  };

  useEffect(() => {
    let closeHandler = (e: MouseEvent) => {
      if (!sidebarNav?.current?.contains(e.target)) {
        closeSidebar();
      }
    };

    document.body.addEventListener("mousedown", closeHandler);

    return () => document.body.removeEventListener("mousedown", closeHandler);
  }, []);

  return (
    <>
      <nav className="mobile-nav">
        <button onClick={handleHamburgerClick}>|||</button>
        <Sidebar className={sidebarClass} ref={sidebarNav}>
          <button onClick={closeSidebar}>close</button>
          <a href={window.location.origin + "/recipe"}>Recipe</a>
        </Sidebar>

        <LogoLink href={window.location.origin}>
          <Logo src={logo} className="App-logo" alt="logo" />
        </LogoLink>
      </nav>
    </>
  );
};

export default Nav;
