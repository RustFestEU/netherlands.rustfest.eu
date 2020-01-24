import React from "react";

import styled from "styled-components";

const Button = styled.div`
    background-color:#ff8400;
    color: #fff;
    border-radius: 20px;
    padding:10px;
    text-decoration:none;
    width:150px;
`;

export default function ActionButton({ href = "https://cfp.rustfest.eu"}, {text = "Submit a talk"}) {
    return (
    <a href={href}>
        <Button>{text}</Button>
    </a>);
}
