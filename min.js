/*! (c) Andrea Giammarchi - ISC */
var domsanitizer=function(){"use strict";var e,t,n,r="-"+Math.random().toFixed(6)+"%";try{e=document.createElement("template"),n="tabindex",(t="content")in e&&(e.innerHTML="<p "+n+'="'+r+'"></p>',e[t].childNodes[0].getAttribute(n)==r)||(r="_dt: "+r.slice(1,-1)+";",!0)}catch(e){}var a="\x3c!--"+r+"--\x3e",i=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var c=" \\f\\n\\r\\t",u="[^"+c+"\\/>\"'=]+",o="["+c+"]+"+u,p="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",s="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+u.replace("\\/","")+"))?)",m=new RegExp(p+o+s+"+)(["+c+"]*/?>)","g"),l=new RegExp(p+o+s+"*)(["+c+"]*/>)","g"),d=new RegExp("("+o+"\\s*=\\s*)(['\"]?)"+a+"\\2","gi");function g(e,t,n,r){return"<"+t+n.replace(d,x)+r}function x(e,t,n){return t+(n||'"')+r+(n||'"')}function b(e,t,n){return i.test(t)?e:"<"+t+n+"></"+t+">"}return function(e){return e.join(a).replace(l,b).replace(m,g)}}();
