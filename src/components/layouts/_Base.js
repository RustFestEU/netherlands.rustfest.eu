/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect, useState} from 'react';
import GlobalStyle from "../atoms/GlobalStyle";
import {Helmet} from "react-helmet";

const Base = ({ children }) => {
  // Mark the document as having JavaScript support. This runs in a useEffect so
  // the static pages are marked as `no-js` and only the first time React
  // renders the page is marked as having JavaScript support.
  const [jsSupport, setJsSupport] = useState(false);
  useEffect(() => {
    if (!jsSupport) {
      setJsSupport(true);
    }
  }, [setJsSupport]);

  return (
    <>
      <Helmet
        htmlAttributes={{class: jsSupport ? 'js' : 'no-js'}}
      />
      <GlobalStyle />
      {children}
    </>
  );
};

export default Base;
