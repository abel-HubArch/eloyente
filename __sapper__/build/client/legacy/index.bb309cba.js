import{_ as t,a as n,b as r,c as e,i as o,d as s,S as c,s as f,e as a,t as u,f as i,g as l,h,j as v,p,k as g,l as d,B as m,m as R,q as y,o as b,r as E,n as j,C as B}from"./client.f233f5db.js";function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,s=n(t);if(e){var c=n(this).constructor;o=Reflect.construct(s,arguments,c)}else o=s.apply(this,arguments);return r(this,o)}}function L(t,n,r){var e=t.slice();return e[1]=n[r],e}function $(t){var n,r,e,o,s=t[1].title+"";return{c:function(){n=a("li"),r=a("a"),e=u(s),this.h()},l:function(t){n=i(t,"LI",{});var o=l(n);r=i(o,"A",{rel:!0,href:!0});var c=l(r);e=h(c,s),c.forEach(v),o.forEach(v),this.h()},h:function(){p(r,"rel","prefetch"),p(r,"href",o="blog/"+t[1].slug)},m:function(t,o){g(t,n,o),d(n,r),d(r,e)},p:function(t,n){1&n&&s!==(s=t[1].title+"")&&m(e,s),1&n&&o!==(o="blog/"+t[1].slug)&&p(r,"href",o)},d:function(t){t&&v(n)}}}function k(t){for(var n,r,e,o,s,c=t[0],f=[],m=0;m<c.length;m+=1)f[m]=$(L(t,c,m));return{c:function(){n=R(),r=a("h1"),e=u("Recent posts"),o=R(),s=a("ul");for(var t=0;t<f.length;t+=1)f[t].c();this.h()},l:function(t){y('[data-svelte="svelte-hfp9t8"]',document.head).forEach(v),n=b(t),r=i(t,"H1",{});var c=l(r);e=h(c,"Recent posts"),c.forEach(v),o=b(t),s=i(t,"UL",{class:!0});for(var a=l(s),u=0;u<f.length;u+=1)f[u].l(a);a.forEach(v),this.h()},h:function(){document.title="Blog",p(s,"class","svelte-1frg2tf")},m:function(t,c){g(t,n,c),g(t,r,c),d(r,e),g(t,o,c),g(t,s,c);for(var a=0;a<f.length;a+=1)f[a].m(s,null)},p:function(t,n){var r=E(n,1)[0];if(1&r){var e;for(c=t[0],e=0;e<c.length;e+=1){var o=L(t,c,e);f[e]?f[e].p(o,r):(f[e]=$(o),f[e].c(),f[e].m(s,null))}for(;e<f.length;e+=1)f[e].d(1);f.length=c.length}},i:j,o:j,d:function(t){t&&v(n),t&&v(r),t&&v(o),t&&v(s),B(f,t)}}}function q(){return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function A(t,n,r){var e=n.posts;return t.$$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var C=function(n){t(a,c);var r=x(a);function a(t){var n;return e(this,a),n=r.call(this),o(s(n),t,A,k,f,{posts:0}),n}return a}();export default C;export{q as preload};