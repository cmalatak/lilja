import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import logo from "./Lilja.png";
import menuIcon from "../assets/icons8-menu-rounded-100.png";
import closeIcon from "../assets/closeIcon.png";
import MockNavData from "./MockNavData.ts";

const NavBanner = styled.nav`
  margin-top: 16px;
  display: flex;
  width: 96%;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Hamburger = styled.img`
  width: 32px;
`;

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

const Sidebar = styled.div`
  background-color: #6a041d;
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

  const MenuItems = Object.entries(MockNavData);

  return (
    <>
      <NavBanner>
        <Button onClick={handleHamburgerClick}>
          <Hamburger src={menuIcon} />
        </Button>
        <Sidebar className={sidebarClass} ref={sidebarNav}>
          <Button onClick={closeSidebar}>
            <Hamburger src={closeIcon} />
          </Button>
          {MenuItems.map((menuItem: any) => {
            return (
              <Link
                href={window.location.origin + menuItem[1]["default"]}
                key={menuItem[0]}
              >
                {menuItem[0]}
              </Link>
            );
          })}
        </Sidebar>

        <LogoLink href={window.location.origin}>
          <Logo src={logo} className="App-logo" alt="logo" />
        </LogoLink>
      </NavBanner>
    </>
  );
};

export default Nav;
