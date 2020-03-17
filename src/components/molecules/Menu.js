import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { breakpoints } from '../tokens';

const { MENU_BREAKPOINT } = breakpoints;

/**
 * The actual list element that wraps the menu.
 *
 * All children of this menu should be li elements.
 */
const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;

  .no-js &,
  .js &.open {
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

/**
 * An item that wraps the hamburger toggle and site logo.
 *
 * This ensures that those items are properly displayed no matter the state of
 * the menu.
 */
const MenuToggleItem = styled.li`
  display: flex;
  margin-right: auto;
  padding: 1rem;
`;

/**
 * The hamburger icon.
 *
 * This determines the visibility of the menu on mobile when JavaScript is
 * enabled.
 */
const MenuToggle = styled.button`
  display: inline-block;
  margin-left: auto;
  width: 2rem;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;

  & div,
  &:before,
  &:after {
    display: block;
    content: ' ';
    height: 5px;
    border-radius: 3px;
    background: #fff;
    margin: 7px 0;

    transition: all 0.2s ease-in-out;
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

/**
 * Internal wrapper for the menu links.
 */
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

/**
 * Provides a default menu link with a hover style.
 *
 * Wraps the Link element exported by Gatsby.
 */
export const MenuLink = styled(Link)`
  display: block;
  padding: 1rem 0.5rem;
  cursor: pointer;

  &,
  &:visited {
    color: inherit;
    text-decoration: none;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

/**
 * Provides a menu link styled as call to action on mobile and desktop.
 *
 * Wraps the Link element exported by Gatsby. Inherits styles from MenuLink.
 * In case a call to action links to an external site the "as" attribute should
 * be used.
 */
export const MenuCallToAction = styled(MenuLink)`
  display: block;
  background-color: #ff8400;

  &:hover,
  &:focus {
    background-color: #ff4f00;
    text-decoration: none;
  }

  @media (min-width: ${MENU_BREAKPOINT}) {
    padding: 0.4rem 0.6rem;
    margin: 0.4rem 0;
    border-radius: 4px;
  }
`;

/**
 * Provides a dynamic Menu element for mobile and desktop.
 *
 * This element has no background color so that it may be controlled by the
 * parent.
 *
 * On mobile with JavaScript disabled, this will always show the menu as a list
 * with each menu item a clickable element. On mobile with JavaScript enabled
 * the list will be hidden behind a hamburger menu.
 *
 * On desktop will display a horizontal menu.
 *
 * To work properly with the mobile hamburger menu this element is also passed
 * the site logo and title and takes care of it rendering.
 *
 * @param children
 *   A list of links that should be put in the menu. Each element will be
 *   wrapped in a MenuItem by the Menu element.
 * @param logo
 *   An element that will be rendered as logo and site title.
 * @param ...rest
 *   Any other parameters will be passed on to the container element.
 * @return {ReactElement}
 *   The created menu.
 */
export const Menu = ({ children, logo, ...rest }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [
    menuOpen,
    setMenuOpen,
  ]);

  // Wrap all Menu links in a list item for styling.
  // Normally using the index of a map as key is bad but we assume the list of
  // links in the menu never changes.
  const listChildren = (Array.isArray(children)
    ? children
    : [children]
  ).map((child, i) => <MenuItem key={i}>{child}</MenuItem>);

  return (
    <nav {...rest}>
      <MenuList className={menuOpen ? 'open' : null}>
        <MenuToggleItem>
          {logo}
          <MenuToggle ariaLabel={'Open Menu'} onClick={toggleMenu}>
            <div>&nbsp;</div>
          </MenuToggle>
        </MenuToggleItem>
        {listChildren}
      </MenuList>
    </nav>
  );
};
