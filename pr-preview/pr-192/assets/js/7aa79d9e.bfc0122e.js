"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5331],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var l=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,l,n=function(e,t){if(null==e)return{};var o,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)o=i[l],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)o=i[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=l.createContext({}),c=function(e){var t=l.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(o),h=n,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||i;return o?l.createElement(d,r(r({ref:t},u),{},{components:o})):l.createElement(d,r({ref:t},u))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:n,r[1]=a;for(var c=2;c<i;c++)r[c]=o[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,o)}h.displayName="MDXCreateElement"},1420:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var l=o(7462),n=(o(7294),o(3905));const i={slug:"lets-roll-community-call",title:"Let's Roll - Rollkit's community call",authors:["AlCJoseph"],tags:["Rollkit"],description:"Rollkit is kicking off its community call, Let's Roll, to bring together community members to share knowledge, collaborate on new ideas, and inspire each other to push the limits of what's possible with Rollkit."},r=void 0,a={permalink:"/pr-preview/pr-192/blog/lets-roll-community-call",editUrl:"https://github.com/rollkit/docs/tree/main/blog/2023-03-08-lets-roll.mdx",source:"@site/blog/2023-03-08-lets-roll.mdx",title:"Let's Roll - Rollkit's community call",description:"Rollkit is kicking off its community call, Let's Roll, to bring together community members to share knowledge, collaborate on new ideas, and inspire each other to push the limits of what's possible with Rollkit.",date:"2023-03-08T00:00:00.000Z",formattedDate:"March 8, 2023",tags:[{label:"Rollkit",permalink:"/pr-preview/pr-192/blog/tags/rollkit"}],readingTime:3.245,hasTruncateMarker:!1,authors:[{name:"Joseph Al-Chami",url:"https://github.com/AlCJoseph",imageURL:"https://github.com/AlCJoseph.png",key:"AlCJoseph"}],frontMatter:{slug:"lets-roll-community-call",title:"Let's Roll - Rollkit's community call",authors:["AlCJoseph"],tags:["Rollkit"],description:"Rollkit is kicking off its community call, Let's Roll, to bring together community members to share knowledge, collaborate on new ideas, and inspire each other to push the limits of what's possible with Rollkit."},nextItem:{title:"Sovereign rollups on Bitcoin with Rollkit",permalink:"/pr-preview/pr-192/blog/sovereign-rollups-on-bitcoin"}},s={authorsImageUrls:[void 0]},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Just merge it",id:"just-merge-it",level:2},{value:"What is Let\u2019s Roll?",id:"what-is-lets-roll",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rollkit blog cover",src:o(5756).Z,width:"3000",height:"1500"})),(0,n.kt)("p",null,"Last Sunday, we released the first ",(0,n.kt)("a",{parentName:"p",href:"https://rollkit.dev/blog/sovereign-rollups-on-bitcoin/"},"research implementation")," that allows Rollkit rollups to use Bitcoin for data availability. "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/RollkitDev/status/1632438374513676288"},"This announcement")," has sparked a lot of curiosity and excitement in the community. Many developers are starting to imagine what the future of sovereign rollups could look like on Bitcoin and other data availability layers. They\u2019re looking for ways to innovate using this integration, to replicate it on other layer 1 blockchains, to identify challenges and to suggest improvements."),(0,n.kt)("p",null,"We believe that there\u2019s a lot of innovation to be done and a lot of challenges to be solved, and that together as a community, we can collaborate on building the future of rollup frameworks."),(0,n.kt)("p",null,"That\u2019s why we\u2019re happy to announce that we\u2019re launching a Rollkit\u2019s community call: Let\u2019s Roll."),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rollkit is launching its community call, Let\u2019s Roll. You can subscribe to the community calendar ",(0,n.kt)("a",{parentName:"p",href:"https://calendar.google.com/calendar/u/0/embed?src=c_11a8d6a470ca9c07b131ab1ea213ac124a3061a9d6986bb208d88afbcc4bb3d2@group.calendar.google.com&ctz=America/Toronto"},"here"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The first meeting is scheduled on ",(0,n.kt)("a",{parentName:"p",href:"https://us06web.zoom.us/j/83308619122"},"Zoom")," for March 21, 2023, 6pm CET(12pm EST, 9am PST).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Builders using Rollkit can now present their projects at Let\u2019s Roll. Reach out to us on ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/rollkit"},"Telegram")," "))),(0,n.kt)("h2",{id:"just-merge-it"},"Just merge it"),(0,n.kt)("p",null,"Rollup development is rapidly evolving, with new types of rollups such as sovereign and pessimistic rollups emerging, and with new possibilities of using layer 1-blockchains as data availability layers. Rollkit is at the forefront of the rollup movement offering a modular framework for rollups as an open-source public good. "),(0,n.kt)("p",null,"However, Rollkit's true potential lies in its community of developers and users who bring their unique perspectives, skills, and expertise to the table. When Rollkit integrates a new data availability layer, its community members are best suited to improve this integration and use it in ways that truly benefit the community. Therefore, we invite developers from different communities and skill sets to join us and contribute to Rollkit\u2019s development."),(0,n.kt)("p",null,"By contributing to Rollkit, we reduce fragmentation, duplicated features and bugs, and we ensure the continuous improvement of Rollkit. By doing that we forge a stronger and bigger community. "),(0,n.kt)("p",null,"One framework is bigger than the sum of all its forks. Together we can build something for all developers and builders to easily use."),(0,n.kt)("p",null,"Our promise, as core contributors, is to do our best to make \u201cjust merge it\u201d a reality. We strive to empower developers to contribute to Rollkit and ensure that their contributions are integrated. "),(0,n.kt)("p",null,"That's why we believe it's time to bring our community together to share knowledge, collaborate on new ideas, and inspire each other to push the limits of what's possible with Rollkit."),(0,n.kt)("h2",{id:"what-is-lets-roll"},"What is Let\u2019s Roll?"),(0,n.kt)("p",null,"Let's Roll is a dynamic community-focused meeting that brings together all Rollkit\u2019s contributors to drive the innovation and development of Rollkit."),(0,n.kt)("p",null,"This meeting serves as a platform for sharing knowledge, discussing the latest updates, and exploring new ideas. Rollkit's contributors will demonstrate the most recent features and advancements, while community members will have the chance to ask questions, provide feedback, and collaborate on new projects."),(0,n.kt)("p",null,"Building open source means encouraging collaboration and teamwork among all developers. Sharing code and ideas will help us build a better framework more efficiently."),(0,n.kt)("p",null,"The meeting will be hosted on ",(0,n.kt)("a",{parentName:"p",href:"https://us06web.zoom.us/j/83308619122"},"Zoom"),". Subscribe to the following ",(0,n.kt)("a",{parentName:"p",href:"https://calendar.google.com/calendar/u/0/r?cid=c_11a8d6a470ca9c07b131ab1ea213ac124a3061a9d6986bb208d88afbcc4bb3d2@group.calendar.google.com"},"Google calendar")," so that you can be notified of future community calls."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Let's Roll is an exciting opportunity for the Rollkit community to come together, share ideas, and collaborate on the future of this powerful framework.\nWith demos of the latest developments, a discussion of the roadmap and vision, and a dedicated Q&A and feedback session, Let's Roll is an opportunity to stay informed and engaged with the project."),(0,n.kt)("p",null,"We invite everyone interested in Rollkit and rollup development to join us. Your feedback, ideas, and input are essential to the success of Rollkit, and we look forward to seeing what we can achieve together."),(0,n.kt)("p",null,"So, join us, roll with us, and let's shape the future of rollup frameworks together."))}p.isMDXComponent=!0},5756:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/lets-roll-a8b580bec3f0ea690483252f65daa0c1.jpg"}}]);