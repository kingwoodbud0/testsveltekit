import{s as w}from"../chunks/scheduler.b0c1c2c3.js";import{S as T,i as j,r as y,u as z,v as A,d as D,t as E,w as L,m as b,e as h,n as S,a as m,f as i,z as M,g as d,s as O,h as p,j as _,c as P,k as g,x as f,o as q}from"../chunks/index.cdfe193a.js";import{L as C}from"../chunks/_layout.c4b363a6.js";function $(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}const F=[{name:"Drew",text:"First"},{name:"Matthew",text:"Second"},{name:"Jon",text:"Third"}],I=!0;function J(){return{items:F}}const Q=Object.freeze(Object.defineProperty({__proto__:null,load:J,prerender:I},Symbol.toStringTag,{value:"Module"}));function v(l,a,o){const e=l.slice();return e[1]=a[o],e}function x(l){let a,o,e=l[1].name+"",t,n,c;return{c(){a=d("div"),o=d("a"),t=b(e),c=O(),this.h()},l(s){a=p(s,"DIV",{});var r=_(a);o=p(r,"A",{href:!0});var u=_(o);t=S(u,e),u.forEach(i),c=P(r),r.forEach(i),this.h()},h(){g(o,"href",n=`/orders/person/${l[1].name}`)},m(s,r){m(s,a,r),f(a,o),f(o,t),f(a,c)},p(s,r){r&1&&e!==(e=s[1].name+"")&&q(t,e),r&1&&n!==(n=`/orders/person/${s[1].name}`)&&g(o,"href",n)},d(s){s&&i(a)}}}function N(l){let a,o,e=$(l[0].items),t=[];for(let n=0;n<e.length;n+=1)t[n]=x(v(l,e,n));return{c(){a=b(`Testing...
`);for(let n=0;n<t.length;n+=1)t[n].c();o=h()},l(n){a=S(n,`Testing...
`);for(let c=0;c<t.length;c+=1)t[c].l(n);o=h()},m(n,c){m(n,a,c);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(n,c);m(n,o,c)},p(n,c){if(c&1){e=$(n[0].items);let s;for(s=0;s<e.length;s+=1){const r=v(n,e,s);t[s]?t[s].p(r,c):(t[s]=x(r),t[s].c(),t[s].m(o.parentNode,o))}for(;s<t.length;s+=1)t[s].d(1);t.length=e.length}},d(n){n&&(i(a),i(o)),M(t,n)}}}function V(l){let a,o;return a=new C({props:{$$slots:{default:[N]},$$scope:{ctx:l}}}),{c(){y(a.$$.fragment)},l(e){z(a.$$.fragment,e)},m(e,t){A(a,e,t),o=!0},p(e,[t]){const n={};t&17&&(n.$$scope={dirty:t,ctx:e}),a.$set(n)},i(e){o||(D(a.$$.fragment,e),o=!0)},o(e){E(a.$$.fragment,e),o=!1},d(e){L(a,e)}}}function B(l,a,o){let{data:e}=a;return l.$$set=t=>{"data"in t&&o(0,e=t.data)},[e]}class R extends T{constructor(a){super(),j(this,a,B,V,w,{data:0})}}export{R as component,Q as universal};
