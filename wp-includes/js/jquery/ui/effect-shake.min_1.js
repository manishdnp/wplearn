/*!
 * jQuery UI Effects Shake 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(h){return h.effects.define("shake",function(e,n){var t=1,i=h(this),a=e.direction||"left",f=e.distance||20,u=e.times||3,s=2*u+1,c=Math.round(e.duration/s),o="up"===a||"down"===a?"top":"left",d="up"===a||"left"===a,r={},m={},g={},a=i.queue().length;for(h.effects.createPlaceholder(i),r[o]=(d?"-=":"+=")+f,m[o]=(d?"+=":"-=")+2*f,g[o]=(d?"-=":"+=")+2*f,i.animate(r,c,e.easing);t<u;t++)i.animate(m,c,e.easing).animate(g,c,e.easing);i.animate(m,c,e.easing).animate(r,c/2,e.easing).queue(n),h.effects.unshift(i,a,1+s)})});