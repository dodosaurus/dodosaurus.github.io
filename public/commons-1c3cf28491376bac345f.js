(self.webpackChunkJKWeb=self.webpackChunkJKWeb||[]).push([[351],{1496:function(e,t,a){"use strict";var r=a(5318);t.Z=void 0;var i,n=r(a(1506)),s=r(a(5354)),l=r(a(7316)),o=r(a(7154)),d=r(a(7294)),c=r(a(5697)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),g=function(e){var t=u(e),a=m(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,x=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),x.set(e,t)),function(){a.unobserve(e),x.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=d.default.createElement(z,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),l):l})),z=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,h=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},h,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,x=e.itemProp,E=e.loading,N=e.draggable,I=p||g;if(!I)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:C?1:0,transition:O?"opacity "+y+"ms":"none"},l),H="boolean"==typeof b?"lightgray":b,j={transitionDelay:y+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},O&&j,l,f),W={title:t,alt:this.state.isVisible?"":a,style:T,className:m,itemProp:x},M=this.state.isHydrated?h(I):I[0];if(p)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),H&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&j)}),M.base64&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:W,imageVariants:I,generateSources:L}),M.tracedSVG&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:W,imageVariants:I,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(I),d.default.createElement(z,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:E,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:E},M,{imageVariants:I}))}}));if(g){var P=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete P.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},H&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:H,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},O&&j)}),M.base64&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:W,imageVariants:I,generateSources:L}),M.tracedSVG&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:W,imageVariants:I,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(I),d.default.createElement(z,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:E,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:E},M,{imageVariants:I}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function H(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}C.propTypes={resolutions:O,sizes:V,fixed:H(c.default.oneOfType([O,c.default.arrayOf(O)])),fluid:H(c.default.oneOfType([V,c.default.arrayOf(V)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var j=C;t.Z=j},1632:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r=a(7294),i=a(5444),n=a(1496),s=function(e){var t=e.setModalShown,a=(0,i.K2)("2283094385"),s=a.allFile.nodes,l=a.file.childImageSharp.fluid,o=function(e){return s.filter((function(t){return t.name===e}))[0].childImageSharp.fluid},d=(0,r.useState)(!1),c=d[0],u=d[1];return(0,r.useEffect)((function(){u(!1)}),[]),r.createElement("div",{className:"fixed flex flex-col justify-center items-center bg-gray-500 inset-0 bg-opacity-50 transition-opacity z-40",style:{backdropFilter:"blur(20px)"}},r.createElement("div",{className:"w-auto h-auto m-3 bg-independence rounded-xl shadow-xl z-50"},r.createElement("nav",{className:"flex justify-start items-center h-16"},r.createElement("button",{className:"tech-item",onClick:function(){return t(!1)}},r.createElement(n.Z,{fluid:o("close"),className:"inline-block w-8 md:w-10 m-3 cursor-pointer transform hover:rotate-6 transition ease-linear duration-500",alt:"close icon"}))),r.createElement("main",{className:"flex flex-col m-5 justify-center items-center"},r.createElement("div",{className:"text-center"},r.createElement("h2",{className:"text-3xl md:text-4xl font-bold text-white"},"Contact information")),r.createElement("div",null,r.createElement("figure",null,r.createElement(n.Z,{fluid:l,className:"inline-block w-80 h-80 md:w-100 md:h-100 m-5 rounded-full shadow-xl",alt:"close icon"}))),r.createElement("div",{className:"flex flex-col items-center justify-center bg-independence-text text-independence text-xl font-light shadow-xl rounded-xl w-80 md:w-100 h-auto p-5"},r.createElement("p",null,"If you have any question, remark or need advice, do not hesitate to contact me here:"),r.createElement("div",{className:"flex flex-col justify-center items-center mt-2 gap-1"},!c&&r.createElement("button",{onClick:function(){return u(!0)},className:"button-contact bg-dino-green outline-none border-none p-2 rounded-xl hover:text-white"},"Click to show it"),c&&r.createElement("figure",{className:"flex flex-col justify-center items-center mt-2 gap-1 rounded-xl bg-white p-3"},r.createElement("h3",{className:"font-bold"},"Jozef Kováč"),r.createElement("span",null,a.site.siteMetadata.email),r.createElement("a",{href:a.site.siteMetadata.linkedin},r.createElement(n.Z,{fluid:o("linkedin"),className:"w-8 mt-1 cursor-pointer transform hover:rotate-6 transition ease-linear duration-500",alt:"close icon"}))))))))},l=function(e){var t=e.children,a=(0,i.K2)("2812400383"),l=(0,r.useState)(!1),o=l[0],d=l[1],c=a.site.siteMetadata.infoFooter,u=a.file.childImageSharp.fluid;return r.createElement("main",{className:"bg-independence font-sans"},o&&r.createElement(s,{setModalShown:d}),r.createElement("div",{className:"md:container md:mx-auto flex flex-col min-h-screen text-2xl font-light"},t,r.createElement("footer",{className:"flex lg:flex-row flex-col min-h-20 p-5 -mt-2 justify-center items-center bg-independence"},r.createElement("button",{className:"tech-item",onClick:function(){d(!0)}},r.createElement(n.Z,{fluid:u,className:"w-20 cursor-pointer transform hover:rotate-6 transition ease-linear duration-500",alt:"dinosaur"})),r.createElement("div",{className:"ml-4 text-center"},r.createElement("p",{className:"text-independence-text text-2xl font-light"},c)))))}}}]);
//# sourceMappingURL=commons-1c3cf28491376bac345f.js.map