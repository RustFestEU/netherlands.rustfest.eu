import Image from 'gatsby-image';
import styled from 'styled-components';

/**
 * Provides a background image for elements using gatsby-image.
 *
 * Accepts the same arguments as gatsby-image and should be put as first element
 * in the container for which it should be a background-image.
 */
const BgImage = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || 'auto'};

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
`;

export default BgImage;
