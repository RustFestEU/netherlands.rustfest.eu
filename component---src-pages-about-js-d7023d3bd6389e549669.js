(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3XHS":function(A,e,a){"use strict";a.r(e);a("91GP");var t=a("laMi"),i=a("q1tI"),n=a.n(i),c=a("vOnD"),d=a("EZK5"),o=a("9CUm"),s=(a("f3/d"),a("9eSz")),r=a.n(s),E=Object(c.b)(r.a).withConfig({displayName:"Avatar",componentId:"n4dbn1-0"})(["display:inline-block;border-radius:100%;"]),h=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("7zoL"));var l=c.b.a.withConfig({displayName:"PersonIcons__Link",componentId:"sc-1x7ycyt-0"})(["color:inherit;"]);function g(A){var e=A.website,a=A.twitter,t=A.linkedin,i=A.github,c=A.gitlab,d=A.behance,o=A.medium,s=A.discord,r=function(A,e){if(null==A)return{};var a,t,i={},n=Object.keys(A);for(t=0;t<n.length;t++)a=n[t],e.indexOf(a)>=0||(i[a]=A[a]);return i}(A,["website","twitter","linkedin","github","gitlab","behance","medium","discord"]);return n.a.createElement("div",r,e?n.a.createElement(l,{href:e,title:"View "+A.name+"'s website"},n.a.createElement(h.h,null)):null,a?n.a.createElement(l,{href:a,title:"View "+A.name+"'s twitter"},n.a.createElement(h.g,null)):null,t?n.a.createElement(l,{href:t,title:"View "+A.name+"'s linkedin"},n.a.createElement(h.e,null)):null,i?n.a.createElement(l,{href:i,title:"View "+A.name+"'s github"},n.a.createElement(h.c,null)):null,c?n.a.createElement(l,{href:c,title:"View "+A.name+"'s gitlab"},n.a.createElement(h.d,null)):null,d?n.a.createElement(l,{href:d,title:"View "+A.name+"'s behance"},n.a.createElement(h.a,null)):null,o?n.a.createElement(l,{href:o,title:"View "+A.name+"'s medium"},n.a.createElement(h.f,null)):null,s?n.a.createElement(l,{href:s,title:"View "+A.name+"'s discord"},n.a.createElement(h.b,null)):null)}var m=a("+4qi"),b=m.a.TEAM_GRID_2_BREAKPOINT,B=c.b.div.withConfig({displayName:"Person__Modal",componentId:"sc-11gpckq-0"})(["position:fixed;top:0;bottom:0;left:0;right:0;z-index:10;display:flex;flex-direction:row;align-items:center;background:rgba(0,0,0,0.2);"]),w=c.b.div.withConfig({displayName:"Person__ModalContent",componentId:"sc-11gpckq-1"})(["display:flex;flex-direction:row;max-width:960px;margin:0 auto;padding:1rem;background:white;&:focus{outline:0;}"]),j=c.b.div.withConfig({displayName:"Person__PersonWrapper",componentId:"sc-11gpckq-2"})(["text-align:center;cursor:pointer;& ~ &{margin-top:2rem;}@media (min-width:","){& ~ &{margin-top:0;}}"],b),p=Object(c.b)(E).withConfig({displayName:"Person__ModalAvatar",componentId:"sc-11gpckq-3"})(["flex:none;width:5rem;height:5rem;margin-right:1rem;align-self:center;@media (min-width:30rem){width:10rem;height:10rem;}"]),Q=Object(c.b)(E).withConfig({displayName:"Person__PersonAvatar",componentId:"sc-11gpckq-4"})(["width:100%;max-width:14rem;height:auto;max-height:14rem;border:4px solid white;"]),f=c.b.p.withConfig({displayName:"Person__PersonName",componentId:"sc-11gpckq-5"})(["font-size:1.25rem;"]),u=Object(c.b)(g).withConfig({displayName:"Person__BlackIcons",componentId:"sc-11gpckq-6"})(["color:#1a202c;"]),k=Object(c.b)(g).withConfig({displayName:"Person__GrayIcons",componentId:"sc-11gpckq-7"})(["color:#4a5568;"]),x=c.b.div.withConfig({displayName:"Person__divSrOnly",componentId:"sc-11gpckq-8"})(["position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;"]);function R(A){var e=Object(i.useState)(!1),a=e[0],t=e[1],c=Object(i.useState)(!1),d=c[0],o=c[1];Object(i.useEffect)((function(){return t(!0)}),[t]);var s=function(){return o(!0)},r=function(){return o(!1)},E=Object(i.useRef)();Object(i.useEffect)((function(){d&&E.current&&E.current.focus()}));var h=a?x:"div",l=d?n.a.createElement(B,{onClick:r},n.a.createElement(w,{ref:E,tabIndex:0,onKeyUp:function(A){return 27===A.keyCode&&r()},onClick:function(A){return A.stopPropagation()}},n.a.createElement(p,{fluid:A.image.childImageSharp.fluid,alt:A.name}),n.a.createElement("div",null,n.a.createElement(f,null,A.name),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:A.children}}),n.a.createElement(u,A)))):null;return n.a.createElement(n.a.Fragment,null,l,n.a.createElement(j,{"data-modalcontrol":!0,tabIndex:0,onKeyUp:function(A){return 13===A.keyCode&&A.target.getAttribute("data-modalcontrol")&&s()},onClick:s},n.a.createElement(Q,{fluid:A.image.childImageSharp.fluid,alt:A.name}),n.a.createElement(f,null,A.name),n.a.createElement(h,{dangerouslySetInnerHTML:{__html:A.children}}),n.a.createElement(k,Object.assign({onClick:function(A){return A.stopPropagation()}},A))))}var N=a("Wbzz");a.d(e,"default",(function(){return I}));var Y=m.a.TEAM_GRID_2_BREAKPOINT,C=m.a.TEAM_GRID_3_BREAKPOINT,D=c.b.div.withConfig({displayName:"about__TeamGrid",componentId:"kudfyh-0"})(["@media (min-width:","){display:grid;grid-template-columns:repeat(2,1fr);column-gap:1rem;row-gap:3rem;}@media (min-width:","){grid-template-columns:repeat(3,1fr);}"],Y,C);function I(A){var e=t.data.allTeammembers.nodes.map((function(A){return n.a.createElement(R,Object.assign({key:A.id},A.frontmatter),A.about)}));return n.a.createElement(d.a,null,n.a.createElement(o.a,{title:"About"}),n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"RustFest is Europe’s Rust-dedicated conference. The next edition of RustFest will take place as a two-day event in the Netherlands."),n.a.createElement("p",null,"We care about diversity and accessibility at this conference – please take a look at our ",n.a.createElement(N.Link,{to:"/code-of-conduct"},"Code of Conduct")," ","and ",n.a.createElement(N.Link,{to:"/accessibility"},"Accessibility Statement"),"."),n.a.createElement("h2",null,"Team"),n.a.createElement(D,null,e))}},laMi:function(A){A.exports=JSON.parse('{"data":{"allTeammembers":{"nodes":[{"id":"6a5bc94b-068c-54d7-8729-b49a60fd2721","about":"<p>Istvan Szmozsanszky (or Flaki, for short) is a JavaScript engineer, trainer &#x26;\\nMozilla Tech Speaker. Flaki works with Mozilla\'s DevRel team on promoting the\\nopen web platform &#x26; making it accessible to all. He loves JavaScript internals\\n&#x26; is often found playing (quite literally) with microcontrollers.</p>","frontmatter":{"name":"István Szmozsánszky","image":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEz0lEQVQ4ywHEBDv7AKKzt+7y8/////39/f///9jl63iEkXh4c4GDeoyMhoKOmHJ+jnhxdVBERDo2N0A/QTw/QFBJUIlsj7yIpQCbrrLd5+b////9/f3///+3vLtyd3ZvbmmPhXmbjYCIfnCemY2kp6OGhoFYV1ZAQUM/Q0ZLQ0l4XnireIwAjJyd09zc////////19jUloRya1lLVkQ4aE9Cm4Jxl4FzeGhbdGpgnpiOsqubfHhwRkhNTERLaFFhjF9kAKCloNrg3v////j39dbBq+C9n9+5l8+kg7iSd76klb+lmGpaUFNLQ1xSSp2Pf7Soln93c1lMTmZPVXVMSwCxsqqhm5C3tKzfyLPguprryKvoxKTmv6DXs5zNqZSigm5UR0BTS0JdVU1YUUx7b2Wai39rWFhoTEyGVEsAr52KoI96mox617KT1KuLmn1oc1tOlXxu0Lmp0qeMkWtURjs1OzIuT0dBXFZRVEpMcmFhaFVZdE9OqWRXALORdqGOd6mWf7KLc6WAZlQ5NkQ1NjtBSnZ0d4d3dXpmYlhMTDw0LzcyLk9GQmpgZGhbYnJeZZNkZMN1aQCzlYB5Z1hSSEJHPz2PbWCUaVdkT0l7WUqgdFmqiXaadGJZQD46KypDMCxTOTN9ZmOBeHaPdHC2eXPbh3oAenV5dFxcV0dAtZeGsH5tpXVhpntjv4tmwpd4zquRwZp/Xkg7cFVHe1E9ilNDvoZzfWxnqYJ3xn545pCAAFRZYFJGTHBXUMmXgbiDbaxyWriDaLOGaaqAZrCLb6+KcnpbSZRxV6FuVcSCYZx0YUw7OqByaL91ceKJeABKTlZVWmOHdnBsRTpqRT2zfmXBjWqyhGOke1+ngmW2kHemg2qgdFPLlnO4hmwtJB80JSKCUUm1a2fZfGkAPDxBPDtAbl1UmXJdkmVVpHRgnG5Uq35eonpcq4FksYpxn3thjGVMoXxpWUY8EhEQNiglb0E6pl9Xym1ZACwvNyckJ0U9PndZTGM6NXJIP4NXQaR6WqZ7XqN5X5x6Y41sWYdkUpN5aTovKBgVFDIkImI6MZlbTrBhTAAqNUcyLS4fICVFNzN4SkGIWUW0g16lfF6ddluLaVKBZlN8Xk6DYE2ggmxKOjEOCgw0LCpmRz+HTTueV0IAK0BZHB0hHx0jNTEyel1JoHZauZBtl3ZadVdEZkk6eVtKelhIgl1Hq4txl4FxFRAPJiwxkZGVoIF4g0EtAEBWbzpBTy8xOiQlKXFdSoRkS1xEM11DM2NIOmNHOWxPPXhZRINeRpt3XMatlm1bTBERFU1HS8XCwr2nowBlepNabYNFUWAwMTg4MzQ3LixQPTNaPzBhRTdkSDpmSjt2VEOBX0eIZUq9oIiJc14RDQ0uJCO2s7Dn7PAAc4ehcoiiX3GJRU1bNDQ+bHB2u8G+gHBhXUAzak5AcVNGb09BeFhAfl5EmnlfVUY3DAoLJyEdy83K4N/eAGl2j3aKo3KGn2Rzh46VltPXztXf02hlWWtOQWlMP2hMPmZKOWtPOnBSPm1VQCkjHA4LCyIeG87Mxt7Z1ABUV21ndY95i6WbqbS3vrnQ1My7v7BGRzZYRTdlSTpdQTNcQTJgRDViRjVJNigXFBEHBgU+OzXSzsHa08gA0BknQCQUQwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/009f40cb24583c0e64b9ea8448e55a5c/c6a2b/istv%C3%A1nszmozs%C3%A1nszky-headshot.png","srcSet":"/static/009f40cb24583c0e64b9ea8448e55a5c/19787/istv%C3%A1nszmozs%C3%A1nszky-headshot.png 75w,\\n/static/009f40cb24583c0e64b9ea8448e55a5c/59d48/istv%C3%A1nszmozs%C3%A1nszky-headshot.png 150w,\\n/static/009f40cb24583c0e64b9ea8448e55a5c/c6a2b/istv%C3%A1nszmozs%C3%A1nszky-headshot.png 300w,\\n/static/009f40cb24583c0e64b9ea8448e55a5c/c0bbd/istv%C3%A1nszmozs%C3%A1nszky-headshot.png 400w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"","twitter":"http://twitter.com/slsoftworks","linkedin":"","github":"https://github.com/flaki","gitlab":"","behance":"","medium":"https://medium.com/@slsoftworks","discord":""}},{"id":"5e714747-8a40-5c95-bfca-b674d5ef9e90","about":"<p>Alexander is a web developer with over 15 years of experience. He attended\\nRustFest for the first time in 2019 in Barcelona and is now helping to organise\\nRustFest 2020 in his country of origin: The Netherlands. </p>","frontmatter":{"name":"Alexander Varwijk","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAv/EABcBAAMBAAAAAAAAAAAAAAAAAAACAwH/2gAMAwEAAhADEAAAAb5NEaR6SY2DMMXE3//EABoQAAMBAQEBAAAAAAAAAAAAAAECAwAREiH/2gAIAQEAAQUCb4PTBtSyzNbIG6DmPcdNiB//xAAZEQACAwEAAAAAAAAAAAAAAAABEAIDESL/2gAIAQMBAT8BrHJ1RX//xAAWEQEBAQAAAAAAAAAAAAAAAAACEDH/2gAIAQIBAT8BexT/xAAaEAADAQADAAAAAAAAAAAAAAAAAREQAiFh/9oACAEBAAY/Aic5nou6mVFe/wD/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVEQQf/aAAgBAQABPyH4C3RA4KPIuZRFsZoiRYFiTdLGMXcvignZ/9oADAMBAAIAAwAAABAvN8D/xAAXEQADAQAAAAAAAAAAAAAAAAAAASEQ/9oACAEDAQE/EFQUS1//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/EHcxl3//xAAcEAEBAQEAAgMAAAAAAAAAAAABEQAhQVFhgZH/2gAIAQEAAT8QtGygPlWGpzcHxvD6wkalU8VnquXRSAM9L+4IB6hMolYrgdfnOU4Lf//Z","aspectRatio":1,"src":"/static/7b9606cead995f21332e8bce02b05942/58d6d/alexandervarwijk-headshot.jpg","srcSet":"/static/7b9606cead995f21332e8bce02b05942/c6f75/alexandervarwijk-headshot.jpg 75w,\\n/static/7b9606cead995f21332e8bce02b05942/421ae/alexandervarwijk-headshot.jpg 150w,\\n/static/7b9606cead995f21332e8bce02b05942/58d6d/alexandervarwijk-headshot.jpg 300w,\\n/static/7b9606cead995f21332e8bce02b05942/3643e/alexandervarwijk-headshot.jpg 450w,\\n/static/7b9606cead995f21332e8bce02b05942/f5db2/alexandervarwijk-headshot.jpg 600w,\\n/static/7b9606cead995f21332e8bce02b05942/e9826/alexandervarwijk-headshot.jpg 1024w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"https://www.alexandervarwijk.com","twitter":"https://twitter.com/Kingdutch","linkedin":"https://www.linkedin.com/in/alexander-varwijk/","github":"https://github.com/Kingdutch","gitlab":"","behance":"","medium":"","discord":""}},{"id":"597c040a-bfd8-5f0e-ace6-cc4e480d6e4f","about":"<p>Dirkjan has not written an short biography yet.</p>","frontmatter":{"name":"Dirkjan Ochtman","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAQX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAbZtsA7nCHl0G1Qs/8QAGxAAAwACAwAAAAAAAAAAAAAAAQIDEBIABBP/2gAIAQEAAQUCtTzUUoMVXYlQW526Mr2OuP/EABYRAQEBAAAAAAAAAAAAAAAAAAEgIf/aAAgBAwEBPwEMj//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABsQAAEFAQEAAAAAAAAAAAAAAAEAAhARQSFh/9oACAEBAAY/ArQL6ow28QHsNrOpjhpj/8QAHBABAAICAwEAAAAAAAAAAAAAAQARECExQWGx/9oACAEBAAE/IQvbXQSoPm6wbOybAo25lwedfSJxKF4//9oADAMBAAIAAwAAABD433z/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQQf/aAAgBAwEBPxBDop3P/8QAGREAAwADAAAAAAAAAAAAAAAAAAERECEx/9oACAECAQE/EG9wguY//8QAHxABAQABAwUBAAAAAAAAAAAAAREAMVFhECFBgdHw/9oACAEBAAE/EI+q5T8x2mAZRvRd8TL1JcN/0xFHeGp0GNMGGofPGKFDpNEUpPeXP//Z","aspectRatio":1,"src":"/static/4503c1ca8fbaded0de21eb7a7caca451/58d6d/dirkjanochtman-headshot.jpg","srcSet":"/static/4503c1ca8fbaded0de21eb7a7caca451/c6f75/dirkjanochtman-headshot.jpg 75w,\\n/static/4503c1ca8fbaded0de21eb7a7caca451/421ae/dirkjanochtman-headshot.jpg 150w,\\n/static/4503c1ca8fbaded0de21eb7a7caca451/58d6d/dirkjanochtman-headshot.jpg 300w,\\n/static/4503c1ca8fbaded0de21eb7a7caca451/3643e/dirkjanochtman-headshot.jpg 450w,\\n/static/4503c1ca8fbaded0de21eb7a7caca451/822dd/dirkjanochtman-headshot.jpg 512w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"https://dirkjan.ochtman.nl/","twitter":"https://twitter.com/djco","linkedin":"https://www.linkedin.com/in/dochtman/","github":"https://github.com/djc","gitlab":"","behance":"","medium":"","discord":""}},{"id":"a09364ec-c122-5aad-b805-8e005cc73a42","about":"<p>Jan-Erik is a Firefox Engineer at Mozilla, working from Berlin, Germany.\\nHe\'s an active member of the Rust community team since 2014.\\nTo get away from computers he picked up scuba diving to see the world under water.</p>","frontmatter":{"name":"Jan-Erik Rediger","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAUCAQMG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAaPHXkaTKPK0xKYn/8QAHRAAAgIBBQAAAAAAAAAAAAAAAgMBBCEAEBETMf/aAAgBAQABBQKy2VrrMIw1ckeupgM7L8TPIf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAICAQUAAAAAAAAAAAAAAAERACEiAhAgMUH/2gAIAQEABj8CensmZFnZPLwS64XP/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARITFBcf/aAAgBAQABPyEcI0N8lgOVxODdyv1X5c+p2l7EpHYnupSf/9oADAMBAAIAAwAAABDD8MD/xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QEiC//8QAFhEBAQEAAAAAAAAAAAAAAAAAASAh/9oACAECAQE/EF2P/8QAHRABAQACAgMBAAAAAAAAAAAAAREAIUFhMVGBcf/aAAgBAQABPxAFEi7Gi2c+MrFN0AQ+ZXWEXGLNvv5LgpIcEF3x1kGof0xJQvtd47aEjW5bJQr0MM//2Q==","aspectRatio":1,"src":"/static/88af73c7362d481bfc5b357430d876b6/58d6d/janerikrediger-headshot.jpg","srcSet":"/static/88af73c7362d481bfc5b357430d876b6/c6f75/janerikrediger-headshot.jpg 75w,\\n/static/88af73c7362d481bfc5b357430d876b6/421ae/janerikrediger-headshot.jpg 150w,\\n/static/88af73c7362d481bfc5b357430d876b6/58d6d/janerikrediger-headshot.jpg 300w,\\n/static/88af73c7362d481bfc5b357430d876b6/3643e/janerikrediger-headshot.jpg 450w,\\n/static/88af73c7362d481bfc5b357430d876b6/822dd/janerikrediger-headshot.jpg 512w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"https://fnordig.de/","twitter":"https://twitter.com/badboy_","linkedin":"","github":"https://github.com/badboy","gitlab":"","behance":"","medium":"","discord":""}},{"id":"b9205703-de26-5d4b-bdaf-d0c15b208d12","about":"<p>Jeske Eenink’s experience stems from FinTech where she builds meaningful relationships that drive long-term value. She loves to connect, learn and find opportunities for collaboration. She is in charge of Partners &#x26; Relations at Dusk Network: an open source blockchain infrastructure that businesses use to tokenize financial instruments and automate complex processes. Rust’s performance, safety characteristics, and community ecosystem make Rust an obvious choice for Dusk Network’s development of modern cryptographic systems.</p>","frontmatter":{"name":"Jeske Eenink","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAf/EABcBAQADAAAAAAAAAAAAAAAAAAMBAgT/2gAMAwEAAhADEAAAActZ3EMriTkE0hQP/8QAGxABAQABBQAAAAAAAAAAAAAAAQIAAxAREkH/2gAIAQEAAQUCMqWFyU7a1yvOeu3/xAAbEQACAQUAAAAAAAAAAAAAAAAAAgEQESEiMf/aAAgBAwEBPwFV0nBcXlP/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAgEBPwEj/8QAGhAAAgIDAAAAAAAAAAAAAAAAAREAIRAgMf/aAAgBAQAGPwKdYxZUovX/xAAaEAEBAAMBAQAAAAAAAAAAAAABABEhMRBR/9oACAEBAAE/ISqB1jJsHcYuog0PsIoiy5z15//aAAwDAQACAAMAAAAQ/wDYg//EABkRAAIDAQAAAAAAAAAAAAAAAAABESExQf/aAAgBAwEBPxCZjtwkYD0//8QAGREAAgMBAAAAAAAAAAAAAAAAABEBEDFR/9oACAECAQE/EG4IjK//xAAcEAEBAQACAwEAAAAAAAAAAAABEQAhQRBRcZH/2gAIAQEAAT8QIGpDjODnFND68JXIags18z2xh+5jR0uTrIQaoHzf/9k=","aspectRatio":1,"src":"/static/259a77d808921bec332dc35a076f71d0/58d6d/jeskeeenink-headshot.jpg","srcSet":"/static/259a77d808921bec332dc35a076f71d0/c6f75/jeskeeenink-headshot.jpg 75w,\\n/static/259a77d808921bec332dc35a076f71d0/421ae/jeskeeenink-headshot.jpg 150w,\\n/static/259a77d808921bec332dc35a076f71d0/58d6d/jeskeeenink-headshot.jpg 300w,\\n/static/259a77d808921bec332dc35a076f71d0/3643e/jeskeeenink-headshot.jpg 450w,\\n/static/259a77d808921bec332dc35a076f71d0/f5db2/jeskeeenink-headshot.jpg 600w,\\n/static/259a77d808921bec332dc35a076f71d0/5f3e1/jeskeeenink-headshot.jpg 853w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"","twitter":"https://twitter.com/JeskeEenink","linkedin":"https://www.linkedin.com/in/jeskeeenink/","github":"https://github.com/ayajeske","gitlab":"","behance":"","medium":"","discord":""}},{"id":"1b0c7e0a-40aa-5fdc-9c1e-3a2315441b54","about":"<p>Martijn is a student at Avans university of applied sciences in `s-Hertogenbosch. He is in his 3rd year of studying software engineering. While not studying or programming Rust, Martijn likes to go sailing.</p>","frontmatter":{"name":"Martijn Groeneveldt","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMGBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB9fgnErRImcqLm4H/xAAdEAACAgEFAAAAAAAAAAAAAAACAwAEIQEQERMz/9oACAEBAAEFArHlVwyPt8wLHUYMFg7Brj//xAAWEQEBAQAAAAAAAAAAAAAAAAARASD/2gAIAQMBAT8BgY//xAAWEQEBAQAAAAAAAAAAAAAAAAABESD/2gAIAQIBAT8BRuP/xAAcEAACAQUBAAAAAAAAAAAAAAAAARECEBIhQTH/2gAIAQEABj8CcEKYdsaPOs1tdMqWK/8A/8QAHBABAAMBAAMBAAAAAAAAAAAAAQARITEQQWFx/9oACAEBAAE/IUlxLzJbkjRfBqrvT3+SjoPBnB9h2E5EML2f/9oADAMBAAIAAwAAABBwwP3/xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QWsJ//8QAFxEBAAMAAAAAAAAAAAAAAAAAEAERMf/aAAgBAgEBPxCgJ0//xAAfEAEAAgICAgMAAAAAAAAAAAABABExYSFREEFxscH/2gAIAQEAAT8Qt0KJVNLzT8QrQNXEvhE368dRofDT9hCAMc6pl0BNJwR6YDH7IAVAz9sSgjo6J//Z","aspectRatio":1.1400911161731206,"src":"/static/ca791fedc343f3ab09752b9de63e4821/58d6d/martijngroeneveldt-headshot.jpg","srcSet":"/static/ca791fedc343f3ab09752b9de63e4821/c6f75/martijngroeneveldt-headshot.jpg 75w,\\n/static/ca791fedc343f3ab09752b9de63e4821/421ae/martijngroeneveldt-headshot.jpg 150w,\\n/static/ca791fedc343f3ab09752b9de63e4821/58d6d/martijngroeneveldt-headshot.jpg 300w,\\n/static/ca791fedc343f3ab09752b9de63e4821/3643e/martijngroeneveldt-headshot.jpg 450w,\\n/static/ca791fedc343f3ab09752b9de63e4821/f5db2/martijngroeneveldt-headshot.jpg 600w,\\n/static/ca791fedc343f3ab09752b9de63e4821/b0a2b/martijngroeneveldt-headshot.jpg 2002w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"https://www.martijngroeneveldt.nl","twitter":"https://twitter.com/dutchmartin","linkedin":"https://www.linkedin.com/in/martijngroeneveldt/","github":"https://github.com/dutchmartin","gitlab":"","behance":"","medium":"","discord":""}},{"id":"4abb770c-36fc-5af8-8fbe-67222888a7f4","about":"<p>Rafaela joined RustFest just before the Rome event back in 2018 and has been active as project coordinator ever since. When she is not busy organizing conferences, she enjoys cats, chocolate and glitter.</p>","frontmatter":{"name":"Rafaela Wetzel","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBQT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABxrGuOQ6DKQVEJ//EABsQAAMAAgMAAAAAAAAAAAAAAAECAwATIzEy/9oACAEBAAEFAiM1so7xPVTwKoy89ToS7WkJU//EABYRAQEBAAAAAAAAAAAAAAAAAAEgIf/aAAgBAwEBPwEMj//EABYRAQEBAAAAAAAAAAAAAAAAAAEgIf/aAAgBAgEBPwFdj//EABwQAAMAAwADAAAAAAAAAAAAAAABEQIhMRIyQf/aAAgBAQAGPwIrx0ezFRynRJP4YY2LmjxtP//EABkQAAMBAQEAAAAAAAAAAAAAAAABETEhUf/aAAgBAQABPyGWLSQ/4ZqsFknKbaW4lomnUfTqLrBvKXwHBGSXqP/aAAwDAQACAAMAAAAQVyhA/8QAGREBAAIDAAAAAAAAAAAAAAAAAQAQESFh/9oACAEDAQE/EAcq5E3P/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEhEGH/2gAIAQIBAT8QZGdE4f/EAB0QAQEAAwACAwAAAAAAAAAAAAERACExQXGhwdH/2gAIAQEAAT8QBlGoHb+5MSnYUPeNRB5oMFFoO9cyZxB3Rrfw5sIKEA+81sYa9W67kQwRaB93fvIogCFL45n/2Q==","aspectRatio":0.9696969696969697,"src":"/static/3bb6f8d34268b2029445b028c1368b67/58d6d/rafaelawetzel-headshot.jpg","srcSet":"/static/3bb6f8d34268b2029445b028c1368b67/c6f75/rafaelawetzel-headshot.jpg 75w,\\n/static/3bb6f8d34268b2029445b028c1368b67/421ae/rafaelawetzel-headshot.jpg 150w,\\n/static/3bb6f8d34268b2029445b028c1368b67/58d6d/rafaelawetzel-headshot.jpg 300w,\\n/static/3bb6f8d34268b2029445b028c1368b67/3643e/rafaelawetzel-headshot.jpg 450w,\\n/static/3bb6f8d34268b2029445b028c1368b67/822dd/rafaelawetzel-headshot.jpg 512w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"","twitter":"https://twitter.com/RafaelaWetzel","linkedin":"","github":"https://github.com/RafaelaWetzel","gitlab":"","behance":"","medium":"","discord":""}},{"id":"891ab7cf-afca-5f95-88ce-0db2e90c46e2","about":"<p>Wouter is a freelance software engineer working primarily with Embedded Rust. Played the role of co-master of ceremonies for RustFest Barcelona 2019. Likes to go rock climbing and board gaming, and is obsessed with space. Dreams of programming a satellite one day.</p>","frontmatter":{"name":"Wouter Geraedts","image":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDAgT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABsePWYNdyqYWRLkE//8QAHBAAAQQDAQAAAAAAAAAAAAAAAQACAwQREhMx/9oACAEBAAEFAnHC7DZSeDBejYe6ec6gWpQP/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQMBAT8BI//EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAgEBPwFjs//EABwQAAICAgMAAAAAAAAAAAAAAAABEBEhMSIyUf/aAAgBAQAGPwI2osXFZcU9XVGPTsf/xAAaEAEAAwEBAQAAAAAAAAAAAAABABExIXEQ/9oACAEBAAE/IaUyjGPflPOEA2LlwOx2oiBldEq3fpc//9oADAMBAAIAAwAAABB3wMP/xAAXEQEBAQEAAAAAAAAAAAAAAAABEBEx/9oACAEDAQE/EAZDk//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/EEwf/8QAHRABAAICAgMAAAAAAAAAAAAAAQARMVEhQRCRof/aAAgBAQABPxCvTK1GjYZwOGOYwlk/HMrRANMU9eIVQoFCbdsQ05gpK1AxpOyXtn//2Q==","aspectRatio":1,"src":"/static/7ca9a1f3f4dd479e306d7029c0be4c45/58d6d/woutergeraedts-headshot.jpg","srcSet":"/static/7ca9a1f3f4dd479e306d7029c0be4c45/c6f75/woutergeraedts-headshot.jpg 75w,\\n/static/7ca9a1f3f4dd479e306d7029c0be4c45/421ae/woutergeraedts-headshot.jpg 150w,\\n/static/7ca9a1f3f4dd479e306d7029c0be4c45/58d6d/woutergeraedts-headshot.jpg 300w,\\n/static/7ca9a1f3f4dd479e306d7029c0be4c45/6c985/woutergeraedts-headshot.jpg 375w","sizes":"(max-width: 300px) 100vw, 300px"}}},"website":"https://woutergeraedts.nl/","twitter":"https://twitter.com/Wassasin","linkedin":"","github":"https://github.com/Wassasin","gitlab":"","behance":"","medium":"","discord":""}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-about-js-d7023d3bd6389e549669.js.map