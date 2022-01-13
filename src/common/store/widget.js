/**
 * 该文件开源版本中 暂未开放源码，但可以免费无限制使用。
 * 【仅此1个文件是未开源的，接口见 widget.d.ts 】
 *
 * 如果需要完整代码，可以访问了解更多：http://mars3d.cn/details.html?id=jcxm-vue
 *
 * 编译日期：2022-1-13 18:01:00
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 */

/* eslint-disable */
(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e(require("vuex"),require("vue"),require("uuid")):"function"===typeof define&&define.amd?define(["vuex",,"uuid"],e):"object"===typeof exports?exports["ts2js"]=e(require("vuex"),require("vue"),require("uuid")):t["ts2js"]=e(t["vuex"],t["Vue"],t["uuid"])})("undefined"!==typeof self?self:this,(function(t,e,n){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fae3")}({"00ee":function(t,e,n){var r=n("b622"),o=r("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},"0366":function(t,e,n){var r=n("e330"),o=n("59ed"),i=r(r.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?i(t,e):function(){return t.apply(e,arguments)}}},"057f":function(t,e,n){var r=n("c6b6"),o=n("fc6a"),i=n("241c").f,c=n("4dae"),u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return c(u)}};t.exports.f=function(t){return u&&"Window"==r(t)?a(t):i(o(t))}},"06cf":function(t,e,n){var r=n("83ab"),o=n("c65b"),i=n("d1e7"),c=n("5c6c"),u=n("fc6a"),a=n("a04b"),f=n("1a2d"),s=n("0cfb"),d=Object.getOwnPropertyDescriptor;e.f=r?d:function(t,e){if(t=u(t),e=a(e),s)try{return d(t,e)}catch(n){}if(f(t,e))return c(!o(i.f,t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0b42":function(t,e,n){var r=n("da84"),o=n("e8b5"),i=n("68ee"),c=n("861d"),u=n("b622"),a=u("species"),f=r.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,i(e)&&(e===f||o(e.prototype))?e=void 0:c(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?f:e}},"0cfb":function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e,n){var r=n("da84"),o=r.String;t.exports=function(t){try{return o(t)}catch(e){return"Object"}}},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("785a"),c=n("17c2"),u=n("9112"),a=function(t){if(t&&t.forEach!==c)try{u(t,"forEach",c)}catch(e){t.forEach=c}};for(var f in o)o[f]&&a(r[f]&&r[f].prototype);a(i)},1626:function(t,e){t.exports=function(t){return"function"==typeof t}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1a2d":function(t,e,n){var r=n("e330"),o=n("7b0b"),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1d80":function(t,e,n){var r=n("da84"),o=r.TypeError;t.exports=function(t){if(void 0==t)throw o("Can't call method on "+t);return t}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"23cb":function(t,e,n){var r=n("5926"),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},"23e7":function(t,e,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),c=n("6eeb"),u=n("ce4e"),a=n("e893"),f=n("94ca");t.exports=function(t,e){var n,s,d,p,l,b,v=t.target,y=t.global,h=t.stat;if(s=y?r:h?r[v]||u(v,{}):(r[v]||{}).prototype,s)for(d in e){if(l=e[d],t.noTargetGet?(b=o(s,d),p=b&&b.value):p=s[d],n=f(y?d:v+(h?".":"#")+d,t.forced),!n&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),c(s,d,l,t)}}},"241c":function(t,e,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},2532:function(t,e,n){"use strict";var r=n("23e7"),o=n("e330"),i=n("5a34"),c=n("1d80"),u=n("577e"),a=n("ab13"),f=o("".indexOf);r({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~f(u(c(this)),u(i(t)),arguments.length>1?arguments[1]:void 0)}})},"2ba4":function(t,e){var n=Function.prototype,r=n.apply,o=n.bind,i=n.call;t.exports="object"==typeof Reflect&&Reflect.apply||(o?i.bind(r):function(){return i.apply(r,arguments)})},"2d00":function(t,e,n){var r,o,i=n("da84"),c=n("342f"),u=i.process,a=i.Deno,f=u&&u.versions||a&&a.version,s=f&&f.v8;s&&(r=s.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&c&&(r=c.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),t.exports=o},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"37e8":function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("825a"),c=n("fc6a"),u=n("df75");t.exports=r?Object.defineProperties:function(t,e){i(t);var n,r=c(e),a=u(e),f=a.length,s=0;while(f>s)o.f(t,n=a[s++],r[n]);return t}},"3a9b":function(t,e,n){var r=n("e330");t.exports=r({}.isPrototypeOf)},"3bbe":function(t,e,n){var r=n("da84"),o=n("1626"),i=r.String,c=r.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw c("Can't set "+i(t)+" as a prototype")}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,o=n("577e"),i=n("69f3"),c=n("7dd0"),u="String Iterator",a=i.set,f=i.getterFor(u);c(String,"String",(function(t){a(this,{type:u,string:o(t),index:0})}),(function(){var t,e=f(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=r(n,o),e.index+=t.length,{value:t,done:!1})}))},"3f8c":function(t,e){t.exports={}},"428f":function(t,e,n){var r=n("da84");t.exports=r},"44ad":function(t,e,n){var r=n("da84"),o=n("e330"),i=n("d039"),c=n("c6b6"),u=r.Object,a=o("".split);t.exports=i((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==c(t)?a(t,""):u(t)}:u},"44d2":function(t,e,n){var r=n("b622"),o=n("7c73"),i=n("9bf2"),c=r("unscopables"),u=Array.prototype;void 0==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},"44e7":function(t,e,n){var r=n("861d"),o=n("c6b6"),i=n("b622"),c=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==o(t))}},"485a":function(t,e,n){var r=n("da84"),o=n("c65b"),i=n("1626"),c=n("861d"),u=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&i(n=t.toString)&&!c(r=o(n,t)))return r;if(i(n=t.valueOf)&&!c(r=o(n,t)))return r;if("string"!==e&&i(n=t.toString)&&!c(r=o(n,t)))return r;throw u("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),o=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),o=n("23cb"),i=n("07fa"),c=function(t){return function(e,n,c){var u,a=r(e),f=i(a),s=o(c,f);if(t&&n!=n){while(f>s)if(u=a[s++],u!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"4dae":function(t,e,n){var r=n("da84"),o=n("23cb"),i=n("07fa"),c=n("8418"),u=r.Array,a=Math.max;t.exports=function(t,e,n){for(var r=i(t),f=o(e,r),s=o(void 0===n?r:n,r),d=u(a(s-f,0)),p=0;f<s;f++,p++)c(d,p,t[f]);return d.length=p,d}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,i=n("1dde"),c=i("filter");r({target:"Array",proto:!0,forced:!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"50c4":function(t,e,n){var r=n("5926"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5692:function(t,e,n){var r=n("c430"),o=n("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),o=n("e330"),i=n("241c"),c=n("7418"),u=n("825a"),a=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(u(t)),n=c.f;return n?a(e,n(t)):e}},"577e":function(t,e,n){var r=n("da84"),o=n("f5df"),i=r.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},5880:function(e,n){e.exports=t},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},"59ed":function(t,e,n){var r=n("da84"),o=n("1626"),i=n("0d51"),c=r.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not a function")}},"5a34":function(t,e,n){var r=n("da84"),o=n("44e7"),i=r.TypeError;t.exports=function(t){if(o(t))throw i("The method doesn't accept regular expressions");return t}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),o=n("1a2d"),i=Function.prototype,c=r&&Object.getOwnPropertyDescriptor,u=o(i,"name"),a=u&&"something"===function(){}.name,f=u&&(!r||r&&c(i,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:f}},6547:function(t,e,n){var r=n("e330"),o=n("5926"),i=n("577e"),c=n("1d80"),u=r("".charAt),a=r("".charCodeAt),f=r("".slice),s=function(t){return function(e,n){var r,s,d=i(c(e)),p=o(n),l=d.length;return p<0||p>=l?t?"":void 0:(r=a(d,p),r<55296||r>56319||p+1===l||(s=a(d,p+1))<56320||s>57343?t?u(d,p):r:t?f(d,p,p+2):s-56320+(r-55296<<10)+65536)}};t.exports={codeAt:s(!1),charAt:s(!0)}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"68ee":function(t,e,n){var r=n("e330"),o=n("d039"),i=n("1626"),c=n("f5df"),u=n("d066"),a=n("8925"),f=function(){},s=[],d=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,l=r(p.exec),b=!p.exec(f),v=function(t){if(!i(t))return!1;try{return d(f,s,t),!0}catch(e){return!1}},y=function(t){if(!i(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return b||!!l(p,a(t))}catch(e){return!0}};y.sham=!0,t.exports=!d||o((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?y:v},"69f3":function(t,e,n){var r,o,i,c=n("7f9a"),u=n("da84"),a=n("e330"),f=n("861d"),s=n("9112"),d=n("1a2d"),p=n("c6cd"),l=n("f772"),b=n("d012"),v="Object already initialized",y=u.TypeError,h=u.WeakMap,g=function(t){return i(t)?o(t):r(t,{})},m=function(t){return function(e){var n;if(!f(e)||(n=o(e)).type!==t)throw y("Incompatible receiver, "+t+" required");return n}};if(c||p.state){var x=p.state||(p.state=new h),O=a(x.get),S=a(x.has),w=a(x.set);r=function(t,e){if(S(x,t))throw new y(v);return e.facade=t,w(x,t,e),e},o=function(t){return O(x,t)||{}},i=function(t){return S(x,t)}}else{var j=l("state");b[j]=!0,r=function(t,e){if(d(t,j))throw new y(v);return e.facade=t,s(t,j,e),e},o=function(t){return d(t,j)?t[j]:{}},i=function(t){return d(t,j)}}t.exports={set:r,get:o,has:i,enforce:g,getterFor:m}},"6eeb":function(t,e,n){var r=n("da84"),o=n("1626"),i=n("1a2d"),c=n("9112"),u=n("ce4e"),a=n("8925"),f=n("69f3"),s=n("5e77").CONFIGURABLE,d=f.get,p=f.enforce,l=String(String).split("String");(t.exports=function(t,e,n,a){var f,d=!!a&&!!a.unsafe,b=!!a&&!!a.enumerable,v=!!a&&!!a.noTargetGet,y=a&&void 0!==a.name?a.name:e;o(n)&&("Symbol("===String(y).slice(0,7)&&(y="["+String(y).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||s&&n.name!==y)&&c(n,"name",y),f=p(n),f.source||(f.source=l.join("string"==typeof y?y:""))),t!==r?(d?!v&&t[e]&&(b=!0):delete t[e],b?t[e]=n:c(t,e,n)):b?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return o(this)&&d(this).source||a(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),o=n("1a2d"),i=n("e538"),c=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),o=r("span").classList,i=o&&o.constructor&&o.constructor.prototype;t.exports=i===Object.prototype?void 0:i},"7b0b":function(t,e,n){var r=n("da84"),o=n("1d80"),i=r.Object;t.exports=function(t){return i(o(t))}},"7c73":function(t,e,n){var r,o=n("825a"),i=n("37e8"),c=n("7839"),u=n("d012"),a=n("1be4"),f=n("cc12"),s=n("f772"),d=">",p="<",l="prototype",b="script",v=s("IE_PROTO"),y=function(){},h=function(t){return p+b+d+t+p+"/"+b+d},g=function(t){t.write(h("")),t.close();var e=t.parentWindow.Object;return t=null,e},m=function(){var t,e=f("iframe"),n="java"+b+":";return e.style.display="none",a.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(h("document.F=Object")),t.close(),t.F},x=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}x="undefined"!=typeof document?document.domain&&r?g(r):m():g(r);var t=c.length;while(t--)delete x[l][c[t]];return x()};u[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(y[l]=o(t),n=new y,y[l]=null,n[v]=t):n=x(),void 0===e?n:i(n,e)}},"7db0":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").find,i=n("44d2"),c="find",u=!0;c in[]&&Array(1)[c]((function(){u=!1})),r({target:"Array",proto:!0,forced:u},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),o=n("c65b"),i=n("c430"),c=n("5e77"),u=n("1626"),a=n("9ed3"),f=n("e163"),s=n("d2bb"),d=n("d44e"),p=n("9112"),l=n("6eeb"),b=n("b622"),v=n("3f8c"),y=n("ae93"),h=c.PROPER,g=c.CONFIGURABLE,m=y.IteratorPrototype,x=y.BUGGY_SAFARI_ITERATORS,O=b("iterator"),S="keys",w="values",j="entries",A=function(){return this};t.exports=function(t,e,n,c,b,y,P){a(n,e,c);var E,T,L,_=function(t){if(t===b&&R)return R;if(!x&&t in F)return F[t];switch(t){case S:return function(){return new n(this,t)};case w:return function(){return new n(this,t)};case j:return function(){return new n(this,t)}}return function(){return new n(this)}},k=e+" Iterator",M=!1,F=t.prototype,I=F[O]||F["@@iterator"]||b&&F[b],R=!x&&I||_(b),D="Array"==e&&F.entries||I;if(D&&(E=f(D.call(new t)),E!==Object.prototype&&E.next&&(i||f(E)===m||(s?s(E,m):u(E[O])||l(E,O,A)),d(E,k,!0,!0),i&&(v[k]=A))),h&&b==w&&I&&I.name!==w&&(!i&&g?p(F,"name",w):(M=!0,R=function(){return o(I,this)})),b)if(T={values:_(w),keys:y?R:_(S),entries:_(j)},P)for(L in T)(x||M||!(L in F))&&l(F,L,T[L]);else r({target:e,proto:!0,forced:x||M},T);return i&&!P||F[O]===R||l(F,O,R,{name:b}),v[e]=R,T}},"7f9a":function(t,e,n){var r=n("da84"),o=n("1626"),i=n("8925"),c=r.WeakMap;t.exports=o(c)&&/native code/.test(i(c))},"825a":function(t,e,n){var r=n("da84"),o=n("861d"),i=r.String,c=r.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},8875:function(t,e,n){var r,o,i;(function(n,c){o=[],r=c,i="function"===typeof r?r.apply(e,o):r,void 0===i||(t.exports=i)})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(l){var n,r,o,i=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,c=/@([^@]*):(\d+):(\d+)\s*$/gi,u=i.exec(l.stack)||c.exec(l.stack),a=u&&u[1]||!1,f=u&&u[2]||!1,s=document.location.href.replace(document.location.hash,""),d=document.getElementsByTagName("script");a===s&&(n=document.documentElement.outerHTML,r=new RegExp("(?:[^\\n]+?\\n){0,"+(f-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),o=n.replace(r,"$1").trim());for(var p=0;p<d.length;p++){if("interactive"===d[p].readyState)return d[p];if(d[p].src===a)return d[p];if(a===s&&d[p].innerHTML&&d[p].innerHTML.trim()===o)return d[p]}return null}}return t}))},8925:function(t,e,n){var r=n("e330"),o=n("1626"),i=n("c6cd"),c=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return c(t)}),t.exports=i.inspectSource},"8bbf":function(t,n){t.exports=e},"90d6":function(t,e){t.exports=n},"90e3":function(t,e,n){var r=n("e330"),o=0,i=Math.random(),c=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},9112:function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),o=n("1626"),i=/#|\.prototype\./,c=function(t,e){var n=a[u(t)];return n==s||n!=f&&(o(e)?r(e):!!e)},u=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=c.data={},f=c.NATIVE="N",s=c.POLYFILL="P";t.exports=c},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d039"),c=n("e8b5"),u=n("861d"),a=n("7b0b"),f=n("07fa"),s=n("8418"),d=n("65f0"),p=n("1dde"),l=n("b622"),b=n("2d00"),v=l("isConcatSpreadable"),y=9007199254740991,h="Maximum allowed index exceeded",g=o.TypeError,m=b>=51||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),x=p("concat"),O=function(t){if(!u(t))return!1;var e=t[v];return void 0!==e?!!e:c(t)},S=!m||!x;r({target:"Array",proto:!0,forced:S},{concat:function(t){var e,n,r,o,i,c=a(this),u=d(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?c:arguments[e],O(i)){if(o=f(i),p+o>y)throw g(h);for(n=0;n<o;n++,p++)n in i&&s(u,p,i[n])}else{if(p>=y)throw g(h);s(u,p++,i)}return u.length=p,u}})},"9bf2":function(t,e,n){var r=n("da84"),o=n("83ab"),i=n("0cfb"),c=n("825a"),u=n("a04b"),a=r.TypeError,f=Object.defineProperty;e.f=o?f:function(t,e,n){if(c(t),e=u(e),c(n),i)try{return f(t,e,n)}catch(r){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,o=n("7c73"),i=n("5c6c"),c=n("d44e"),u=n("3f8c"),a=function(){return this};t.exports=function(t,e,n,f){var s=e+" Iterator";return t.prototype=o(r,{next:i(+!f,n)}),c(t,s,!1,!0),u[s]=a,t}},a04b:function(t,e,n){var r=n("c04e"),o=n("d9b5");t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},a434:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("23cb"),c=n("5926"),u=n("07fa"),a=n("7b0b"),f=n("65f0"),s=n("8418"),d=n("1dde"),p=d("splice"),l=o.TypeError,b=Math.max,v=Math.min,y=9007199254740991,h="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p},{splice:function(t,e){var n,r,o,d,p,g,m=a(this),x=u(m),O=i(t,x),S=arguments.length;if(0===S?n=r=0:1===S?(n=0,r=x-O):(n=S-2,r=v(b(c(e),0),x-O)),x+n-r>y)throw l(h);for(o=f(m,r),d=0;d<r;d++)p=O+d,p in m&&s(o,d,m[p]);if(o.length=r,n<r){for(d=O;d<x-r;d++)p=d+r,g=d+n,p in m?m[g]=m[p]:delete m[g];for(d=x;d>x-r+n;d--)delete m[d-1]}else if(n>r)for(d=x-r;d>O;d--)p=d+r-1,g=d+n-1,p in m?m[g]=m[p]:delete m[g];for(d=0;d<n;d++)m[d+O]=arguments[d+2];return m.length=x-r+n,o}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),c=n("2ba4"),u=n("c65b"),a=n("e330"),f=n("c430"),s=n("83ab"),d=n("4930"),p=n("d039"),l=n("1a2d"),b=n("e8b5"),v=n("1626"),y=n("861d"),h=n("3a9b"),g=n("d9b5"),m=n("825a"),x=n("7b0b"),O=n("fc6a"),S=n("a04b"),w=n("577e"),j=n("5c6c"),A=n("7c73"),P=n("df75"),E=n("241c"),T=n("057f"),L=n("7418"),_=n("06cf"),k=n("9bf2"),M=n("d1e7"),F=n("f36a"),I=n("6eeb"),R=n("5692"),D=n("f772"),C=n("d012"),G=n("90e3"),N=n("b622"),V=n("e538"),q=n("746f"),B=n("d44e"),U=n("69f3"),W=n("b727").forEach,H=D("hidden"),$="Symbol",z="prototype",X=N("toPrimitive"),Y=U.set,J=U.getterFor($),K=Object[z],Q=o.Symbol,Z=Q&&Q[z],tt=o.TypeError,et=o.QObject,nt=i("JSON","stringify"),rt=_.f,ot=k.f,it=T.f,ct=M.f,ut=a([].push),at=R("symbols"),ft=R("op-symbols"),st=R("string-to-symbol-registry"),dt=R("symbol-to-string-registry"),pt=R("wks"),lt=!et||!et[z]||!et[z].findChild,bt=s&&p((function(){return 7!=A(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=rt(K,e);r&&delete K[e],ot(t,e,n),r&&t!==K&&ot(K,e,r)}:ot,vt=function(t,e){var n=at[t]=A(Z);return Y(n,{type:$,tag:t,description:e}),s||(n.description=e),n},yt=function(t,e,n){t===K&&yt(ft,e,n),m(t);var r=S(e);return m(n),l(at,r)?(n.enumerable?(l(t,H)&&t[H][r]&&(t[H][r]=!1),n=A(n,{enumerable:j(0,!1)})):(l(t,H)||ot(t,H,j(1,{})),t[H][r]=!0),bt(t,r,n)):ot(t,r,n)},ht=function(t,e){m(t);var n=O(e),r=P(n).concat(St(n));return W(r,(function(e){s&&!u(mt,n,e)||yt(t,e,n[e])})),t},gt=function(t,e){return void 0===e?A(t):ht(A(t),e)},mt=function(t){var e=S(t),n=u(ct,this,e);return!(this===K&&l(at,e)&&!l(ft,e))&&(!(n||!l(this,e)||!l(at,e)||l(this,H)&&this[H][e])||n)},xt=function(t,e){var n=O(t),r=S(e);if(n!==K||!l(at,r)||l(ft,r)){var o=rt(n,r);return!o||!l(at,r)||l(n,H)&&n[H][r]||(o.enumerable=!0),o}},Ot=function(t){var e=it(O(t)),n=[];return W(e,(function(t){l(at,t)||l(C,t)||ut(n,t)})),n},St=function(t){var e=t===K,n=it(e?ft:O(t)),r=[];return W(n,(function(t){!l(at,t)||e&&!l(K,t)||ut(r,at[t])})),r};if(d||(Q=function(){if(h(Z,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?w(arguments[0]):void 0,e=G(t),n=function(t){this===K&&u(n,ft,t),l(this,H)&&l(this[H],e)&&(this[H][e]=!1),bt(this,e,j(1,t))};return s&&lt&&bt(K,e,{configurable:!0,set:n}),vt(e,t)},Z=Q[z],I(Z,"toString",(function(){return J(this).tag})),I(Q,"withoutSetter",(function(t){return vt(G(t),t)})),M.f=mt,k.f=yt,_.f=xt,E.f=T.f=Ot,L.f=St,V.f=function(t){return vt(N(t),t)},s&&(ot(Z,"description",{configurable:!0,get:function(){return J(this).description}}),f||I(K,"propertyIsEnumerable",mt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Q}),W(P(pt),(function(t){q(t)})),r({target:$,stat:!0,forced:!d},{for:function(t){var e=w(t);if(l(st,e))return st[e];var n=Q(e);return st[e]=n,dt[n]=e,n},keyFor:function(t){if(!g(t))throw tt(t+" is not a symbol");if(l(dt,t))return dt[t]},useSetter:function(){lt=!0},useSimple:function(){lt=!1}}),r({target:"Object",stat:!0,forced:!d,sham:!s},{create:gt,defineProperty:yt,defineProperties:ht,getOwnPropertyDescriptor:xt}),r({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:Ot,getOwnPropertySymbols:St}),r({target:"Object",stat:!0,forced:p((function(){L.f(1)}))},{getOwnPropertySymbols:function(t){return L.f(x(t))}}),nt){var wt=!d||p((function(){var t=Q();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));r({target:"JSON",stat:!0,forced:wt},{stringify:function(t,e,n){var r=F(arguments),o=e;if((y(e)||void 0!==t)&&!g(t))return b(e)||(e=function(t,e){if(v(o)&&(e=u(o,this,t,e)),!g(e))return e}),r[1]=e,c(nt,null,r)}})}if(!Z[X]){var jt=Z.valueOf;I(Z,X,(function(t){return u(jt,this)}))}B(Q,$),C[H]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,n){var r=n("b622"),o=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,"/./"[t](e)}catch(r){}}return!1}},ae93:function(t,e,n){"use strict";var r,o,i,c=n("d039"),u=n("1626"),a=n("7c73"),f=n("e163"),s=n("6eeb"),d=n("b622"),p=n("c430"),l=d("iterator"),b=!1;[].keys&&(i=[].keys(),"next"in i?(o=f(f(i)),o!==Object.prototype&&(r=o)):b=!0);var v=void 0==r||c((function(){var t={};return r[l].call(t)!==t}));v?r={}:p&&(r=a(r)),u(r[l])||s(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:b}},b041:function(t,e,n){"use strict";var r=n("00ee"),o=n("f5df");t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),o=n("5e77").EXISTS,i=n("e330"),c=n("9bf2").f,u=Function.prototype,a=i(u.toString),f=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=i(f.exec),d="name";r&&!o&&c(u,d,{configurable:!0,get:function(){try{return s(f,a(this))[1]}catch(t){return""}}})},b622:function(t,e,n){var r=n("da84"),o=n("5692"),i=n("1a2d"),c=n("90e3"),u=n("4930"),a=n("fdbf"),f=o("wks"),s=r.Symbol,d=s&&s["for"],p=a?s:s&&s.withoutSetter||c;t.exports=function(t){if(!i(f,t)||!u&&"string"!=typeof f[t]){var e="Symbol."+t;u&&i(s,t)?f[t]=s[t]:f[t]=a&&d?d(e):p(e)}return f[t]}},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),i=n("df75"),c=n("d039"),u=c((function(){i(1)}));r({target:"Object",stat:!0,forced:u},{keys:function(t){return i(o(t))}})},b727:function(t,e,n){var r=n("0366"),o=n("e330"),i=n("44ad"),c=n("7b0b"),u=n("07fa"),a=n("65f0"),f=o([].push),s=function(t){var e=1==t,n=2==t,o=3==t,s=4==t,d=6==t,p=7==t,l=5==t||d;return function(b,v,y,h){for(var g,m,x=c(b),O=i(x),S=r(v,y),w=u(O),j=0,A=h||a,P=e?A(b,w):n||p?A(b,0):void 0;w>j;j++)if((l||j in O)&&(g=O[j],m=S(g,j,x),t))if(e)P[j]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return j;case 2:f(P,g)}else switch(t){case 4:return!1;case 7:f(P,g)}return d?-1:o||s?s:P}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},c04e:function(t,e,n){var r=n("da84"),o=n("c65b"),i=n("861d"),c=n("d9b5"),u=n("dc4a"),a=n("485a"),f=n("b622"),s=r.TypeError,d=f("toPrimitive");t.exports=function(t,e){if(!i(t)||c(t))return t;var n,r=u(t,d);if(r){if(void 0===e&&(e="default"),n=o(r,t,e),!i(n)||c(n))return n;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},c430:function(t,e){t.exports=!1},c65b:function(t,e){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(t,e,n){var r=n("e330"),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},c6cd:function(t,e,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("e330"),o=n("1a2d"),i=n("fc6a"),c=n("4d64").indexOf,u=n("d012"),a=r([].push);t.exports=function(t,e){var n,r=i(t),f=0,s=[];for(n in r)!o(u,n)&&o(r,n)&&a(s,n);while(e.length>f)o(r,n=e[f++])&&(~c(s,n)||a(s,n));return s}},caad:function(t,e,n){"use strict";var r=n("23e7"),o=n("4d64").includes,i=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},cc12:function(t,e,n){var r=n("da84"),o=n("861d"),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},ce4e:function(t,e,n){var r=n("da84"),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),o=n("1626"),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},d28b:function(t,e,n){var r=n("746f");r("iterator")},d2bb:function(t,e,n){var r=n("e330"),o=n("825a"),i=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(c){}return function(n,r){return o(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),o=n("6eeb"),i=n("b041");r||o(Object.prototype,"toString",i,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,o=n("1a2d"),i=n("b622"),c=i("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!o(t,c)&&r(t,c,{configurable:!0,value:e})}},d81d:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").map,i=n("1dde"),c=i("map");r({target:"Array",proto:!0,forced:!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},d9b5:function(t,e,n){var r=n("da84"),o=n("d066"),i=n("1626"),c=n("3a9b"),u=n("fdbf"),a=r.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&c(e.prototype,a(t))}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),i=n("56ef"),c=n("fc6a"),u=n("06cf"),a=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=c(t),o=u.f,f=i(r),s={},d=0;while(f.length>d)n=o(r,e=f[d++]),void 0!==n&&a(s,e,n);return s}})},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},ddb0:function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("785a"),c=n("e260"),u=n("9112"),a=n("b622"),f=a("iterator"),s=a("toStringTag"),d=c.values,p=function(t,e){if(t){if(t[f]!==d)try{u(t,f,d)}catch(r){t[f]=d}if(t[s]||u(t,s,e),o[e])for(var n in c)if(t[n]!==c[n])try{u(t,n,c[n])}catch(r){t[n]=c[n]}}};for(var l in o)p(r[l]&&r[l].prototype,l);p(i,"DOMTokenList")},df75:function(t,e,n){var r=n("ca84"),o=n("7839");t.exports=Object.keys||function(t){return r(t,o)}},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),i=n("da84"),c=n("e330"),u=n("1a2d"),a=n("1626"),f=n("3a9b"),s=n("577e"),d=n("9bf2").f,p=n("e893"),l=i.Symbol,b=l&&l.prototype;if(o&&a(l)&&(!("description"in b)||void 0!==l().description)){var v={},y=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),e=f(b,this)?new l(t):void 0===t?l():l(t);return""===t&&(v[e]=!0),e};p(y,l),y.prototype=b,b.constructor=y;var h="Symbol(test)"==String(l("test")),g=c(b.toString),m=c(b.valueOf),x=/^Symbol\((.*)\)[^)]+$/,O=c("".replace),S=c("".slice);d(b,"description",{configurable:!0,get:function(){var t=m(this),e=g(t);if(u(v,t))return"";var n=h?S(e,7,-1):O(e,x,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:y})}},e163:function(t,e,n){var r=n("da84"),o=n("1a2d"),i=n("1626"),c=n("7b0b"),u=n("f772"),a=n("e177"),f=u("IE_PROTO"),s=r.Object,d=s.prototype;t.exports=a?s.getPrototypeOf:function(t){var e=c(t);if(o(e,f))return e[f];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof s?d:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),o=n("44d2"),i=n("3f8c"),c=n("69f3"),u=n("9bf2").f,a=n("7dd0"),f=n("c430"),s=n("83ab"),d="Array Iterator",p=c.set,l=c.getterFor(d);t.exports=a(Array,"Array",(function(t,e){p(this,{type:d,target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");var b=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!f&&s&&"values"!==b.name)try{u(b,"name",{value:"values"})}catch(v){}},e330:function(t,e){var n=Function.prototype,r=n.bind,o=n.call,i=r&&r.bind(o);t.exports=r?function(t){return t&&i(o,t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),c=n("06cf").f,u=n("83ab"),a=o((function(){c(1)})),f=!u||a;r({target:"Object",stat:!0,forced:f,sham:!u},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e893:function(t,e,n){var r=n("1a2d"),o=n("56ef"),i=n("06cf"),c=n("9bf2");t.exports=function(t,e,n){for(var u=o(e),a=c.f,f=i.f,s=0;s<u.length;s++){var d=u[s];r(t,d)||n&&r(n,d)||a(t,d,f(e,d))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f36a:function(t,e,n){var r=n("e330");t.exports=r([].slice)},f5df:function(t,e,n){var r=n("da84"),o=n("00ee"),i=n("1626"),c=n("c6b6"),u=n("b622"),a=u("toStringTag"),f=r.Object,s="Arguments"==c(function(){return arguments}()),d=function(t,e){try{return t[e]}catch(n){}};t.exports=o?c:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=d(e=f(t),a))?n:s?c(e):"Object"==(r=c(e))&&i(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),o=n("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},fae3:function(t,e,n){"use strict";if(n.r(e),n.d(e,"key",(function(){return y})),n.d(e,"injectState",(function(){return h})),n.d(e,"useWidget",(function(){return x})),"undefined"!==typeof window){var r=window.document.currentScript,o=n("8875");r=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var i=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(n.p=i[1])}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("e260"),n("3ca3"),n("ddb0");function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}n("b64b"),n("4de4"),n("e439"),n("159b"),n("dbb4");function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n("d81d"),n("caad"),n("2532"),n("b0c0"),n("7db0"),n("a434"),n("99af");var l=n("5880"),b=n("8bbf"),v=n("90d6"),y=Symbol("widget"),h=function(t){var e;"function"===typeof t.state&&(t.state=t.state()||{});var n=p({autoDisable:!0,disableOther:!1},t.state.defaultOption),r=null===(e=t.state)||void 0===e?void 0:e.openAtStart;if(!t)throw new Error("injectState 参数不能为空");var o,i=null===(o=t.state)||void 0===o?void 0:o.widgets.map((function(t){return p(p(p({visible:null===r||void 0===r?void 0:r.includes(t.name)},n),t),{},{meta:p(p({},n.meta),t.meta),key:Object(v["v4"])()})}));return t.state.widgets=i,Object(l["createStore"])({state:p(p({widgets:[],openAtStart:[]},t.state),{},{defaultOption:n}),getters:p({},t.getters),mutations:p({addAlive:function(t,e){t.openAtStart.includes(e)||t.openAtStart.push(e)}},t.mutations),actions:p({activate:function(t,e){var n=t.commit,r=t.state,o=t.dispatch,i="string"===typeof e?e:e.name,c=r.widgets.find((function(t){return t.name===i}));c?("object"===f(e)&&null!==e&&e.data&&(c.data=e.data),c.visible&&e.reload&&(c.visible=!1,c.key=Object(v["v4"])()),Object(b["nextTick"])((function(){c.visible=!0})),r.widgets.forEach((function(t){c.name!==t.name&&(c.group&&t.group===c.group&&(t.visible=!1),Array.isArray(c.disableOther)?c.disableOther.forEach((function(t){o("disable",t)})):c.disableOther&&t.autoDisable&&(t.visible=!1))})),r.openAtStart.includes(i)||n("addAlive",i)):console.log("widget不存在",e)},disable:function(t,e){var n=t.state,r=e,o=n.widgets.find((function(t,e){return t.name===r&&(delete n.widgets[e].data,!0)}));o&&(o.visible=!1)},disableAll:function(t,e){var n=t.state;n.widgets.forEach((function(t){t.visible&&(e||t.autoDisable)&&(t.visible=!1)}))}},t.actions)})},g=function(){function t(){c(this,t),this._cache={}}return a(t,[{key:"on",value:function(t,e){var n=this._cache[t]=this._cache[t]||[];return-1===n.indexOf(e)&&n.push(e),this}},{key:"emit",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=this._cache[t];return Array.isArray(o)&&o.forEach((function(t){t(p({},n))})),this}},{key:"off",value:function(t,e){var n=this._cache[t];if(Array.isArray(n))if(e){var r=n.indexOf(e);-1!==r&&n.splice(r,1)}else n.length=0;return this}}]),t}(),m=new g;function x(){var t=Object(l["useStore"])(y);return{widgets:Object(b["computed"])((function(){return t.state.widgets})),openAtStart:Object(b["computed"])((function(){return t.state.openAtStart})),getWidget:function(e){var n=t.state.widgets.find((function(t){return t.name===e}));return p(p({},n),{},{onUpdate:function(t){n&&m.on(n.name,t),Object(b["onUnmounted"])((function(){m.off(n.name,t)}))}})},updateWidget:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];m.emit.apply(m,[t].concat(n))},isActivate:function(e){var n=t.state.widgets.find((function(t){return t.name===e}));return!!n&&n.visible},activate:function(e){var n,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];n="string"===typeof e?{reload:r,name:e}:p({reload:r},e),t.dispatch("activate",n)},disable:function(e){t.dispatch("disable",e)},disableAll:function(e){t.dispatch("disableAll",e)}}}},fc6a:function(t,e,n){var r=n("44ad"),o=n("1d80");t.exports=function(t){return r(o(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}})}));
