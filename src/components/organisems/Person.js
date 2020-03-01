import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import AvatarBase from '../molecules/Avatar';
import PersonIcons from '../molecules/PersonIcons';
import { breakpoints } from '../tokens';

const { TEAM_GRID_2_BREAKPOINT } = breakpoints;

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
  background: white;

  &:focus {
    outline: 0;
  }
`;

const PersonWrapper = styled.div`
  text-align: center;
  cursor: pointer;

  & ~ & {
    margin-top: 2rem;
  }

  @media (min-width: ${TEAM_GRID_2_BREAKPOINT}) {
    & ~ & {
      margin-top: 0;
    }
  }
`;

const ModalAvatar = styled(AvatarBase)`
  flex: none;
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
  align-self: center;

  @media (min-width: 30rem) {
    width: 10rem;
    height: 10rem;
  }
`;

const PersonAvatar = styled(AvatarBase)`
  width: 100%;
  max-width: 14rem;
  height: auto;
  max-height: 14rem;
  border: 4px solid white;
`;

const PersonName = styled.p`
  font-size: 1.25rem;
`;

const BlackIcons = styled(PersonIcons)`
  color: #1a202c;
`;

const GrayIcons = styled(PersonIcons)`
  color: #4a5568;
`;

const divSrOnly = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export default function Person(props) {
  const [hasJs, enableJs] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => enableJs(true), [enableJs]);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  // The attribute check ensures that the modal doesn't open for links.
  const showOnEnter = e =>
    e.keyCode === 13 && e.target.getAttribute('data-modalcontrol') && show();
  const hideOnEsc = e => e.keyCode === 27 && hide();

  const modalRef = useRef();
  useEffect(() => {
    if (visible && modalRef.current) {
      modalRef.current.focus();
    }
  });

  // Show non-pop-over description only for screenreaders.
  const Desc = hasJs ? divSrOnly : 'div';

  const modal = visible ? (
    <Modal onClick={hide}>
      <ModalContent
        ref={modalRef}
        tabIndex={0}
        onKeyUp={hideOnEsc}
        onClick={e => e.stopPropagation()}
      >
        <ModalAvatar
          fluid={props.image.childImageSharp.fluid}
          alt={props.name}
        />
        <div>
          <PersonName>{props.name}</PersonName>
          <div dangerouslySetInnerHTML={{ __html: props.children }} />
          {<BlackIcons {...props} />}
        </div>
      </ModalContent>
    </Modal>
  ) : null;

  return (
    <>
      {modal}
      <PersonWrapper
        data-modalcontrol={true}
        tabIndex={0}
        onKeyUp={showOnEnter}
        onClick={show}
      >
        <PersonAvatar
          fluid={props.image.childImageSharp.fluid}
          alt={props.name}
        />
        <PersonName>{props.name}</PersonName>
        <Desc dangerouslySetInnerHTML={{ __html: props.children }} />
        {<GrayIcons onClick={e => e.stopPropagation()} {...props} />}
      </PersonWrapper>
    </>
  );
}
