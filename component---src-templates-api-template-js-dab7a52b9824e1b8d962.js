(self.webpackChunkgas_companion_docs=self.webpackChunkgas_companion_docs||[]).push([[716],{51496:function(e,t,n){"use strict";var a=n(95318);t.Z=void 0;var r,i=a(n(81506)),d=a(n(85354)),s=a(n(37316)),o=a(n(67154)),l=a(n(67294)),u=a(n(45697)),c=function(e){var t=(0,o.default)({},e),n=t.resolutions,a=t.sizes,r=t.critical;return n&&(t.fixed=n,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,n=e.fixed,a=m(t||n||[]);return a&&a.src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},g=Object.create({}),h=function(e){var t=c(e),n=p(t);return g[n]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,S=new WeakMap;function Z(e){return e.map((function(e){var t=e.src,n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:i}),n&&l.default.createElement("source",{media:r,srcSet:n,sizes:i}))}))}function x(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function w(e){return e.map((function(e){var t=e.src,n=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:n,srcSet:a})}))}function E(e){return e.map((function(e){var t=e.src,n=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:n,srcSet:a})}))}function L(e,t){var n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return n&&(n.observe(e),S.set(e,t)),function(){n.unobserve(e),S.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',d=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+d+s+n+a+t+i+r+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=l.default.forwardRef((function(e,t){var n=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,d=e.ariaHidden,s=l.default.createElement(O,(0,o.default)({ref:t,src:n},i,{ariaHidden:d}));return a.length>1?l.default.createElement("picture",null,r(a),s):s})),O=l.default.forwardRef((function(e,t){var n=e.sizes,a=e.srcSet,r=e.src,i=e.style,d=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:n,srcSet:a,src:r},m,{onLoad:d,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));O.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=b&&h(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!y&&v&&!n.isCritical&&!n.seenBefore;var a=n.isCritical||b&&(y||!n.useIOSupport);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn,isHydrated:!1},n.imageRef=l.default.createRef(),n.placeholderRef=t.placeholderRef||l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,d.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=c(e),(n=p(t))&&(g[n]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=c(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,d=e.imgStyle,s=void 0===d?{}:d,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,S=e.itemProp,x=e.loading,L=e.draggable,I=g||h;if(!I)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,o.default)({opacity:C?1:0,transition:V?"opacity "+b+"ms":"none"},s),H="boolean"==typeof y?"lightgray":y,P={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},V&&P,s,f),N={title:t,alt:this.state.isVisible?"":n,style:T,className:p,itemProp:S},W=this.state.isHydrated?m(I):I[0];if(g)return l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),H&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&P)}),W.base64&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:N,imageVariants:I,generateSources:E}),W.tracedSVG&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:N,imageVariants:I,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,Z(I),l.default.createElement(O,{alt:n,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:x,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:n,title:t,loading:x},W,{imageVariants:I}))}}));if(h){var j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete j.display,l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},H&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:H,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},V&&P)}),W.base64&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:N,imageVariants:I,generateSources:E}),W.tracedSVG&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:N,imageVariants:I,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,Z(I),l.default.createElement(O,{alt:n,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:x,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:n,title:t,loading:x},W,{imageVariants:I}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),z=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function H(e){return function(t,n,a){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");u.default.checkPropTypes(((r={})[n]=e,r),t,"prop",a)}}C.propTypes={resolutions:V,sizes:z,fixed:H(u.default.oneOfType([V,u.default.arrayOf(V)])),fluid:H(u.default.oneOfType([z,u.default.arrayOf(z)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var P=C;t.Z=P},63687:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var a=n(67294),r=n(3756),i=n(60306),d=n(3310),s=n(51496),o=n(23431);var l={name:"xfib4m",styles:"text-align:center;padding:16px"},u=function(e){var t=e.fixed;return(0,o.tZ)("div",{css:l},(0,o.tZ)(s.Z,{fixed:t}))},c=n(25444);var f={name:"1yq3syn",styles:"vertical-align:baseline"},p={name:"1n2blk8",styles:"font-size:14px;margin-bottom:0;font-style:italic"},m={name:"1cp5sox",styles:"color:#ACA599;margin-bottom:0"},g=function(e){var t=e.item,n=e.key,a=t.children.find((function(e){return"name"===e.name})).content,r=t.children.find((function(e){return"type"===e.name})).content,i=t.children.find((function(e){return"description"===e.name})).content;return(0,o.tZ)("tr",{key:n},(0,o.tZ)("td",null,(0,o.tZ)("p",{css:m},a),(0,o.tZ)("p",{css:p},r)),(0,o.tZ)("td",{css:f},i))},h=function(e){var t=e.node,n=e.type,r=function(e){var t=e.xml.find((function(e){return e.name===n.toLowerCase()}));if(t)return t.xmlChildren.filter((function(e){var t=e.children.find((function(e){return"type"===e.name&&"Exec"===e.content})),n=e.children.find((function(e){return"name"===e.name&&"Target"===e.content}));return!t&&!n}))}(t);return r&&r.length?(0,o.tZ)(a.Fragment,null,(0,o.tZ)("h3",null,n),(0,o.tZ)("table",null,(0,o.tZ)("tbody",null,r.map((function(e,t){return(0,o.tZ)(g,{item:e,key:t})}))))):null};var y=function(e,t){return e.xml.find((function(e){return e.name===t}))},b=function(e){var t=v(e,"outputs");if(!t||!t.length)return!1;var n=t[0];if(!n||!n.children)return!1;var a=n.children[0];return!!a&&"Output Delegate"===a.content},v=function(e,t){var n=e.xml.find((function(e){return e.name===t.toLowerCase()}));if(n)return n.xmlChildren.filter((function(e){var t=e.children.find((function(e){return"type"===e.name&&"Exec"===e.content})),n=e.children.find((function(e){return"name"===e.name&&"Target"===e.content}));return!t&&!n}))},S=function(e,t){var n=e.xml.find((function(e){return"imgpath"===e.name})).content.replace(/^\.\./,e.dirname),a=t.find((function(e){return e.node.parent.relativePath===n}));if(a)return a.node.fixed},Z={name:"1ubdimo",styles:"margin:48px 0;text-align:center;font-style:italic"},x={name:"1dabe76",styles:"padding-bottom:24px"},w={name:"1dabe76",styles:"padding-bottom:24px"},E={name:"1hsk7vb",styles:"color:#ACA599;margin-bottom:0;font-style:italic"},L={name:"1dabe76",styles:"padding-bottom:24px"},I=function(e){var t=e.data,n=e.pageContext,s=""+n.classParent,l="Generated API documentation for "+n.classParent,f=n.slug,p=t.members.edges,m=t.images.edges;p.sort((function(e,t){var n=b(e.node),a=b(t.node);return n&&a?0:!n&&a?1:n&&!a?-1:0})),p.sort((function(e,t){var n="Variable"===y(e.node,"type").content,a="Variable"===y(t.node,"type").content;return n&&a?0:!n&&a?1:n&&!a?-1:0}));var g=p.filter((function(e){var t=e.node;return"Variable"===y(t,"type").content})),I=p.filter((function(e){var t=e.node;return b(t)})),R=p.filter((function(e){var t=e.node;return"Node"===y(t,"type").content&&!b(t)})),k=p.map((function(e){return{depth:2,value:e.node.name}}));return(0,o.tZ)(a.Fragment,null,(0,o.tZ)(i.Z,{title:s,description:l,slug:f,image:""}),(0,o.tZ)(r.Z,{disableTableOfContents:!1,title:s,headings:k,slug:f},(0,o.tZ)("h2",null,"Properties"),g.map((function(e){var t=e.node;return(0,o.tZ)("div",{key:t.name},(0,o.tZ)("div",{css:L},(0,o.tZ)("h3",{id:(0,d.Z)(t.name)},t.name),(0,o.tZ)("p",null,y(t,"description").content),(0,o.tZ)("p",{css:E},function(e){var t=v(e,"outputs");if(t&&t.length){var n=t[0];if(n&&n.children){var a=n.children.find((function(e){return"type"===e.name}));if(a)return a.content}}}(t))),(0,o.tZ)("hr",null))})),(0,o.tZ)("h2",null,"Events"),I.map((function(e){var t=e.node;return(0,o.tZ)("div",{key:t.name},(0,o.tZ)("div",{css:w},(0,o.tZ)("h3",{id:(0,d.Z)(t.name)},t.name),(0,o.tZ)("p",null,y(t,"description").content),(0,o.tZ)(u,{fixed:S(t,m)}),(0,o.tZ)(h,{node:t,type:"Inputs"}),(0,o.tZ)(h,{node:t,type:"Outputs"})),(0,o.tZ)("hr",null))})),(0,o.tZ)("h2",null,"Functions"),R.map((function(e){var t=e.node;return(0,o.tZ)("div",{key:t.name},(0,o.tZ)("div",{css:x},(0,o.tZ)("h3",{id:(0,d.Z)(t.name)},t.name),(0,o.tZ)("p",null,y(t,"description").content),(0,o.tZ)(u,{fixed:S(t,m)}),(0,o.tZ)(h,{node:t,type:"Inputs"}),(0,o.tZ)(h,{node:t,type:"Outputs"})),(0,o.tZ)("hr",null))})),(0,o.tZ)("p",{css:Z},"API documentation generated thanks to ",(0,o.tZ)(c.Link,{to:"http://kantandev.com/free/kantan-doc-gen"},"Kantan Doc Gen"))))}}}]);
//# sourceMappingURL=component---src-templates-api-template-js-dab7a52b9824e1b8d962.js.map