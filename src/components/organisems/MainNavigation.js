import React from "react";
import {Menu, MenuCallToAction, MenuLink} from "../molecules/Menu";


const MainNavigation = ({children}) => {
  return (
    <Menu logo={children}>
      <MenuLink to="/about">About</MenuLink>
      <MenuCallToAction href="https://cfp.rustfest.eu">
        Submit a talk
      </MenuCallToAction>
    </Menu>
  );
};

export default MainNavigation;
