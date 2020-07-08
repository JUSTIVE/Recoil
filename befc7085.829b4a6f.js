(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),a=(n(0),n(164));const o={},i={permalink:"/blog/2020/05/30/0.0.8-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2020-05-30-0.0.8-released.md",source:"@site/blog/2020-05-30-0.0.8-released.md",description:"# Recoil 0.0.8",date:"2020-05-30T00:00:00.000Z",tags:[],title:"0.0.8-released",readingTime:3.085,truncated:!1,prevItem:{title:"0.0.10-released",permalink:"/blog/2020/06/18/0.0.10-released"}},l=[{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Features",id:"features",children:[{value:"TypeScript support",id:"typescript-support",children:[]},{value:"<code>atomFamily</code> and <code>selectorFamily</code>",id:"atomfamily-and-selectorfamily",children:[]},{value:"Concurrency helpers",id:"concurrency-helpers",children:[]},{value:"<code>constSelector</code> and <code>errorSelector</code>",id:"constselector-and-errorselector",children:[]},{value:"readOnlySelector",id:"readonlyselector",children:[]}]},{value:"What&#39;s Next",id:"whats-next",children:[]}],c={rightToc:l};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"recoil-008"},"Recoil 0.0.8"),Object(a.b)("p",null,"Today we are releasing Recoil 0.0.8. It contains bug fixes and new features. Thanks so much to everyone who contributed to this release! It's been amazing to see so many people contribute."),Object(a.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Fixed a bug where atoms that stored self-referential structures would cause an infinite loop. (@n3tr in #153)"),Object(a.b)("li",{parentName:"ul"},"Fixed bugs affecting Server-Side Rendering. (@sbaudray in #53)"),Object(a.b)("li",{parentName:"ul"},"Fixed build system and repository syncing problems. Many people contributed to this, especially @mondaychen and including\n@claudiopro, @dustinsoftware, @jacques-blom, @jaredpalmer, @kentcdodds, @leushkin, and @tony-go. It remains to get Jest and Flow to behave the same between internal and OSS.")),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("h3",{id:"typescript-support"},"TypeScript support"),Object(a.b)("p",null,"TypeScript definitions are now available via the ",Object(a.b)("inlineCode",{parentName:"p"},"DefinitelyTyped")," repository."),Object(a.b)("h3",{id:"atomfamily-and-selectorfamily"},Object(a.b)("inlineCode",{parentName:"h3"},"atomFamily")," and ",Object(a.b)("inlineCode",{parentName:"h3"},"selectorFamily")),Object(a.b)("p",null,"These utilities help you create collections of related atoms or selectors, one for each value of some parameter. Instaed of manually creating a memoized function that returns an atom or selector, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"atomFamily")," and ",Object(a.b)("inlineCode",{parentName:"p"},"selectorFamily"),". In the future, these utilities will also help with memory management."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"atomFamily")," function returns a function from some parameter to an atom, creating a new atom for each value of the parameter that is passed in. For example, suppose you wanted to store a set of coordinates ",Object(a.b)("inlineCode",{parentName:"p"},"{x: number, y: number}")," for every member of a collection identified by some ",Object(a.b)("inlineCode",{parentName:"p"},"ID"),". Then you could write:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"const coordinatesForID = atomFamily<{x: number, y: number}, ID>({\n    key: 'coordinatesForID',\n    default: {x: 0, y: 0},\n});\n")),Object(a.b)("p",null,"and then access that state as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"function MyComponent({id}) {\n    const [coordinates, setCoordinates] = useRecoilState(\n        coordinatesForID(id)\n    );\n    ...\n}\n")),Object(a.b)("p",null,"Each ",Object(a.b)("inlineCode",{parentName:"p"},"ID")," passed to ",Object(a.b)("inlineCode",{parentName:"p"},"coordinatesForID")," will get its own independent atom containing the coordinates. Each of these atoms has its own subscriptions, so a component that uses the state for a single ID will only be subscribed to changes to that one ID."),Object(a.b)("p",null,"Similarly, ",Object(a.b)("inlineCode",{parentName:"p"},"selectorFamily")," lets you create a different selector for each value of some parameter. For example, suppose you wanted to take each of those coordinates and rotate them by 180 degrees:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"const rotatedCoordinatesForID = selectorFamily<{x: number, y: number}, ID>({\n    key: 'rotatedCoordinatesForID',\n    get: id => ({get}) => {\n        const coordinates = get(coordinatesForID(id));\n        return {\n            x: -coordinates.x,\n            y: -coordinates.y,\n        };\n    }\n});\n")),Object(a.b)("p",null,"Note that the ",Object(a.b)("inlineCode",{parentName:"p"},"get")," property of a selector family is a function that takes the parameter (in this case ID) and returns a function with a signature identical to the ",Object(a.b)("inlineCode",{parentName:"p"},"get")," property of a single selector. In general, this is how all of the options for atom families and selector families work."),Object(a.b)("h3",{id:"concurrency-helpers"},"Concurrency helpers"),Object(a.b)("p",null,"We've introduced selector families for controlling concurrency in async selectors:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"waitForAll"),": requests all dependencies in parallel and waits for all of them to become available."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"waitForAny"),": requests all dependencies in parallel and waits for any one of them to become available."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"waitForNone"),": requests all dependencies in parallel but doesn't wait for any of them."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"noWait")," requests a single dependency but doesn't wait for it to become available.")),Object(a.b)("p",null,"These can be used to retireve multiple dependencies in parallel and to write logic conditional on the status of an upstream dependency. For example, you can write a selector that conditionally provides a default value while an async process is in flight instead of propagating that loading state down to components."),Object(a.b)("h3",{id:"constselector-and-errorselector"},Object(a.b)("inlineCode",{parentName:"h3"},"constSelector")," and ",Object(a.b)("inlineCode",{parentName:"h3"},"errorSelector")),Object(a.b)("p",null,"These selector families simply return a constant value or always throw a given error, respectively."),Object(a.b)("h3",{id:"readonlyselector"},"readOnlySelector"),Object(a.b)("p",null,"This simply wraps a read-write ",Object(a.b)("inlineCode",{parentName:"p"},"RecoilState")," in a read-only interface."),Object(a.b)("h2",{id:"whats-next"},"What's Next"),Object(a.b)("p",null,"We're working on improvements to the observation and persistence APIs, improved speed and memory management, and support for Concurrent Mode. Thanks so much for trying Recoil, we hope you'll stick around and see what it becomes!"))}s.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(m,l({ref:t},s,{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);