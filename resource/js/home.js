"use strict";function ajax(t){function e(t){var e=[];for(var n in t)e.push("&"+n+"="+t[n]);return e.join("").slice(1)}var n=new XMLHttpRequest,a=t.type,s=t.dataType,i=e(t.data),r=t.success,c=t.error;n.onreadystatechange=function(){if(4===n.readyState){var t=s&&"text"===s?n.responseText:JSON.parse(n.responseText);200===n.status?"function"==typeof r&&r(t):"function"==typeof c&&c(t)}},n.open(a||"get",t.url+("post"===a?"":i?"?"+i:""),t.asnyc||1),i&&"post"===a&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(i||null)}function Banner(t){function e(t){var e,n,a,s,o,d,l,p,m,h,v=document.createElement("a");v.href=t.anchorHref,v.style.backgroundImage="url("+t.imageUrl+")",v.title=t.name,v.addEventListener("touchstart",function(t){clearInterval(u),this.classList.remove("current"),e=t.touches[0].clientX,n=Date.now()},0),v.addEventListener("touchmove",function(t){d=t.touches[0].clientX-e,o=d<0,v.style.left=d+"px",o?(g[i(0)].getDOM().style.left=null,g[i(1)].getDOM().style.left=f+d+"px"):(g[i(0)].getDOM().style.left=d-f+"px",g[i(1)].getDOM().style.left=null)},0),v.addEventListener("touchend",function(t){a=t.changedTouches[0].clientX,s=Date.now(),d=a-e,o=d>0,d=Math.abs(d),l=s-n,d<f/2&&l>=300?(o?g[i(0)].getDOM().classList.add("rtl"):g[i(1)].getDOM().classList.add("ltr"),p="init"):o&&(d>=f/2||l<300)?(g[i(0)].getDOM().classList.add("init"),p="ltr",h=1):(g[i(1)].getDOM().classList.add("init"),p="rtl",h=1),this.classList.add(p),u=c()},0),v.addEventListener("animationend",function(t){m=t.animationName,~["init","ltr","rtl","previous"].indexOf(m)&&(this.classList.remove(m),this.style.left="init"===m?0:null,"ltr"===m?h&&r(i(0),1):"rtl"===m&&h&&r(i(1),1)),h=0}),this.getDOM=function(){return v}}function n(){var e,n,i=document.createDocumentFragment(),r=document.createDocumentFragment(),c=document.createElement("div");return c.className="indicator",t.map(function(t,i){g.push(a(r,e,Object.assign({index:i},t))),v.push(s(c,n,i))}),i.appendChild(r),i.appendChild(c),i}function a(t,n,a){return n=new e(a),t.appendChild(n.getDOM()),n}function s(t,e,n){return e=document.createElement("em"),e.appendChild(document.createTextNode(n+1)),e.addEventListener("touchstart",function(t){clearInterval(u)}),e.addEventListener("touchend",function(){u=c(),r(n)},0),t.appendChild(e),e}function i(t){return[(m>0?m:l)-1,m<l-1?m+1:0][t]}function r(t,e){p=m,m=t,h=i(m,1),e||(g[p].getDOM().classList.remove("current"),g[p].getDOM().classList.add("previous"),g[m].getDOM().classList.add("current")),v[p].classList.remove("current"),v[m].classList.add("current")}function c(){return setInterval(function(){r(i(1))},4e3)}function o(){d.appendChild(n()),g[m].getDOM().style.left=0,v[m].classList.add("current"),u=c()}var u,d=t.position,t=t.option,l=t.length,f=d.offsetWidth,p=l-1,m=0,h=1,g=[],v=[];o()}document.documentElement.style.fontSize=window.innerWidth/20+"px";var banner=document.querySelector(".banner");ajax({url:"http://www.ikindness.cn/api/test/get",success:function(t){new Banner({position:banner,option:t.data})}});