/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import styled from 'styled-components';
import Base from './_Base';
import Header from '../organisems/Header';

const OverlaidHeader = styled(Header)`
  // On devices where we can expand/collapse our mobile menu use an overlay.
  .js & {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  // On devices where that wouldn't be possible, just default to the normal
  // menu.
  .no-js {
    background-color: #211a74;
  }
`;

/**
 * Renders the base layout with a transparent header overlaying the content.
 */
const Splash = ({ children, ...rest }) => {
  return (
    <Base Header={OverlaidHeader} {...rest}>
      {children}
    </Base>
  );
};

export default Splash;
