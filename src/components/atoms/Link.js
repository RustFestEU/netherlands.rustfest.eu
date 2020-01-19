import React from "react";
import {Link as GatsbyLink} from "gatsby";

export default function Link(props) {
  return <GatsbyLink {...props} className={"underlined text-blue " + props.className} />
}
