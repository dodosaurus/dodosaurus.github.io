"use strict";(self.webpackChunkJKWeb=self.webpackChunkJKWeb||[]).push([[215],{3593:function(e,t,n){var l=n(7294);t.Z=function(e){var t=e.tech,n=e.setTechDetails,a=e.type;return l.createElement("button",{className:"no-select tech-item outline-none flex mt-1 p-1 justify-center items-center cursor-pointer text-independence-text hover:text-"+a+" transition ease-linear duration-300 font-light",onClick:function(){n(t)}},l.createElement("img",{style:{width:"1.5rem"},className:"w-"+t.logoWidth+" mr-2 inline-block",src:t.logo.file.url,alt:t.name+" logo"}),l.createElement("h4",null,t.name))}},2812:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var l=n(7294),a=n(5293),s=n(1597),r=n(3593),c=n(7059),o=function(){var e,t={projects:(e=(0,s.useStaticQuery)("3146074334")).allContentfulProject.nodes,images:e.allFile.nodes,techs:e.allContentfulTech.nodes},n=t.projects,a=t.images,o=t.techs,i=function(e){return a.filter((function(t){return t.name===e}))[0].childImageSharp.gatsbyImageData},m=(0,l.useState)(null),d=m[0],u=m[1];return(0,l.useEffect)((function(){u(null)}),[]),l.createElement(l.Fragment,null,l.createElement("nav",{className:"flex h-20 px-5 m-2 mt-4 justify-between rounded-xl items-center gap-4 bg-eggshell shadow-xl"},l.createElement(s.Link,{to:"/"},l.createElement(c.G,{image:i("left-arrow"),className:"inline-block w-10",alt:"arrow back"})),l.createElement("div",{className:"text-center"},l.createElement("h1",{className:"text-3xl md:text-4xl font-bold mb-2"},"Test Automation")),l.createElement("span",null,l.createElement(c.G,{image:i("robot"),className:"w-16",alt:"Logo of robot"}))),l.createElement("section",{className:"flex flex-col justify-center m-2 p-3 bg-greensheen-light rounded-xl z-0 shadow-xl"},l.createElement("h3",{className:"text-3xl text-greensheen mb-3 self-center"},"Stuff I know..."),l.createElement("div",{className:"flex lg:flex-row flex-col justify-around"},l.createElement("div",{className:"flex md:flex-row flex-col justify-around items-center w-auto lg:w-1/2 p-5 pb-7 m-2 bg-independence rounded-xl shadow-xl gap-4"},l.createElement("div",{className:"flex flex-col text-center justify-between -mb-3 md:mb-0"},l.createElement("h3",{className:"font-bold m-2 text-independence-text"},"Test automation:"),o.filter((function(e){return"auto-test"===e.type})).map((function(e){return l.createElement(r.Z,{tech:e,key:e.id,setTechDetails:u,type:"greensheen"})})),l.createElement("h3",{className:"font-bold m-2 text-independence-text"},"Manual testing:"),o.filter((function(e){return"manual-test"===e.type})).map((function(e){return l.createElement(r.Z,{tech:e,key:e.id,setTechDetails:u,type:"greensheen"})}))),l.createElement("div",{className:"flex flex-col text-center justify-between"},l.createElement("h3",{className:"font-bold m-2 text-independence-text"},"Other:"),o.filter((function(e){return"other"===e.type})).map((function(e){return l.createElement(r.Z,{tech:e,key:e.id,setTechDetails:u,type:"greensheen"})})))),null!==d&&l.createElement("div",{className:"flex md:flex-row flex-col justify-around items-start w-auto lg:w-1/2 p-2 m-2 bg-independence-text text-black rounded-xl shadow-xl"},l.createElement("div",{className:"flex flex-col justify-center items-start text-left m-2"},l.createElement("span",{className:"flex items-center justify-start mb-2"},l.createElement("div",{className:"w-"+2*d.logoWidth+" mr-2 inline-block",alt:"logo",dangerouslySetInnerHTML:{__html:d.logo.svg.content}}),l.createElement("h3",{className:"flex lg:flex-row flex-col items-center text-black mb-2 ml-2 font-bold text-2xl"},d.name)),l.createElement("p",{className:"mb-3"},d.desc.desc))),null===d&&l.createElement("div",{className:"flex md:flex-row flex-col justify-center items-center w-auto lg:w-1/2 p-5 m-2 bg-independence-text text-independence rounded-xl shadow-xl"},l.createElement("div",{className:"text-center p-2"},l.createElement("h3",{className:"flex lg:flex-row flex-col items-center text-black mb-2 italic"},"Choose tech from the list to get more info."))))),l.createElement("section",{className:"flex flex-col p-5 m-2 mb-3 bg-greensheen-light rounded-xl items-center shadow-xl"},l.createElement("h3",{className:"text-3xl text-greensheen mb-5"},"I worked on..."),n&&n.map((function(e){return l.createElement("div",{className:"h-auto p-3 rounded-xl mb-2 shadow-xl",style:{backgroundImage:"url("+e.bgImage.file.url+")"},key:e.id},l.createElement("div",{className:"flex flex-col z-10 md:mt-40 rounded-xl bg-independence text-independence-text p-5"},l.createElement("h3",{className:"font-bold mb-2"}," ",e.title),l.createElement("p",{className:"z-20"},e.desc.desc),l.createElement("ul",{className:"list-disc pl-6 my-3"},l.createElement("li",null,"store, validate and provide data about charging stations"),l.createElement("li",null,"handle authorizations, based on the way customer is charging the car"),l.createElement("li",null,"load management system, that allowed clients dynamically manage kWh load coming to their infrastructure"),l.createElement("li",null,"route the info about the each charging session performed to other parts of domain matrix and many more")),l.createElement("p",{className:"mb-4"},"Through the years, I was part of different teams and had different responsiblities, here are some key points:"),l.createElement("p",{className:"mb-4"},"2018 to 2019 -> E2E test automation - using ",l.createElement("b",null,"UFT/ALM"),", automating long flows that started from web application frontend, came through microservice matrix and ended for ex. in SAP or Salesforce"),l.createElement("p",{className:"mb-4"},"2019 to 2021 -> functional test automation - coming down the project structure, I started working on more specific backend functional tests - using ",l.createElement("b",null,"UFT/ALM"),", usually contacting REST/messaging API then checking database, or checking if service emitted expected data structure; part of responsibility was also doing integration tests (mostly manual, highly specific testcases in cooperation with other team)"),l.createElement("p",{className:"mb-4"},"2021 to present -> still testing on same level, but breaking point was introduction of ",l.createElement("b",null,"Cypress")," to backend test automation instead of obsolete UFT; with previous Cypress experience, I played and I am playing big role in designing framework, planning migration, doing system wise decisions and last but not least - supporting other colleagues with getting into the new way of working."),l.createElement("a",{className:"self-center px-4 pt-2 pb-2.5 text-center text-greensheen-light rounded-xl shadow-xl bg-greensheen hover:text-independence transition ease-linear duration-300",href:e.link},"To learn more")))}))),l.createElement("div",{className:"flex-grow"}))},i=function(){return l.createElement(a.Z,null,l.createElement(o,null))}}}]);
//# sourceMappingURL=component---src-pages-automation-js-5c0efd4c3755dfabc962.js.map