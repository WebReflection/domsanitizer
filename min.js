/*! (c) Andrea Giammarchi - ISC */
var domsanitizer=function(e){"use strict";var t,n,r,a="-"+Math.random().toFixed(6)+"%";try{t=document.createElement("template"),r="tabindex",(n="content")in t&&(t.innerHTML="<p "+r+'="'+a+'"></p>',t[n].childNodes[0].getAttribute(r)==a)||(a="_dt: "+a.slice(1,-1)+";")}catch(e){}var i="\x3c!--"+a+"--\x3e",c=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var u=" \\f\\n\\r\\t",o="[^ "+u+"\\/>\"'=]+",s="[ "+u+"]+"+o,m="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",p="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+o+"))?)",d=new RegExp(m+s+p+"+)([ "+u+"]*/?>)","g"),g=new RegExp(m+s+p+"*)([ "+u+"]*/>)","g"),l=new RegExp("("+s+"\\s*=\\s*)(['\"]?)"+i+"\\2","gi");function x(e,t,n,r){return"<"+t+n.replace(l,b)+r}function b(e,t,n){return t+(n||'"')+a+(n||'"')}function f(e,t,n){return c.test(t)?e:"<"+t+n+"></"+t+">"}return function(e){return e.join(i).replace(g,f).replace(d,x)}}();
