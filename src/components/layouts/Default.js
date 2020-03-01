/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import styled from 'styled-components';
import Header from '../organisems/Header';
import Container from '../atoms/Container';
import Base from './_Base';

const BlueHeader = styled(Header)`
  background-color: #211a74;
`;

/**
 * Renders the base layout with a blue header in the normal page flow.
 */
const Default = ({ children, ...rest }) => {
  return (
    <Base Header={BlueHeader} {...rest}>
      <Container>{children}</Container>
    </Base>
  );
};

export default Default;
