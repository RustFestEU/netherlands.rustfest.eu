import React, {useEffect, useState} from "react";
import Avatar from "../molecules/Avatar";
import {Gitlab, Twitter, GitHub, LinkedIn, Website, Behance, Medium, Discord } from '../atoms/icons';

export default function Person(props) {
  const [hasJs, enableJs] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => enableJs(true), [enableJs]);

  const icons = color => {
    const classes = color + " fill-current  w-5 h-5 inline-block mr-1";
    return (<>
      {props.website ?
        <a href={props.website} title={`View ${props.name}'s website`}>
          <Website className={classes}/>
        </a>
        : null}
      {props.twitter ?
        <a href={props.twitter} title={`View ${props.name}'s twitter`}>
          <Twitter className={classes}/>
        </a>
        : null}
      {props.linkedin ?
        <a href={props.linkedin} title={`View ${props.name}'s linkedin`}>
          <LinkedIn className={classes}/>
        </a>
        : null}
      {props.github ?
        <a href={props.github} title={`View ${props.name}'s github`}>
          <GitHub className={classes}/>
        </a>
        : null}
      {props.gitlab ?
        <a href={props.gitlab} title={`View ${props.name}'s gitlab`}>
          <Gitlab className={classes}/>
        </a>
        : null}
      {props.behance ?
        <a href={props.behance} title={`View ${props.name}'s behance`}>
          <Behance className={classes}/>
        </a>
        : null}
      {props.medium ?
        <a href={props.medium} title={`View ${props.name}'s medium`}>
          <Medium className={classes}/>
        </a>
        : null}
      {props.discord ?
        <a href={props.discord} title={`View ${props.name}'s discord`}>
          <Discord className={classes}/>
        </a>
        : null}
    </>);
  };

  return (
    <>
      <div className={visible ? "flex fixed inset-0 h-screen z-10" : "hidden"} style={{background: 'rgba(0,0,0,0.2)'}} onClick={() => setVisible(false)}>
        <div onClick={e => e.stopPropagation()} className={"m-auto bg-white max-w-lg p-4 rounded flex flex-row"}>
          <Avatar fluid={props.image.childImageSharp.fluid} alt={props.name} className={'flex-none w-40 h-40 mr-4 self-center'}/>
          <div>
            <div className={"text-xl"}>{props.name}</div>
            <div dangerouslySetInnerHTML={{__html: props.children}} />
            {icons("text-black")}
          </div>
        </div>
      </div>
      <div onClick={() => setVisible(true)} className={"text-center cursor-pointer"}>
        <Avatar fluid={props.image.childImageSharp.fluid} alt={props.name} className={"w-56 h-56 border-4 border-white"}/>
        <div className={"text-xl"}>{props.name}</div>
        <div className={hasJs ? "sr-only" : ""} dangerouslySetInnerHTML={{__html: props.children}} />
        {icons("text-gray-700")}
      </div>
    </>
  );
}
