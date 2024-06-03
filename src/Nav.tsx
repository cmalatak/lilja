import React, { ReactHTMLElement } from "react";
import "./Nav.css";
import logo from "./Lilja.png";

// Setup styled-components in this repo

// const MobileNav = styled.div``

// const DesktopNav = styled.div``

// const Nav Container = styled.div`
//  display: grid;
//  width: 100%;
//`

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
