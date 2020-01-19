import React from "react";
import Link from "../atoms/Link";

export default function Header({ siteTitle, isFront }) {
  const Title = isFront ? "h1" : "div";

  return (
    <div className={"mb-5"} style={{background: "rgba(200,216,217,.3)"}}>
      <div className={'max-w-5xl p-4 flex items-center mx-auto'}>
        <Link to={"/"} className={"no-underline"}>
          <Title className={"text-black bold text-4xl leading-none"}>{siteTitle}</Title>
        </Link>
        <div className={"ml-auto"}>
          <Link className={"focus:underline hover:underline"} to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}