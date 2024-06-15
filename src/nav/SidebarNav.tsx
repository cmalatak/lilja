import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import menuIcon from "../assets/icons8-menu-rounded-100.png";
import closeIcon from "../assets/closeIcon.png";
import MockNavData from "./MockNavData.ts";
import upCaret from "../assets/white-caret-up.png";
import downCaret from "../assets/white-caret-down.png";

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Hamburger = styled.img`
  width: 32px;
`;

const Link = styled.a`
  color: white;
  @media (max-width: 1024px) {
    margin: 10px 0;
    font-size: 18px;
  }
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

const SubNav = (menuItem) => {
  return (
    <Button
      onClick={handleMealsClick}
      //   href={window.location.origin + menuItem[1]["default"]}
      key={menuItem[0]}
    >
      {menuItem[0]}
      <Hamburger src={upCaret} />
    </Button>
  );
};

const getSubNavItems = (object: object) => {};

const SidebarNav = () => {
  const [sidebarClass, setSidebarClass] = useState("is-closed");
  const [mealSubNavVisible, setMealSubNavVisible] = useState(false);
  const [cusineSubNavVisible, setCusineSubNavVisible] = useState(false);
  const [seasonSubNavVisible, setSeasonSubNavVisible] = useState(false);
  const sidebarNav = useRef<any>(null);

  const subNavVisibilityManager = {
    Meals: { visible: mealSubNavVisible, set: setMealSubNavVisible },
    Cuisine: { visible: cusineSubNavVisible, set: setCusineSubNavVisible },
    Seasonal: { visible: seasonSubNavVisible, set: setSeasonSubNavVisible },
  };

  const handleMealsClick = () => {
    setMealSubNavVisible(!mealSubNavVisible);
  };
  const handleCusineClick = () => {
    setCusineSubNavVisible(!cusineSubNavVisible);
  };

  const handleSeasonalClick = () => {
    setSeasonSubNavVisible(!seasonSubNavVisible);
  };

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
        setMealSubNavVisible(false);
        setCusineSubNavVisible(false);
        setSeasonSubNavVisible(false);
      }
    };
    document.body.addEventListener("mousedown", closeHandler);
    return () => document.body.removeEventListener("mousedown", closeHandler);
  }, []);

  const MenuItems = Object.entries(MockNavData);

  return (
    <>
      <Button onClick={handleHamburgerClick}>
        <Hamburger src={menuIcon} />
      </Button>
      <Sidebar className={sidebarClass} ref={sidebarNav}>
        <Button onClick={closeSidebar}>
          <Hamburger src={closeIcon} />
        </Button>
        {MenuItems.map((menuItem: any) => {
          // let handleSubNavClick = () = {
          //     console.log("click!")
          // }

          if (menuItem[0] === "Meals") {
            let handleSubNavClick = handleMealsClick;
          } else if (menuItem[0] === "Cuisine") {
            let handleSubNavClick = handleCusineClick;
          } else if (menuItem[0] === "Seasonal") {
            let handleSubNavClick = handleSeasonalClick;
          }

          return (
            <Button
              onClick={handleMealsClick}
              //   href={window.location.origin + menuItem[1]["default"]}
              key={menuItem[0]}
            >
              {menuItem[0]}
              <Hamburger src={upCaret} />
            </Button>
          );
        })}
      </Sidebar>
    </>
  );
};

export default SidebarNav;
