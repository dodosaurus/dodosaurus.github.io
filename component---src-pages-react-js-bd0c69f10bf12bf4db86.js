(self.webpackChunkJKWeb=self.webpackChunkJKWeb||[]).push([[20],{5872:function(e,t,l){"use strict";var n=l(7294);t.Z=function(e){var t=e.tech,l=e.setTechDetails,a=e.type;return n.createElement("button",{className:"no-select tech-item outline-none flex mt-1 p-1 justify-center items-center cursor-pointer text-independence-text hover:text-"+a+" transition ease-linear duration-300 font-light",onClick:function(){l(t)}},n.createElement("img",{style:{width:"1.5rem"},className:"w-"+t.logoWidth+" mr-2 inline-block",src:t.logo.file.url,alt:t.name+" logo"}),n.createElement("h4",null,t.name))}},3686:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return i}});var n=l(7294),a=l(6872),r=l(5444),c=l(5872),s=function(e){var t=e.project,l=e.type;return n.createElement("div",{className:"h-auto p-3 rounded-xl mb-2 shadow-xl",style:{backgroundImage:"url("+t.bgImage.file.url+")"},key:t.id},n.createElement("div",{className:"flex flex-col z-10 mt-20 md:mt-32 rounded-xl text-independence-text bg-independence p-5"},n.createElement("h3",{className:"font-bold mb-2"},t.title),n.createElement("p",{className:"mb-4 z-20"},t.desc.desc),n.createElement("a",{className:"self-center px-4 pt-2 pb-2.5 text-center text-"+l+"-light rounded-xl shadow-xl bg-"+l+" hover:text-independence transition ease-linear duration-300",href:t.link},"Visit the website")))},o=l(8605),m=function(){var e,t={projects:(e=(0,r.useStaticQuery)("1196548050")).allContentfulProject.nodes,images:e.allFile.nodes,techs:e.allContentfulTech.nodes},l=t.projects,a=t.images,m=t.techs,i=function(e){return a.filter((function(t){return t.name===e}))[0].childImageSharp.gatsbyImageData},d=(0,n.useState)(null),f=d[0],u=d[1];return(0,n.useEffect)((function(){u(null)}),[]),n.createElement(n.Fragment,null,n.createElement("nav",{className:"flex h-20 px-5 m-2 mt-4 justify-between rounded-xl items-center gap-4 bg-eggshell shadow-xl"},n.createElement(r.Link,{to:"/"},n.createElement(o.G,{image:i("left-arrow"),className:"inline-block w-10",alt:"arrow back"})),n.createElement("div",{className:"text-center"},n.createElement("h1",{className:"text-3xl md:text-4xl font-bold mb-0 md:mb-2"},"React Developer")),n.createElement("span",null,n.createElement(o.G,{image:i("react"),className:"w-14",src:"icons/react.png",alt:"Logo of React JS"}))),n.createElement("section",{className:"flex flex-col justify-center m-2 p-3 bg-terracotta-light rounded-xl z-0 shadow-xl"},n.createElement("h3",{className:"text-3xl text-terracotta mb-3 self-center"},"Stuff I know..."),n.createElement("div",{className:"flex lg:flex-row flex-col justify-around"},n.createElement("div",{className:"flex md:flex-row flex-col justify-around items-center w-auto lg:w-1/2 p-5 pb-7 m-2 bg-independence text-independence-text rounded-xl shadow-xl gap-4"},n.createElement("div",{className:"flex flex-col text-center justify-around -mb-3 md:mb-0"},n.createElement("h3",{className:"font-bold m-2"},"JS frameworks:"),m.filter((function(e){return"js-framework"===e.type})).map((function(e){return n.createElement(c.Z,{tech:e,key:e.id,setTechDetails:u,type:"terracotta"})})),n.createElement("h3",{className:"font-bold m-2"},"CSS frameworks:"),m.filter((function(e){return"css-framework"===e.type})).map((function(e){return n.createElement(c.Z,{tech:e,key:e.id,setTechDetails:u,type:"terracotta"})})),n.createElement("h3",{className:"font-bold m-2"},"Backend platform:"),m.filter((function(e){return"backend"===e.type})).map((function(e){return n.createElement(c.Z,{tech:e,key:e.id,setTechDetails:u,type:"terracotta"})}))),n.createElement("div",{className:"flex flex-col text-center justify-between"},n.createElement("h3",{className:"font-bold m-2 mb-1"},"CMS:"),m.filter((function(e){return"CMS"===e.type})).map((function(e){return n.createElement(c.Z,{tech:e,key:e.id,setTechDetails:u,type:"terracotta"})})),n.createElement("h3",{className:"font-bold m-2"},"Other tooling I use(d):"),m.filter((function(e){return"other"===e.type})).map((function(e){return n.createElement(c.Z,{tech:e,key:e.id,setTechDetails:u,type:"terracotta"})})),n.createElement("h3",{className:"font-bold m-2"},"Also related to this:"),m.filter((function(e){return"related"===e.type})).map((function(e){return n.createElement(c.Z,{tech:e,key:e.id,setTechDetails:u,type:"terracotta"})})))),null!==f&&n.createElement("div",{className:"flex md:flex-row flex-col justify-around items-start w-auto lg:w-1/2 p-2 m-2 bg-independence-text text-black rounded-xl shadow-xl"},n.createElement("div",{className:"flex flex-col justify-center items-start text-left m-2"},n.createElement("span",{className:"flex items-center justify-start mb-2"},n.createElement("img",{style:{width:"3rem"},className:"w-"+2*f.logoWidth+" mr-2 inline-block",src:f.logo.file.url,alt:f.name+" logo"}),n.createElement("h3",{className:"flex lg:flex-row flex-col items-center text-black mb-2 ml-2 font-bold text-2xl"},f.name)),n.createElement("p",{className:"mb-3"},f.desc.desc),"GitHub"===f.name&&n.createElement("p",null,"Click"," ",n.createElement("a",{className:"font-semibold hover:text-terracotta transition ease-linear duration-200",href:f.link},"HERE")))),null===f&&n.createElement("div",{className:"flex md:flex-row flex-col justify-center items-center w-auto lg:w-1/2 p-5 m-2 bg-independence-text text-independence rounded-xl shadow-xl"},n.createElement("div",{className:"text-center p-2"},n.createElement("h3",{className:"flex lg:flex-row flex-col items-center text-black mb-2 italic"},"Choose tech from the list to get more info."))))),n.createElement("section",{className:"flex flex-col p-5 m-2 mb-3 bg-terracotta-light rounded-xl items-center shadow-xl"},n.createElement("h3",{className:"text-3xl text-terracotta mb-5"},"I worked on..."),l&&l.map((function(e){return n.createElement(s,{project:e,type:"terracotta",key:e.id})})),n.createElement("div",{className:"w-full h-auto p-3 bg-dino-green rounded-xl mb-2 mt-2 shadow-xl"},n.createElement("div",{className:"flex flex-col z-10 rounded-xl bg-independence text-independence-text p-5"},n.createElement("h3",{className:"font-bold mb-2"},"...this website"),n.createElement("p",{className:"mb-2"},"Static site generator Gatsby used for logic layer (it is based on React), Contentful for storing and providing content. For styling I used Tailwind."," "),n.createElement("p",{className:"self-center px-4 pt-2 pb-2.5 text-center text-dino-yellow"},"Just look around :)"))),n.createElement("p",{className:"mt-1 text-independence"},"More to come...")),n.createElement("div",{className:"flex-grow"}))},i=function(){return n.createElement(a.Z,null,n.createElement(m,null))}}}]);
//# sourceMappingURL=component---src-pages-react-js-bd0c69f10bf12bf4db86.js.map