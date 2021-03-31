(self.webpackChunkJKWeb=self.webpackChunkJKWeb||[]).push([[20],{1632:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(7294),l=n(5444),r=n(8605),c=function(e){var t=e.setModalShown,n=(0,l.K2)("3196636137"),c=n.allFile.nodes,o=n.file.childImageSharp.gatsbyImageData,s=function(e){return c.filter((function(t){return t.name===e}))[0].childImageSharp.gatsbyImageData},m=(0,a.useState)(!1),i=m[0],d=m[1];return(0,a.useEffect)((function(){d(!1)}),[]),a.createElement("div",{className:"fixed flex flex-col justify-center items-center bg-gray-500 inset-0 bg-opacity-50 transition-opacity z-40",style:{backdropFilter:"blur(20px)"}},a.createElement("div",{className:"w-auto h-auto m-3 bg-independence rounded-xl shadow-xl z-50"},a.createElement("nav",{className:"flex justify-start items-center h-16"},a.createElement("button",{className:"tech-item",onClick:function(){return t(!1)}},a.createElement(r.G,{image:s("close"),className:"inline-block w-8 md:w-10 m-3 cursor-pointer transform hover:rotate-6 transition ease-linear duration-500",alt:"close icon"}))),a.createElement("main",{className:"flex flex-col m-5 mt-0 justify-center items-center"},a.createElement("div",{className:"text-center"},a.createElement("h2",{className:"text-3xl md:text-4xl font-bold text-white"},"Contact information")),a.createElement("div",null,a.createElement("figure",null,a.createElement(r.G,{image:o,className:"inline-block w-72 h-72 md:w-100 md:h-100 m-5 rounded-full shadow-xl",alt:"photo of JK"}))),a.createElement("div",{className:"flex flex-col items-center justify-center bg-independence-text text-independence text-xl font-light shadow-xl rounded-xl w-80 md:w-100 h-auto p-5"},a.createElement("p",null,"If you have any question, remark or need advice, do not hesitate to contact me here:"),a.createElement("div",{className:"flex flex-col justify-center items-center mt-2 gap-1"},!i&&a.createElement("button",{onClick:function(){return d(!0)},className:"button-contact bg-dino-green outline-none border-none p-2 rounded-xl hover:text-white"},"Click to show it"),i&&a.createElement("figure",{className:"flex flex-col justify-center items-center mt-2 gap-1 rounded-xl bg-white p-3"},a.createElement("h3",{className:"font-bold"},"Jozef Kováč"),a.createElement("span",null,n.site.siteMetadata.email),a.createElement("a",{href:n.site.siteMetadata.linkedin},a.createElement(r.G,{image:s("linkedin"),className:"w-8 mt-1 cursor-pointer transform hover:rotate-6 transition ease-linear duration-500",alt:"close icon"}))))))))},o=function(e){var t=e.children,n=(0,l.K2)("3822612706"),o=(0,a.useState)(!1),s=o[0],m=o[1],i=n.site.siteMetadata.infoFooter,d=n.file.childImageSharp.gatsbyImageData;return a.createElement("main",{className:"bg-independence font-sans"},s&&a.createElement(c,{setModalShown:m}),a.createElement("div",{className:"md:container md:mx-auto flex flex-col min-h-screen text-2xl font-light"},t,a.createElement("footer",{className:"flex lg:flex-row flex-col min-h-20 p-5 -mt-2 justify-center items-center bg-independence"},a.createElement("button",{className:"tech-item",onClick:function(){m(!0)}},a.createElement(r.G,{image:d,className:"w-20 cursor-pointer transform hover:rotate-6 transition ease-linear duration-500",alt:"dinosaur"})),a.createElement("div",{className:"ml-4 text-center"},a.createElement("p",{className:"text-independence-text text-2xl font-light"},i)))))}},5872:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.tech,n=e.setTechDetails,l=e.type;return a.createElement("button",{className:"no-select tech-item outline-none flex mt-1 p-1 justify-center items-center cursor-pointer text-independence-text hover:text-"+l+" transition ease-linear duration-300 font-light",onClick:function(){n(t)}},a.createElement("img",{style:{width:"1.5rem"},className:"w-"+t.logoWidth+" mr-2 inline-block",src:t.logo.file.url,alt:t.name+" logo"}),a.createElement("h4",null,t.name))}},3686:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var a=n(7294),l=n(1632),r=n(5444),c=n(5872),o=function(e){var t=e.project,n=e.type;return a.createElement("div",{className:"h-auto p-3 rounded-xl mb-2 shadow-xl",style:{backgroundImage:"url("+t.bgImage.file.url+")"},key:t.id},a.createElement("div",{className:"flex flex-col z-10 mt-20 md:mt-32 rounded-xl text-independence-text bg-independence p-5"},a.createElement("h3",{className:"font-bold mb-2"},t.title),a.createElement("p",{className:"mb-4 z-20"},t.desc.desc),a.createElement("a",{className:"self-center px-4 pt-2 pb-2.5 text-center text-"+n+"-light rounded-xl shadow-xl bg-"+n+" hover:text-independence transition ease-linear duration-300",href:t.link},"Visit the website")))},s=n(8605),m=function(){var e,t={projects:(e=(0,r.K2)("1196548050")).allContentfulProject.nodes,images:e.allFile.nodes,techs:e.allContentfulTech.nodes},n=t.projects,l=t.images,m=t.techs,i=function(e){return l.filter((function(t){return t.name===e}))[0].childImageSharp.gatsbyImageData},d=(0,a.useState)(null),f=d[0],u=d[1];return(0,a.useEffect)((function(){u(null)}),[]),a.createElement(a.Fragment,null,a.createElement("nav",{className:"flex h-20 px-5 m-2 mt-4 justify-between rounded-xl items-center gap-4 bg-eggshell shadow-xl"},a.createElement(r.rU,{to:"/"},a.createElement(s.G,{image:i("left-arrow"),className:"inline-block w-10",alt:"arrow back"})),a.createElement("div",{className:"text-center"},a.createElement("h1",{className:"text-3xl md:text-4xl font-bold mb-2"},"React Developer")),a.createElement("span",null,a.createElement(s.G,{image:i("react"),className:"w-14",src:"icons/react.png",alt:"Logo of React JS"}))),a.createElement("section",{className:"flex flex-col justify-center m-2 p-3 bg-terracotta-light rounded-xl z-0 shadow-xl"},a.createElement("h3",{className:"text-3xl text-terracotta mb-3 self-center"},"Stuff I know..."),a.createElement("div",{className:"flex lg:flex-row flex-col justify-around"},a.createElement("div",{className:"flex md:flex-row flex-col justify-around items-center w-auto lg:w-1/2 p-5 pb-7 m-2 bg-independence text-independence-text rounded-xl shadow-xl gap-4"},a.createElement("div",{className:"flex flex-col text-center justify-around -mb-3 md:mb-0"},a.createElement("h3",{className:"font-bold m-2"},"JS frameworks:"),m.filter((function(e){return"js-framework"===e.type})).map((function(e){return a.createElement(c.Z,{tech:e,key:e.id,setTechDetails:u,type:"terracotta"})})),a.createElement("h3",{className:"font-bold m-2"},"CSS frameworks:"),m.filter((function(e){return"css-framework"===e.type})).map((function(e){return a.createElement(c.Z,{tech:e,key:e.id,setTechDetails:u,type:"terracotta"})})),a.createElement("h3",{className:"font-bold m-2"},"Backend platform:"),m.filter((function(e){return"backend"===e.type})).map((function(e){return a.createElement(c.Z,{tech:e,key:e.id,setTechDetails:u,type:"terracotta"})}))),a.createElement("div",{className:"flex flex-col text-center justify-between"},a.createElement("h3",{className:"font-bold m-2 mb-1"},"CMS:"),m.filter((function(e){return"CMS"===e.type})).map((function(e){return a.createElement(c.Z,{tech:e,key:e.id,setTechDetails:u,type:"terracotta"})})),a.createElement("h3",{className:"font-bold m-2"},"Other tooling I use(d):"),m.filter((function(e){return"other"===e.type})).map((function(e){return a.createElement(c.Z,{tech:e,key:e.id,setTechDetails:u,type:"terracotta"})})),a.createElement("h3",{className:"font-bold m-2"},"Also related to this:"),m.filter((function(e){return"related"===e.type})).map((function(e){return a.createElement(c.Z,{tech:e,key:e.id,setTechDetails:u,type:"terracotta"})})))),null!==f&&a.createElement("div",{className:"flex md:flex-row flex-col justify-around items-start w-auto lg:w-1/2 p-2 m-2 bg-independence-text text-black rounded-xl shadow-xl"},a.createElement("div",{className:"flex flex-col justify-center items-start text-left m-2"},a.createElement("span",{className:"flex items-center justify-start mb-2"},a.createElement("img",{style:{width:"3rem"},className:"w-"+2*f.logoWidth+" mr-2 inline-block",src:f.logo.file.url,alt:f.name+" logo"}),a.createElement("h3",{className:"flex lg:flex-row flex-col items-center text-black mb-2 ml-2 font-bold text-2xl"},f.name)),a.createElement("p",{className:"mb-3"},f.desc.desc),"GitHub"===f.name&&a.createElement("p",null,"Click"," ",a.createElement("a",{className:"font-semibold hover:text-terracotta transition ease-linear duration-200",href:f.link},"HERE")))),null===f&&a.createElement("div",{className:"flex md:flex-row flex-col justify-center items-center w-auto lg:w-1/2 p-5 m-2 bg-independence-text text-independence rounded-xl shadow-xl"},a.createElement("div",{className:"text-center p-2"},a.createElement("h3",{className:"flex lg:flex-row flex-col items-center text-black mb-2 italic"},"Choose tech from the list to get more info."))))),a.createElement("section",{className:"flex flex-col p-5 m-2 mb-3 bg-terracotta-light rounded-xl items-center shadow-xl"},a.createElement("h3",{className:"text-3xl text-terracotta mb-5"},"I worked on..."),n&&n.map((function(e){return a.createElement(o,{project:e,type:"terracotta",key:e.id})})),a.createElement("div",{className:"w-full h-auto p-3 bg-dino-green rounded-xl mb-2 mt-2 shadow-xl"},a.createElement("div",{className:"flex flex-col z-10 rounded-xl bg-independence text-independence-text p-5"},a.createElement("h3",{className:"font-bold mb-2"},"...this website"),a.createElement("p",{className:"mb-2"},"Static site generator Gatsby used for logic layer (it is based on React), Contentful for storing and providing content. For styling I used Tailwind."," "),a.createElement("p",{className:"self-center px-4 pt-2 pb-2.5 text-center text-dino-yellow"},"Just look around :)"))),a.createElement("p",{className:"mt-1 text-independence"},"More to come...")),a.createElement("div",{className:"flex-grow"}))},i=function(){return a.createElement(l.Z,null,a.createElement(m,null))}}}]);
//# sourceMappingURL=component---src-pages-react-js-053879638cfb5419ae8f.js.map