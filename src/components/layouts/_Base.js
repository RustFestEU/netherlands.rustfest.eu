/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useMemo, useState } from 'react';
import GlobalStyle from '../atoms/GlobalStyle';
import { Helmet } from 'react-helmet';

const Base = ({ children }) => {
  // Mark the document as having JavaScript support. useMemo will run once
  // during page hydration at which point window will be defined. Window is not
  // defined when Gatsby statically builds the pages causing a false value.
  const jsSupport = useMemo(() => typeof window !== 'undefined', []);

  return (
    <>
      <Helmet htmlAttributes={{ class: jsSupport ? 'js' : 'no-js' }} />
      <GlobalStyle />
      {children}
    </>
  );
};

export default Base;
