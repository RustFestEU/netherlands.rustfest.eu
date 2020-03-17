import styled from 'styled-components';

import { breakpoints } from '../tokens';
const { TITLE_BREAKPOINT } = breakpoints;

/**
 * The title that should be used in the header.
 *
 * Will automatically hide itself on smaller screens while still being readable
 * by screen readers.
 */
const HeaderTitle = styled.div`
  // Normal style
  display: inline-block;
  vertical-align: middle;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 15px 0 1rem;
  color: #fff;

  // Visually hidden on mobile
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */

  // Reset visually hidden on desktop
  @media (min-width: ${TITLE_BREAKPOINT}) {
    position: initial;
    width: auto;
    height: auto;
    overflow: initial;
    clip: unset;
    white-space: initial;
  }
`;

export default HeaderTitle;
