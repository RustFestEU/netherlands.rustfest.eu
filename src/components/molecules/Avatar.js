import React from 'react';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';

const Img = styled(GatsbyImage)`
  display: inline-block;
  border-radius: 100%;
`;

export default function Avatar(props) {
  return <Img {...props} />;
}
