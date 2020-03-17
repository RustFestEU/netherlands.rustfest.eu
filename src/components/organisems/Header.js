import React from 'react';
import { Menu, MenuLink } from '../molecules/Menu';
import Logo from '../atoms/Logo';
import HeaderTitle from '../atoms/HeaderTitle';
import { Link } from 'gatsby';

/**
 * Provides the main header for the website.
 *
 * Renders the logo and site title with the responsive menu.
 *
 * @param {string} siteTitle
 *   The title of the site that should be displayed.
 * @param {string} titleAs
 *   The element to use for displaying the site title. Can be used to display
 *   the site title as h1 on the homepage (default: 'div')
 * @param ...rest
 *   Other properties that will be passed on to the Menu container.
 * @return {ReactElement}
 *   The header element.
 */
const Header = ({ siteTitle, titleAs = 'div', ...rest }) => {
  const TitleAndLogo = (
    <Link to={'/'}>
      <Logo width={80} height={80} />
      <HeaderTitle as={titleAs}>{siteTitle}</HeaderTitle>
    </Link>
  );

  return (
    <Menu logo={TitleAndLogo} {...rest}>
      <MenuLink to="/about">About</MenuLink>
    </Menu>
  );
};

export default Header;
