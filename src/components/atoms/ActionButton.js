import React from "react";

import styled from "styled-components";

const Button = styled.a`
    background-color:#ff8400;
    color: #fff;
    border-radius: 20px;
    padding: 0.6em 1em;
    text-decoration:none;
    max-height: 2.4em;
    
    &:hover { 
      background-color: #ff4f00;
    }
`;

export default function ActionButton({href, text}) {
    return (
        <Button href={href}>{text}</Button>
        );
}
