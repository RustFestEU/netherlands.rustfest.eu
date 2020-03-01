import React from 'react';
import styled from 'styled-components';
import Container from '../atoms/Container';

const FooterWrapper = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  background-color: rgb(240, 240, 240);
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>© Copyright Stichting Rust Nederland</Container>
    </FooterWrapper>
  );
}
