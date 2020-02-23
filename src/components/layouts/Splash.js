/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Base from "./_Base";

const Splash = ({ children, ...rest }) => {
  return (
    <Base {...rest}>
      {children}
    </Base>
  );
};

export default Splash;
