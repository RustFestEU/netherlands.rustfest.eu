import React from 'react';
import styled from 'styled-components';
import {
  Behance,
  Discord,
  GitHub,
  Gitlab,
  LinkedIn,
  Medium,
  Twitter,
  Website,
} from '../atoms/icons';

const Link = styled.a`
  color: inherit;
`;

export default function PersonIcons(props) {
  const {
    website,
    twitter,
    linkedin,
    github,
    gitlab,
    behance,
    medium,
    discord,
    ...rest
  } = props;
  return (
    <div {...rest}>
      {website ? (
        <Link href={website} title={`View ${props.name}'s website`}>
          <Website />
        </Link>
      ) : null}
      {twitter ? (
        <Link href={twitter} title={`View ${props.name}'s twitter`}>
          <Twitter />
        </Link>
      ) : null}
      {linkedin ? (
        <Link href={linkedin} title={`View ${props.name}'s linkedin`}>
          <LinkedIn />
        </Link>
      ) : null}
      {github ? (
        <Link href={github} title={`View ${props.name}'s github`}>
          <GitHub />
        </Link>
      ) : null}
      {gitlab ? (
        <Link href={gitlab} title={`View ${props.name}'s gitlab`}>
          <Gitlab />
        </Link>
      ) : null}
      {behance ? (
        <Link href={behance} title={`View ${props.name}'s behance`}>
          <Behance />
        </Link>
      ) : null}
      {medium ? (
        <Link href={medium} title={`View ${props.name}'s medium`}>
          <Medium />
        </Link>
      ) : null}
      {discord ? (
        <Link href={discord} title={`View ${props.name}'s discord`}>
          <Discord />
        </Link>
      ) : null}
    </div>
  );
}
