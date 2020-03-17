import React from 'react';
import styled from 'styled-components';
import Container from '../atoms/Container';

const FooterWrapper = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  background-color: rgb(240, 240, 240);
`;

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FlexContainer>
        <span>© Copyright Stichting Rust Nederland</span>
        <a
          href={'https://blog.rustfest.eu/past_events/'}
          title={'View past events'}
        >
          Past Events
        </a>
      </FlexContainer>
    </FooterWrapper>
  );
}
