import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,f as r,g as c,c as l,b as h,d as u,h as f,j as m,k as p,w as d,n as v}from"./client.0a37f4b2.js";function g(t){let s,a,g,j,b,w,x=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o(x),b=e(),w=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=h(g);j=u(s,x),s.forEach(r),b=c(t),w=l(t,"DIV",{class:!0}),h(w).forEach(r),this.h()},h(){f(w,"class","content svelte-emm3f3")},m(t,s){m(t,a,s),m(t,g,s),p(g,j),m(t,b,s),m(t,w,s),w.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&x!==(x=t[0].title+"")&&d(j,x),1&a&&E!==(E=t[0].html+"")&&(w.innerHTML=E)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(b),t&&r(w)}}}async function j({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function b(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,b,g,a,{post:0})}}export{j as preload};