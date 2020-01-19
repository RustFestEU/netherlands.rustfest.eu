import React from "react";
import Img from 'gatsby-image';

export default function Avatar(props) {
  return <Img {...props} className={props.className + ' rounded-full inline-block'} />
}
