(self.webpackChunkspace_tourism=self.webpackChunkspace_tourism||[]).push([[962],{3962:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return x}});var i=a(2791),o=a(6030),r=a(3212),t=a(184),c=function(){var e,n,a,i,c,l,s,d,u,m=(0,o.v9)((function(e){return e.spaceTourism})).crewId-1;return(0,t.jsxs)("div",{className:"crew--details",children:[(0,t.jsx)("h4",{children:null===r.kQ||void 0===r.kQ||null===(e=r.kQ.crew)||void 0===e||null===(n=e.entries)||void 0===n||null===(a=n[m])||void 0===a?void 0:a.role}),(0,t.jsx)("h3",{children:null===r.kQ||void 0===r.kQ||null===(i=r.kQ.crew)||void 0===i||null===(c=i.entries)||void 0===c||null===(l=c[m])||void 0===l?void 0:l.name}),(0,t.jsx)("p",{children:null===r.kQ||void 0===r.kQ||null===(s=r.kQ.crew)||void 0===s||null===(d=s.entries)||void 0===d||null===(u=d[m])||void 0===u?void 0:u.bio})]})};c.displayName="CrewDetails";var l=i.memo(c),s=a(5500),d=function(e){var n=e.id,a=(0,o.I0)(),i=(0,o.v9)((function(e){return e.spaceTourism})).crewId;return(0,t.jsx)("li",{className:"crew--nav-item",children:(0,t.jsx)("button",{className:"".concat(i===n?"active":""),onClick:function(){a(s.d.updateEntry({type:r.qB,id:n}))}})})};d.displayName="CrewNavItem";var u=i.memo(d),m=function(){var e,n=null===r.kQ||void 0===r.kQ||null===(e=r.kQ.crew)||void 0===e?void 0:e.entries;return(0,t.jsx)("ul",{className:"crew--nav-items",children:n.map((function(e){return(0,t.jsx)(u,{id:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.id)}))})};m.displayName="CrewNavItems";var g=i.memo(m),p=function(){return(0,t.jsx)("div",{className:"crew--navbar",children:(0,t.jsx)(g,{})})};p.displayName="CrewNavbar";var v=i.memo(p),h=function(e){e.name;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{}),(0,t.jsx)(v,{})]})};h.displayName="LeftPanel";var w=i.memo(h),k=a(8073),f=a(1918),j={pageName:r.qB,imageType:"png",checkMode:!1},b=function(){var e,n=(0,o.v9)((function(e){return e.spaceTourism})).crewId,a=(0,f.d)().width>r.g7,i=(0,k.f)(j),c=i.imageSrc,l=i.imageAlt;return(0,t.jsx)("div",{className:"crew--image",children:(0,t.jsx)("img",{style:{height:"".concat(a?(e=n,"1"===e?"100%":"90%"):"")},src:c,alt:l})})};b.displayName="RightPanel";var y=i.memo(b),N=function(){return(0,t.jsxs)("section",{className:"crew",children:[(0,t.jsx)("div",{className:"crew--left-panel",children:(0,t.jsx)(w,{})}),(0,t.jsxs)("div",{className:"crew--right-panel",children:[(0,t.jsx)(y,{}),(0,t.jsx)("hr",{})]})]})};N.displayName="Crew";var x=i.memo(N)},8073:function(e,n,a){"use strict";a.d(n,{f:function(){return s}});var i=a(8152),o=a(2791),r=a(6030),t=a(1918),c=a(3212),l=function(e,n){var a,i,o,r=function(e,n){var a;switch(e){case c.rE:a=n.destinationId;break;case c.qB:a=n.crewId;break;case c.Rs:a=n.technologyId}return a}(e,n),t=null===c.kQ||void 0===c.kQ||null===(a=c.kQ[e])||void 0===a||null===(i=a.entries)||void 0===i||null===(o=i[r-1])||void 0===o?void 0:o.name;return{imageName:null===t||void 0===t?void 0:t.toLowerCase().replace(" ","-"),imageAlt:t}},s=function(e){var n=e.pageName,c=e.imageType,s=e.checkMode,d=(0,r.v9)((function(e){return e.spaceTourism})),u=(0,t.d)().width,m=l(n,d),g=m.imageName,p=m.imageAlt,v=o.useState(""),h=(0,i.Z)(v,2),w=h[0],k=h[1];return o.useEffect((function(){a(585)("./".concat(n,"/image-").concat(g).concat(function(e,n){return n?e>1024?"-portrait":"-landscape":""}(u,s),".").concat(c)).then((function(e){k(e.default)}))}),[u,s,n,g,c,k]),{imageSrc:w,imageAlt:p}}},585:function(e,n,a){var i={"./crew/background-crew-desktop.jpg":[3646,646],"./crew/background-crew-mobile.jpg":[8869,869],"./crew/background-crew-tablet.jpg":[7224,553],"./crew/image-anousheh-ansari.png":[2320,320],"./crew/image-anousheh-ansari.webp":[7297,297],"./crew/image-douglas-hurley.png":[1218,218],"./crew/image-douglas-hurley.webp":[4140,140],"./crew/image-mark-shuttleworth.png":[8895,100],"./crew/image-mark-shuttleworth.webp":[4294,294],"./crew/image-victor-glover.png":[8087,87],"./crew/image-victor-glover.webp":[8795,795],"./destination/background-destination-desktop.jpg":[8244,244],"./destination/background-destination-mobile.jpg":[8719,719],"./destination/background-destination-tablet.jpg":[779,224],"./destination/image-europa.png":[3543,543],"./destination/image-europa.webp":[7564,564],"./destination/image-mars.png":[9808,808],"./destination/image-mars.webp":[8804,804],"./destination/image-moon.png":[3641,641],"./destination/image-moon.webp":[9008,8],"./destination/image-titan.png":[946,946],"./destination/image-titan.webp":[8732,732],"./home/background-home-desktop.jpg":[7881,881],"./home/background-home-mobile.jpg":[7160,160],"./home/background-home-tablet.jpg":[1895,895],"./logo.png":[6949,949],"./shared/icon-close.ico":[7515],"./shared/icon-hamburger.ico":[2111],"./shared/logo.ico":[9765],"./technology/background-technology-desktop.jpg":[420,420],"./technology/background-technology-mobile.jpg":[448,448],"./technology/background-technology-tablet.jpg":[7086,86],"./technology/image-launch-vehicle-landscape.jpg":[6496,496],"./technology/image-launch-vehicle-portrait.jpg":[4599,599],"./technology/image-space-capsule-landscape.jpg":[4515,515],"./technology/image-space-capsule-portrait.jpg":[3828,828],"./technology/image-spaceport-landscape.jpg":[7381,381],"./technology/image-spaceport-portrait.jpg":[2505,505]};function o(e){if(!a.o(i,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=i[e],o=n[0];return Promise.all(n.slice(1).map(a.e)).then((function(){return a.t(o,17)}))}o.keys=function(){return Object.keys(i)},o.id=585,e.exports=o}}]);
//# sourceMappingURL=962.6d7d8902.chunk.js.map