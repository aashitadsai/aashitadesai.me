webpackJsonp([3],{

/***/ "../../../../raw-loader/index.js!../../node_modules/source-map-loader/index.js!../../../../../src/assets/js/anime.min.js":
/***/ (function(module, exports) {

module.exports = "(function(u,r){\"function\"===typeof define&&define.amd?define([],r):\"object\"===typeof module&&module.exports?module.exports=r():u.anime=r()})(this,function(){var u={duration:1E3,delay:0,loop:!1,autoplay:!0,direction:\"normal\",easing:\"easeOutElastic\",elasticity:400,round:!1,begin:void 0,update:void 0,complete:void 0},r=\"translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY\".split(\" \"),y,f={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<\nObject.prototype.toString.call(a).indexOf(\"Object\")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||f.svg(a)},num:function(a){return!isNaN(parseInt(a))},str:function(a){return\"string\"===typeof a},fnc:function(a){return\"function\"===typeof a},und:function(a){return\"undefined\"===typeof a},nul:function(a){return\"null\"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},\ncol:function(a){return f.hex(a)||f.rgb(a)||f.hsl(a)}},D=function(){var a={},b={Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a,b){if(0===a||1===a)return a;var d=1-Math.min(b,998)/1E3,g=a/1-1;return-(Math.pow(2,10*g)*Math.sin(2*(g-d/(2*Math.PI)*Math.asin(1))*Math.PI/d))},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,d=4;a<((b=Math.pow(2,--d))-1)/11;);return 1/Math.pow(4,3-d)-7.5625*Math.pow((3*b-2)/22-a,2)}};[\"Quad\",\n\"Cubic\",\"Quart\",\"Quint\",\"Expo\"].forEach(function(a,e){b[a]=function(a){return Math.pow(a,e+2)}});Object.keys(b).forEach(function(c){var e=b[c];a[\"easeIn\"+c]=e;a[\"easeOut\"+c]=function(a,b){return 1-e(1-a,b)};a[\"easeInOut\"+c]=function(a,b){return.5>a?e(2*a,b)/2:1-e(-2*a+2,b)/2};a[\"easeOutIn\"+c]=function(a,b){return.5>a?(1-e(1-2*a,b))/2:(e(2*a-1,b)+1)/2}});a.linear=function(a){return a};return a}(),z=function(a){return f.str(a)?a:a+\"\"},E=function(a){return a.replace(/([a-z])([A-Z])/g,\"$1-$2\").toLowerCase()},\nF=function(a){if(f.col(a))return!1;try{return document.querySelectorAll(a)}catch(b){return!1}},A=function(a){return a.reduce(function(a,c){return a.concat(f.arr(c)?A(c):c)},[])},t=function(a){if(f.arr(a))return a;f.str(a)&&(a=F(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]},G=function(a,b){return a.some(function(a){return a===b})},R=function(a,b){var c={};a.forEach(function(a){var d=JSON.stringify(b.map(function(b){return a[b]}));c[d]=c[d]||[];c[d].push(a)});\nreturn Object.keys(c).map(function(a){return c[a]})},H=function(a){return a.filter(function(a,c,e){return e.indexOf(a)===c})},B=function(a){var b={},c;for(c in a)b[c]=a[c];return b},v=function(a,b){for(var c in b)a[c]=f.und(a[c])?b[c]:a[c];return a},S=function(a){a=a.replace(/^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,function(a,b,c,m){return b+b+c+c+m+m});var b=/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(a);a=parseInt(b[1],16);var c=parseInt(b[2],16),b=parseInt(b[3],16);return\"rgb(\"+a+\",\"+c+\",\"+b+\")\"},\nT=function(a){a=/hsl\\((\\d+),\\s*([\\d.]+)%,\\s*([\\d.]+)%\\)/g.exec(a);var b=parseInt(a[1])/360,c=parseInt(a[2])/100,e=parseInt(a[3])/100;a=function(a,b,c){0>c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a};if(0==c)c=e=b=e;else var d=.5>e?e*(1+c):e+c-e*c,g=2*e-d,c=a(g,d,b+1/3),e=a(g,d,b),b=a(g,d,b-1/3);return\"rgb(\"+255*c+\",\"+255*e+\",\"+255*b+\")\"},p=function(a){return/([\\+\\-]?[0-9|auto\\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(a)[2]},I=function(a,b,c){return p(b)?\nb:-1<a.indexOf(\"translate\")?p(c)?b+p(c):b+\"px\":-1<a.indexOf(\"rotate\")||-1<a.indexOf(\"skew\")?b+\"deg\":b},w=function(a,b){if(b in a.style)return getComputedStyle(a).getPropertyValue(E(b))||\"0\"},U=function(a,b){var c=-1<b.indexOf(\"scale\")?1:0,e=a.style.transform;if(!e)return c;for(var d=/(\\w+)\\((.+?)\\)/g,g=[],m=[],f=[];g=d.exec(e);)m.push(g[1]),f.push(g[2]);e=f.filter(function(a,c){return m[c]===b});return e.length?e[0]:c},J=function(a,b){if(f.dom(a)&&G(r,b))return\"transform\";if(f.dom(a)&&(a.getAttribute(b)||\nf.svg(a)&&a[b]))return\"attribute\";if(f.dom(a)&&\"transform\"!==b&&w(a,b))return\"css\";if(!f.nul(a[b])&&!f.und(a[b]))return\"object\"},K=function(a,b){switch(J(a,b)){case \"transform\":return U(a,b);case \"css\":return w(a,b);case \"attribute\":return a.getAttribute(b)}return a[b]||0},L=function(a,b,c){if(f.col(b))return b=f.rgb(b)?b:f.hex(b)?S(b):f.hsl(b)?T(b):void 0,b;if(p(b))return b;a=p(a.to)?p(a.to):p(a.from);!a&&c&&(a=p(c));return a?b+a:b},M=function(a){var b=/-?\\d*\\.?\\d+/g;return{original:a,numbers:z(a).match(b)?\nz(a).match(b).map(Number):[0],strings:z(a).split(b)}},V=function(a,b,c){return b.reduce(function(b,d,g){d=d?d:c[g-1];return b+a[g-1]+d})},W=function(a){a=a?A(f.arr(a)?a.map(t):t(a)):[];return a.map(function(a,c){return{target:a,id:c}})},N=function(a,b,c,e){\"transform\"===c?(c=a+\"(\"+I(a,b.from,b.to)+\")\",b=a+\"(\"+I(a,b.to)+\")\"):(a=\"css\"===c?w(e,a):void 0,c=L(b,b.from,a),b=L(b,b.to,a));return{from:M(c),to:M(b)}},X=function(a,b){var c=[];a.forEach(function(e,d){var g=e.target;return b.forEach(function(b){var l=\nJ(g,b.name);if(l){var q;q=b.name;var h=b.value,h=t(f.fnc(h)?h(g,d):h);q={from:1<h.length?h[0]:K(g,q),to:1<h.length?h[1]:h[0]};h=B(b);h.animatables=e;h.type=l;h.from=N(b.name,q,h.type,g).from;h.to=N(b.name,q,h.type,g).to;h.round=f.col(q.from)||h.round?1:0;h.delay=(f.fnc(h.delay)?h.delay(g,d,a.length):h.delay)/k.speed;h.duration=(f.fnc(h.duration)?h.duration(g,d,a.length):h.duration)/k.speed;c.push(h)}})});return c},Y=function(a,b){var c=X(a,b);return R(c,[\"name\",\"from\",\"to\",\"delay\",\"duration\"]).map(function(a){var b=\nB(a[0]);b.animatables=a.map(function(a){return a.animatables});b.totalDuration=b.delay+b.duration;return b})},C=function(a,b){a.tweens.forEach(function(c){var e=c.from,d=a.duration-(c.delay+c.duration);c.from=c.to;c.to=e;b&&(c.delay=d)});a.reversed=a.reversed?!1:!0},Z=function(a){if(a.length)return Math.max.apply(Math,a.map(function(a){return a.totalDuration}))},O=function(a){var b=[],c=[];a.tweens.forEach(function(a){if(\"css\"===a.type||\"transform\"===a.type)b.push(\"css\"===a.type?E(a.name):\"transform\"),\na.animatables.forEach(function(a){c.push(a.target)})});return{properties:H(b).join(\", \"),elements:H(c)}},aa=function(a){var b=O(a);b.elements.forEach(function(a){a.style.willChange=b.properties})},ba=function(a){O(a).elements.forEach(function(a){a.style.removeProperty(\"will-change\")})},ca=function(a,b){var c=a.path,e=a.value*b,d=function(d){d=d||0;return c.getPointAtLength(1<b?a.value+d:e+d)},g=d(),f=d(-1),d=d(1);switch(a.name){case \"translateX\":return g.x;case \"translateY\":return g.y;case \"rotate\":return 180*\nMath.atan2(d.y-f.y,d.x-f.x)/Math.PI}},da=function(a,b){var c=Math.min(Math.max(b-a.delay,0),a.duration)/a.duration,e=a.to.numbers.map(function(b,e){var f=a.from.numbers[e],l=D[a.easing](c,a.elasticity),f=a.path?ca(a,l):f+l*(b-f);return f=a.round?Math.round(f*a.round)/a.round:f});return V(e,a.to.strings,a.from.strings)},P=function(a,b){var c;a.currentTime=b;a.progress=b/a.duration*100;for(var e=0;e<a.tweens.length;e++){var d=a.tweens[e];d.currentValue=da(d,b);for(var f=d.currentValue,m=0;m<d.animatables.length;m++){var l=\nd.animatables[m],k=l.id,l=l.target,h=d.name;switch(d.type){case \"css\":l.style[h]=f;break;case \"attribute\":l.setAttribute(h,f);break;case \"object\":l[h]=f;break;case \"transform\":c||(c={}),c[k]||(c[k]=[]),c[k].push(f)}}}if(c)for(e in y||(y=(w(document.body,\"transform\")?\"\":\"-webkit-\")+\"transform\"),c)a.animatables[e].target.style[y]=c[e].join(\" \");a.settings.update&&a.settings.update(a)},Q=function(a){var b={};b.animatables=W(a.targets);b.settings=v(a,u);var c=b.settings,e=[],d;for(d in a)if(!u.hasOwnProperty(d)&&\n\"targets\"!==d){var g=f.obj(a[d])?B(a[d]):{value:a[d]};g.name=d;e.push(v(g,c))}b.properties=e;b.tweens=Y(b.animatables,b.properties);b.duration=Z(b.tweens)||a.duration;b.currentTime=0;b.progress=0;b.ended=!1;return b},n=[],x=0,ea=function(){var a=function(){x=requestAnimationFrame(b)},b=function(b){if(n.length){for(var e=0;e<n.length;e++)n[e].tick(b);a()}else cancelAnimationFrame(x),x=0};return a}(),k=function(a){var b=Q(a),c={};b.tick=function(a){b.ended=!1;c.start||(c.start=a);c.current=Math.min(Math.max(c.last+\na-c.start,0),b.duration);P(b,c.current);var d=b.settings;d.begin&&c.current>=d.delay&&(d.begin(b),d.begin=void 0);c.current>=b.duration&&(d.loop?(c.start=a,\"alternate\"===d.direction&&C(b,!0),f.num(d.loop)&&d.loop--):(b.ended=!0,b.pause(),d.complete&&d.complete(b)),c.last=0)};b.seek=function(a){P(b,a/100*b.duration)};b.pause=function(){ba(b);var a=n.indexOf(b);-1<a&&n.splice(a,1)};b.play=function(a){b.pause();a&&(b=v(Q(v(a,b.settings)),b));c.start=0;c.last=b.ended?0:b.currentTime;a=b.settings;\"reverse\"===\na.direction&&C(b);\"alternate\"!==a.direction||a.loop||(a.loop=1);aa(b);n.push(b);x||ea()};b.restart=function(){b.reversed&&C(b);b.pause();b.seek(0);b.play()};b.settings.autoplay&&b.play();return b};k.version=\"1.1.1\";k.speed=1;k.list=n;k.remove=function(a){a=A(f.arr(a)?a.map(t):t(a));for(var b=n.length-1;0<=b;b--)for(var c=n[b],e=c.tweens,d=e.length-1;0<=d;d--)for(var g=e[d].animatables,k=g.length-1;0<=k;k--)G(a,g[k].target)&&(g.splice(k,1),g.length||e.splice(d,1),e.length||c.pause())};k.easings=D;\nk.getValue=K;k.path=function(a){a=f.str(a)?F(a)[0]:a;return{path:a,value:a.getTotalLength()}};k.random=function(a,b){return Math.floor(Math.random()*(b-a+1))+a};return k});"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../node_modules/source-map-loader/index.js!../../../../../src/assets/js/imagesloaded.pkgd.min.js":
/***/ (function(module, exports) {

module.exports = "/*!\n * imagesLoaded PACKAGED v4.1.1\n * JavaScript is all like \"You images are done yet or what?\"\n * MIT License\n */\n\n!function(t,e){\"function\"==typeof define&&define.amd?define(\"ev-emitter/ev-emitter\",e):\"object\"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(\"undefined\"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){\"use strict\";\"function\"==typeof define&&define.amd?define([\"ev-emitter/ev-emitter\"],function(i){return e(t,i)}):\"object\"==typeof module&&module.exports?module.exports=e(t,require(\"ev-emitter\")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if(\"number\"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?(\"string\"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),\"function\"==typeof e?r=e:i(this.options,e),r&&this.on(\"always\",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){\"IMG\"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll(\"img\"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if(\"string\"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\\((['\"])?(.*?)\\1\\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once(\"progress\",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent(\"progress\",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log(\"progress: \"+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?\"fail\":\"done\";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent(\"always\",[this]),this.jqDeferred){var e=this.hasAnyBroken?\"reject\":\"resolve\";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,\"naturalWidth\"):(this.proxyImage=new Image,this.proxyImage.addEventListener(\"load\",this),this.proxyImage.addEventListener(\"error\",this),this.img.addEventListener(\"load\",this),this.img.addEventListener(\"error\",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent(\"progress\",[this,this.img,e])},r.prototype.handleEvent=function(t){var e=\"on\"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,\"onload\"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,\"onerror\"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener(\"load\",this),this.proxyImage.removeEventListener(\"error\",this),this.img.removeEventListener(\"load\",this),this.img.removeEventListener(\"error\",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener(\"load\",this),this.img.addEventListener(\"error\",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,\"naturalWidth\"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener(\"load\",this),this.img.removeEventListener(\"error\",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent(\"progress\",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../node_modules/source-map-loader/index.js!../../../../../src/assets/js/main.js":
/***/ (function(module, exports) {

module.exports = "/**\n * main.js\n * http://www.codrops.com\n *\n * Licensed under the MIT license.\n * http://www.opensource.org/licenses/mit-license.php\n * \n * Copyright 2016, Codrops\n * http://www.codrops.com\n */\n;(function(window) {\n\n\t'use strict';\n\n\t// Helper vars and functions.\n\tfunction extend( a, b ) {\n\t\tfor( var key in b ) { \n\t\t\tif( b.hasOwnProperty( key ) ) {\n\t\t\t\ta[key] = b[key];\n\t\t\t}\n\t\t}\n\t\treturn a;\n\t}\n\t// From https://davidwalsh.name/javascript-debounce-function.\n\tfunction debounce(func, wait, immediate) {\n\t\tvar timeout;\n\t\treturn function() {\n\t\t\tvar context = this, args = arguments;\n\t\t\tvar later = function() {\n\t\t\t\ttimeout = null;\n\t\t\t\tif (!immediate) func.apply(context, args);\n\t\t\t};\n\t\t\tvar callNow = immediate && !timeout;\n\t\t\tclearTimeout(timeout);\n\t\t\ttimeout = setTimeout(later, wait);\n\t\t\tif (callNow) func.apply(context, args);\n\t\t};\n\t};\n\t// Creates a sorted array of random numbers between minVal and maxVal with a length = size.\n\tfunction createRandIntOrderedArray(minVal, maxVal, size) {\n\t\tvar arr = [];\n\t\tfor(var i=0; i<size; ++i) {\n\t\t\tarr.push(anime.random(minVal, maxVal));\n\t\t}\n\t\tarr.sort(function(a, b){ return a-b });\n\t\treturn arr;\n\t}\n\t// Checks if an object is empty.\n\tfunction isObjEmpty(obj) {\n\t\treturn Object.getOwnPropertyNames(obj).length > 0;\n\t}\n\t// Concatenate JS objs.\n\t// From http://stackoverflow.com/a/2454315.\n\tfunction collect() {\n\t\tvar ret = {};\n\t\tvar len = arguments.length;\n\t\tfor (var i=0; i<len; i++) {\n\t\t\tfor (var p in arguments[i]) {\n\t\t\t\tif (arguments[i].hasOwnProperty(p)) {\n\t\t\t\t\tret[p] = arguments[i][p];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn ret;\n\t}\n\t// Check if clip-path is supported. From http://stackoverflow.com/a/30041538.\n\tfunction areClipPathShapesSupported() {\n\t\tvar base = 'clipPath',\n\t\t\tprefixes = [ 'webkit', 'moz', 'ms', 'o' ],\n\t\t\tproperties = [ base ],\n\t\t\ttestElement = document.createElement( 'testelement' ),\n\t\t\tattribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';\n\n\t\t// Push the prefixed properties into the array of properties.\n\t\tfor ( var i = 0, l = prefixes.length; i < l; i++ ) {\n\t\t\tvar prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 ); // remember to capitalize!\n\t\t\tproperties.push( prefixedProperty );\n\t\t}\n\n\t\t// Interate over the properties and see if they pass two tests.\n\t\tfor ( var i = 0, l = properties.length; i < l; i++ ) {\n\t\t\tvar property = properties[i];\n\n\t\t\t// First, they need to even support clip-path (IE <= 11 does not)...\n\t\t\tif ( testElement.style[property] === '' ) {\n\n\t\t\t\t// Second, we need to see what happens when we try to create a CSS shape...\n\t\t\t\ttestElement.style[property] = attribute;\n\t\t\t\tif ( testElement.style[property] !== '' ) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t};\n\n\t/**\n\t * Segmenter obj.\n\t */\n\tfunction Segmenter(el, options) {\n\t\tthis.el = el;\n\t\tthis.options = extend({}, this.options);\n\t\textend(this.options, options);\n\t\t// Preload main image.\n\t\tvar self = this;\n\t\timagesLoaded(this.el, { background: true }, function() {\n\t\t\tself._init();\n\t\t\tself._initEvents();\n\t\t\tself.options.onReady();\n\t\t});\n\t}\n\n\tSegmenter.prototype.options = {\n\t\t// Number of pieces.\n\t\tpieces: 4, \n\t\t// Show pieces already styled.\n\t\trenderOnLoad: false,\n\t\t// Add an element for the shadow.\n\t\tshadows: true,\n\t\t// Animations for the shadow (valid properties: opacity, translateX, translateY).\n\t\tshadowsAnimation: {\n\t\t\topacity: 1,\n\t\t\t// translateX: 20,\n\t\t\t// translateY: 20\n\t\t},\n\t\t// Parrallax effect for the pieces.\n\t\tparallax: false,\n\t\t// Movements for the parallax effect.\n\t\tparallaxMovement: {min: 10, max: 40},\n\t\t// Animation for the pieces (valid properties: duration, easing, delay, opacity, translate[XYZ]).\n\t\tanimation: {\n\t\t\tduration: 1500,\n\t\t\teasing: 'easeOutQuad',\n\t\t\tdelay: 0, // Delay increment per piece.\n\t\t\t// opacity: 0.5,\n\t\t\ttranslateZ: {min: 10, max: 65}, // We can also use an integer for a specific value.\n\t\t\t// translateX: {min: -100, max: 100}, // We can also use an integer for a specific value.\n\t\t\t// translateY: {min: -100, max: 100} // We can also use an integer for a specific value.\n\t\t},\n\t\t// Callbacks\n\t\tonReady: function() { return false; },\n\t\tonAnimationComplete: function() { return false; },\n\t\tonAnimationStart: function() { return false; },\n\t\t// The positions of the pieces in percentage values. \n\t\t// We can also use random values by setting options.positions to \"random\".\n\t\tpositions: [\n\t\t\t{top: 80, left: 10, width: 30, height: 20},\n\t\t\t{top: 2, left: 2, width: 40, height: 40},\n\t\t\t{top: 30, left: 60, width: 30, height: 60},\n\t\t\t{top: 10, left: 20, width: 50, height: 60}\n\t\t]\n\t};\n\n\t/**\n\t * Init!\n\t */\n\tSegmenter.prototype._init = function() {\n\t\t// The dimensions of the main element.\n\t\tthis.dimensions = {\n\t\t\twidth: this.el.offsetWidth,\n\t\t\theight: this.el.offsetHeight\n\t\t};\n\t\t\n\t\t// The source of the main image.\n\t\tvar background = this.el.style.backgroundImage;\n\t\tthis.imgsrc = background.replace('url(','').replace(')','').replace(/\\\"/gi, \"\");;\n\t\t\n\t\t// Create the layout.\n\t\tthis._layout();\n\n\t\tvar self = this;\n\t\tthis.pieces = [].slice.call(this.el.querySelectorAll('.segmenter__piece-wrap'));\n\t\tthis.pieces.forEach(function(piece, pos) {\n\t\t\t// Bugfix for Chrome. The translateZ needs an initial value otherwise the animation will not work. (this seems to be a anime.js bug - let´s wait for the next version..)\n\t\t\tpiece.style.WebkitTransform = piece.style.transform = 'translateZ(0.0001px)';\n\n\t\t\t// If we want to render the different pieces on load then:\n\t\t\tif( self.options.renderOnLoad ) {\n\t\t\t\tself._renderPiece(piece);\n\t\t\t}\n\t\t});\n\t\t// Flag to indicate the pieces are already rendered/styled either on load or after the animation.\n\t\tif( this.options.renderOnLoad ) {\n\t\t\tthis.active = true;\n\t\t}\n\t};\n\n\t/**\n\t * Creates the layout.\n\t */\n\tSegmenter.prototype._layout = function() {\n\t\t// clip-path support\n\t\tvar clipPath = areClipPathShapesSupported();\n\n\t\tvar segBgEl = document.createElement('div');\n\t\tsegBgEl.className = 'segmenter__background';\n\t\tsegBgEl.style.backgroundImage = 'url(' + this.imgsrc + ')';\n\n\t\tvar segPieces = document.createElement('div'),\n\t\t\tsegPiecesHTML = '',\n\t\t\tpositionsTotal = this.options.positions.length;\n\n\t\tsegPieces.className = 'segmenter__pieces';\n\n\t\tfor(var i = 0, len = this.options.pieces; i < len; ++i) {\n\t\t\tif( this.options.parallax ) {\n\t\t\t\tsegPiecesHTML += '<div class=\"segmenter__piece-parallax\">';\n\t\t\t}\n\n\t\t\tsegPiecesHTML += '<div class=\"segmenter__piece-wrap\">';\n\t\t\t\n\t\t\tvar top, left, width, height, clipTop, clipLeft, clipRight, clipBottom,\n\t\t\t\tpos = i <= positionsTotal - 1 ? i : 0,\n\t\t\t\tisRandom = this.options.positions === 'random';\n\n\t\t\ttop = isRandom ? anime.random(0,100) : this.options.positions[pos].top;\n\t\t\tleft = isRandom ? anime.random(0,100) : this.options.positions[pos].left;\n\t\t\twidth = isRandom ? anime.random(0,100) : this.options.positions[pos].width;\n\t\t\theight = isRandom ? anime.random(0,100) : this.options.positions[pos].height;\n\t\t\t\n\t\t\tif( !clipPath ) {\n\t\t\t\tclipTop = isRandom ? top/100 * this.dimensions.height : this.options.positions[pos].top/100 * this.dimensions.height;\n\t\t\t\tclipLeft = isRandom ? left/100 * this.dimensions.width : this.options.positions[pos].left/100 * this.dimensions.width;\n\t\t\t\tclipRight = isRandom ? width/100 * this.dimensions.width + clipLeft : this.options.positions[pos].width/100 * this.dimensions.width + clipLeft;\n\t\t\t\tclipBottom = isRandom ? height/100 * this.dimensions.height + clipTop : this.options.positions[pos].height/100 * this.dimensions.height + clipTop;\n\t\t\t}\n\n\t\t\tif( this.options.shadows ) {\n\t\t\t\tsegPiecesHTML += '<div class=\"segmenter__shadow\" style=\"top: ' + top + '%; left: ' + left + '%; width: ' + width + '%; height: ' + height + '%\"></div>';\t\t\n\t\t\t}\n\n\t\t\tsegPiecesHTML += clipPath ?\n\t\t\t\t\t\t\t'<div class=\"segmenter__piece\" style=\"background-image: url(' + this.imgsrc + '); -webkit-clip-path: polygon(' + left + '% ' + top + '%, ' + (left + width) + '% ' + top + '%, ' + (left + width) + '% ' + (top + height) + '%, ' + left + '% ' + (top + height) + '%); clip-path: polygon(' + left + '% ' + top + '%, ' + (left + width) + '% ' + top + '%, ' + (left + width) + '% ' + (top + height) + '%, ' + left + '% ' + (top + height) + '%)\"></div>' :\n\t\t\t\t\t\t\t'<div class=\"segmenter__piece\" style=\"background-image: url(' + this.imgsrc + '); clip: rect(' + clipTop + 'px,' + clipRight + 'px,' + clipBottom + 'px,' + clipLeft + 'px)\"></div>';\n\n\t\t\tsegPiecesHTML += '</div>'\n\t\t\tif( this.options.parallax ) {\n\t\t\t\tsegPiecesHTML += '</div>';\n\t\t\t}\n\t\t}\n\n\t\tsegPieces.innerHTML = segPiecesHTML;\n\n\t\tthis.el.innerHTML = '';\n\t\tthis.el.appendChild(segBgEl);\n\t\tthis.el.appendChild(segPieces);\n\t};\n\n\t/**\n\t * Renders/Styles a piece with the options that are passed in the initialization.\n\t */\n\tSegmenter.prototype._renderPiece = function(piece) {\n\t\tvar idx = this.pieces.indexOf(piece);\n\t\tvar self = this;\n\t\tif( self.options.animation.translateZ != undefined ) {\n\t\t\tif( typeof self.options.animation.translateZ === 'object' ) {\n\t\t\t\tvar randArr = createRandIntOrderedArray(self.options.animation.translateZ.min, self.options.animation.translateZ.max, self.options.pieces);\n\t\t\t\tpiece.style.transform = piece.style.WebkitTransform = 'translateZ(' + randArr[idx] + 'px)';\n\t\t\t}\n\t\t\telse {\n\t\t\t\tpiece.style.transform = piece.style.WebkitTransform = 'translateZ(' + self.options.animation.translateZ + 'px)';\n\t\t\t}\n\t\t}\n\t\tif( self.options.animation.translateY != undefined ) {\n\t\t\tif( typeof self.options.animation.translateY === 'object' ) {\n\t\t\t\tvar randArr = createRandIntOrderedArray(self.options.animation.translateY.min, self.options.animation.translateY.max, self.options.pieces);\n\t\t\t\tpiece.style.transform = piece.style.WebkitTransform = 'translateY(' + randArr[idx] + 'px)';\n\t\t\t}\n\t\t\telse {\n\t\t\t\tpiece.style.transform = piece.style.WebkitTransform = 'translateY(' + self.options.animation.translateY + 'px)';\n\t\t\t}\n\t\t}\n\t\tif( self.options.animation.translateX != undefined ) {\n\t\t\tif( typeof self.options.animation.translateX === 'object' ) {\n\t\t\t\tvar randArr = createRandIntOrderedArray(self.options.animation.translateX.min, self.options.animation.translateX.max, self.options.pieces);\n\t\t\t\tpiece.style.transform = piece.style.WebkitTransform = 'translateX(' + randArr[idx] + 'px)';\n\t\t\t}\n\t\t\telse {\n\t\t\t\tpiece.style.transform = piece.style.WebkitTransform = 'translateX(' + self.options.animation.translateX + 'px)';\n\t\t\t}\n\t\t}\n\t\tif( self.options.animation.opacity != undefined ) {\n\t\t\tpiece.style.opacity = self.options.animation.opacity;\n\t\t}\n\n\t\tif( self.options.shadows && isObjEmpty(self.options.shadowsAnimation) ) {\n\t\t\tvar shadowEl = piece.querySelector('.segmenter__shadow');\n\t\t\tshadowEl.style.opacity = self.options.shadowsAnimation.opacity != undefined ? self.options.shadowsAnimation.opacity : 0;\n\t\t\tshadowEl.style.transform = shadowEl.style.WebkitTransform = 'translateX(' + (self.options.shadowsAnimation.translateX != undefined ? self.options.shadowsAnimation.translateX : 0) + 'px) translateY(' + (self.options.shadowsAnimation.translateY != undefined ? self.options.shadowsAnimation.translateY : 0) + 'px)';\n\t\t}\n\t};\n\n\t/**\n\t * Animates the pieces with the options passed (with anime.js).\n\t */\n\tSegmenter.prototype.animate = function() {\n\t\tif( this.active ) {\n\t\t\treturn false;\n\t\t}\n\t\tthis.active = true;\n\n\t\tvar self = this,\n\t\t\tanimProps = {\n\t\t\t\ttargets: this.pieces,\n\t\t\t\tduration: this.options.animation.duration,\n\t\t\t\tdelay: function(el, index) { return (self.options.pieces - index - 1) * self.options.animation.delay; },\n\t\t\t\teasing: this.options.animation.easing,\n\t\t\t\tbegin: this.options.onAnimationStart,\n\t\t\t\tcomplete: this.options.onAnimationComplete\n\t\t\t};\n\t\t\n\t\tif( this.options.animation.translateZ != undefined ) {\n\t\t\tvar randArr = createRandIntOrderedArray(this.options.animation.translateZ.min, this.options.animation.translateZ.max, this.options.pieces);\n\t\t\tanimProps.translateZ = typeof this.options.animation.translateZ === 'object' ? function(el, index) {\n\t\t\t\treturn randArr[index];\n\t\t\t} : this.options.animation.translateZ;\n\t\t}\n\t\tif( this.options.animation.translateX != undefined ) {\n\t\t\tanimProps.translateX = typeof this.options.animation.translateX === 'object' ? function(el, index) {\n\t\t\t\treturn anime.random(self.options.animation.translateX.min, self.options.animation.translateX.max);\n\t\t\t} : this.options.animation.translateX;\n\t\t}\n\t\tif( this.options.animation.translateY != undefined ) {\n\t\t\tanimProps.translateY = typeof this.options.animation.translateY === 'object' ? function(el, index) {\n\t\t\t\treturn anime.random(self.options.animation.translateY.min, self.options.animation.translateY.max);\n\t\t\t} : this.options.animation.translateY;\n\t\t}\n\t\tif( this.options.animation.opacity != undefined ) {\n\t\t\tanimProps.opacity = this.options.animation.opacity;\n\t\t}\n\n\t\tanime(animProps);\n\n\t\t// Also animate the shadow element.\n\t\tif( this.options.shadows && isObjEmpty(this.options.shadowsAnimation) ) {\n\t\t\tanime(collect({\n\t\t\t\ttargets: this.el.querySelectorAll('.segmenter__shadow'),\n\t\t\t\tduration: this.options.animation.duration,\n\t\t\t\tdelay: function(el, index) { return (self.options.pieces - index - 1) * self.options.animation.delay; },\n\t\t\t\teasing: this.options.animation.easing\n\t\t\t}, this.options.shadowsAnimation));\n\t\t}\n\t};\n\n\t/**\n\t * Init/Bind events.\n\t */\n\tSegmenter.prototype._initEvents = function() {\n\t\tvar self = this;\n\t\t\n\t\t// Window resize.\n\t\tthis.debounceResize = debounce(function(ev) {\n\t\t\tvar positionsTotal = self.options.positions.length;\n\n\t\t\t// Recalculate dimensions.\n\t\t\tself.dimensions = {\n\t\t\t\twidth: self.el.offsetWidth,\n\t\t\t\theight: self.el.offsetHeight\n\t\t\t};\n\n\t\t\t// Recalculate clip values..\n\t\t\t// todo: DRY\n\t\t\t// todo: If random is true then save the initial values. Should not recalculate for this case.\n\t\t\tself.pieces.forEach(function(piece, position) {\n\t\t\t\tvar clipTop, clipLeft, clipRight, clipBottom,\n\t\t\t\t\tsegmenterPiece = piece.querySelector('.segmenter__piece');\n\n\t\t\t\tif( self.options.positions === 'random' ) {\n\t\t\t\t\tvar randT = anime.random(0,100), randL = anime.random(0,100), randW = anime.random(0,100), randH = anime.random(0,100);\n\t\t\t\t\tclipTop = randT/100 * self.dimensions.height;\n\t\t\t\t\tclipLeft = randL/100 * self.dimensions.width;\n\t\t\t\t\tclipRight = randW/100 * self.dimensions.width + clipLeft;\n\t\t\t\t\tclipBottom = randH/100 * self.dimensions.height + clipTop;\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tvar pos = position <= positionsTotal - 1 ? position : 0;\n\t\t\t\t\tclipTop = self.options.positions[pos].top/100 * self.dimensions.height;\n\t\t\t\t\tclipLeft = self.options.positions[pos].left/100 * self.dimensions.width;\n\t\t\t\t\tclipRight = self.options.positions[pos].width/100 * self.dimensions.width + clipLeft;\n\t\t\t\t\tclipBottom = self.options.positions[pos].height/100 * self.dimensions.height + clipTop;\n\t\t\t\t}\n\n\t\t\t\tsegmenterPiece.style.clip = 'rect(' + clipTop + 'px,' + clipRight + 'px,' + clipBottom + 'px,' + clipLeft + 'px)';\n\t\t\t});\n\t\t}, 10);\n\t\twindow.addEventListener('resize', this.debounceResize);\n\t\t\n\t\t// Mousemove and Deviceorientation:\n\t\tif( this.options.parallax ) {\n\t\t\tvar arrRand = createRandIntOrderedArray(this.options.parallaxMovement.min, this.options.parallaxMovement.max, this.options.pieces);\n\t\t\tthis.pieces.forEach(function(piece, pos) {\n\t\t\t\tpiece.setAttribute('data-parallax-translation', typeof self.options.parallaxMovement === 'object' ? arrRand[pos] : self.options.parallaxMovement );\n\t\t\t});\n\t\t\tthis.mousemove = function(ev) {\n\t\t\t\tif( !self.active ) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t\trequestAnimationFrame(function() {\n\t\t\t\t\tself.pieces.forEach(function(piece) {\n\t\t\t\t\t\tvar t = piece.getAttribute('data-parallax-translation'),\n\t\t\t\t\t\t\ttransX = t/(self.dimensions.width)*ev.clientX - t/2,\n\t\t\t\t\t\t\ttransY = t/(self.dimensions.height)*ev.clientY - t/2;\n\n\t\t\t\t\t\tpiece.parentNode.style.transform = piece.parentNode.style.WebkitTransform = 'translate3d(' + transX + 'px,' + transY + 'px,0)';\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t};\n\t\t\twindow.addEventListener('mousemove', this.mousemove);\n\n\t\t\tthis.handleOrientation = function() {\n\t\t\t\tif( !self.active ) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t\tvar y = event.gamma;\n\t\t\t\t// To make computation easier we shift the range of x and y to [0,180]\n\t\t\t\ty += 90;\n\t\t\t\t\n\t\t\t\trequestAnimationFrame(function() {\n\t\t\t\t\tself.pieces.forEach(function(piece) {\n\t\t\t\t\t\tvar t = piece.getAttribute('data-parallax-translation'),\n\t\t\t\t\t\t\ttransX = t/(self.dimensions.width)*y - t/2,\n\t\t\t\t\t\t\ttransY = t/(self.dimensions.height)*y - t/2;\n\n\t\t\t\t\t\tpiece.parentNode.style.transform = piece.parentNode.style.WebkitTransform = 'translate3d(' + transX + 'px,' + transY + 'px,0)';\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t}\n\t\t\twindow.addEventListener('deviceorientation', this.handleOrientation);\n\t\t}\n\t};\n\n\twindow.Segmenter = Segmenter;\n\n})(window);"

/***/ }),

/***/ "../../../../script-loader/addScript.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),

/***/ "../../../../script-loader/index.js!../../../../../src/assets/js/anime.min.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../script-loader/addScript.js")(__webpack_require__("../../../../raw-loader/index.js!../../node_modules/source-map-loader/index.js!../../../../../src/assets/js/anime.min.js"))

/***/ }),

/***/ "../../../../script-loader/index.js!../../../../../src/assets/js/imagesloaded.pkgd.min.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../script-loader/addScript.js")(__webpack_require__("../../../../raw-loader/index.js!../../node_modules/source-map-loader/index.js!../../../../../src/assets/js/imagesloaded.pkgd.min.js"))

/***/ }),

/***/ "../../../../script-loader/index.js!../../../../../src/assets/js/main.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../script-loader/addScript.js")(__webpack_require__("../../../../raw-loader/index.js!../../node_modules/source-map-loader/index.js!../../../../../src/assets/js/main.js"))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../script-loader/index.js!../../../../../src/assets/js/main.js");
__webpack_require__("../../../../script-loader/index.js!../../../../../src/assets/js/anime.min.js");
module.exports = __webpack_require__("../../../../script-loader/index.js!../../../../../src/assets/js/imagesloaded.pkgd.min.js");


/***/ })

},[3]);
//# sourceMappingURL=scripts.bundle.js.map