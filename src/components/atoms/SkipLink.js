import styled from 'styled-components';

const SkipLink = styled.a`
  // Hide.
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  height: 1px;

  // Visible style.
  background: #064771;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  color: white;
  padding: 3px 20px 8px;
  text-decoration: none;
  border-radius: 0px 0px 10px 10px;

  // Show when focused.
  &:focus {
    position: static !important;
    clip: auto;
    overflow: visible;
    height: auto;
  }
`;

export default SkipLink;
