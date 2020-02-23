import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import {Link} from "gatsby";

const MENU_BREAKPOINT = '640px';

const MenuContainer = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
 
  .no-js &, .js &.open {
    background: #211a74;
  }
  
  @media (min-width: ${MENU_BREAKPOINT}) {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    
    .js &.open {
      background: transparent;
    }
  }
`;

const MenuToggleItem = styled.li`
  display: flex;
  margin-right: auto;
  padding: 1rem;
`;

const MenuToggle = styled.button`
  display: inline-block;
  margin-left: auto;
  width: 2rem;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  
  & div, &:before, &:after {
    display: block;
    content: " ";
    height: 5px;
    border-radius: 3px;
    background: #fff;
    margin: 7px 0;
   
    transition: all .2s ease-in-out;
  }
  
  .open &:before {
    transform: translateY(12px) rotate(135deg);
  }
  
  .open &:after {
    transform: translateY(-12px) rotate(-135deg);
  }
  
  .open & div {
    transform: scale(0);
  }
  
  .no-js & {
    display: none;
  }
  
  @media (min-width: ${MENU_BREAKPOINT}) {
    display: none;
  }
`;

const MenuItem = styled.li`
  color: #fff;
  
  & + & {
    border-top: 1px solid #fff;
  }
  
  .js ul:not(.open) & {
    display: none;
  }
  
  @media (min-width: ${MENU_BREAKPOINT}) {
    & + & {
      border-top: none;
    }
    
    .js ul &,
    .js ul:not(.open) & {
      display: inline-block;
    }
  }
`;

export const MenuLink = styled(Link)`
  display: block;
  padding: 1rem 0.5rem;
  cursor: pointer;
  
  &, &:visited {
    color: inherit;
    text-decoration: none;
  }
   
  &:hover, &:focus {
    text-decoration: underline;
  }
`;

export const MenuCallToAction = styled(MenuLink)`
  display: block;
  background-color:#ff8400;
  
  &:hover, &:focus { 
    background-color: #ff4f00;
    text-decoration: none;
  }
  
  @media (min-width: ${MENU_BREAKPOINT}) {
    padding: 0.6rem 0.5rem;
    margin: 0.4rem 0;
    border-radius: 20px;
  }
`;

export const Menu = (props) => {
  const { children, logo, ...rest } = props;

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen, setMenuOpen]);

  // Wrap all Menu links in a list item for styling.
  const listChildren = children.map(child => <MenuItem>{child}</MenuItem>);

  return (
    <MenuContainer {...rest}>
      <MenuList className={menuOpen ? 'open' : null}>
        <MenuToggleItem>
          {logo}
          <MenuToggle ariaLabel={"Open Menu"} onClick={toggleMenu}>
            <div>&nbsp;</div>
          </MenuToggle>
        </MenuToggleItem>
        {listChildren}
      </MenuList>
    </MenuContainer>
  );
};
