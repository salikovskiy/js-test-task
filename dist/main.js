!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){var r;e.exports=function e(t,n,o){function a(c,l){if(!n[c]){if(!t[c]){if(!l&&"function"==typeof r&&r)return r(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var s=n[c]={exports:{}};t[c][0].call(s.exports,(function(e){return a(t[c][1][e]||e)}),s,s.exports,e,t,n,o)}return n[c].exports}for(var i="function"==typeof r&&r,c=0;c<o.length;c++)a(o[c]);return a}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=a,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return a.appendChild(e)}));var i=o(a,"IMG"),c=o(a,"VIDEO"),l=o(a,"IFRAME");return!0===i&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),i=function(e){return!1!==t.onClose(c)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(c)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&i()}));var c={element:function(){return n},visible:function(){return a(n)},show:function(e){return!1!==t.onShow(c)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(c)}))},close:i};return c}},{}]},{},[1])(1)},function(e,t,n){"use strict";n.r(t);n(2);var r=n(0);const o=new class{constructor(e){this.value=e}append(e){return this.value+=e,this}prepend(e){return this.value=e+this.value,this}pad(e){return this.value=e+this.value+e,this}}(".");o.append("^").prepend("^").pad("="),console.log(o);const a=document.querySelector(".js-input"),i=document.querySelector("[data-action=render]"),c=document.querySelector("[data-action=destroy]"),l=document.querySelector("#boxes");let u=30;const s=()=>{let e=document.createElement("DIV");e.style.height+=`${u}`+"px",e.style.width+=`${u}`+"px";const t=Math.round(255*Math.random()),n=Math.round(255*Math.random()),r=Math.round(255*Math.random());e.style.backgroundColor=`rgba(${t},${n},${r})`,l.appendChild(e),u+=10};i.addEventListener("click",()=>{for(let e=0;e<a.value;e++)s(a.value)}),c.addEventListener("click",()=>{l.innerHTML=""});const d={currentPage:0,inputValue:"",responce:""},f=document.querySelector(".gallery"),h=document.querySelector("#search-form"),p=(e,t)=>fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${e}&page=${t}&per_page=20&key=14450933-d0f1a699d902287387897d7a1`).then(e=>e.json()).then(m.observe(document.querySelector(".intersection-trigger"))),m=new IntersectionObserver(e=>{let t="";e.forEach(e=>{e.intersectionRatio>0&&d.currentPage>0&&p(d.inputValue,d.currentPage+=1).then(e=>{e.hits.forEach(e=>{t+=`<li class="gallery__item">\n                            <a\n                              class="gallery__link"\n                              href="${e.largeImageURL}"\n                            >\n                              <img\n                                class="gallery__image"\n                                src="${e.webformatURL}"\n                                data-source="${e.largeImageURL}"\n                                alt="${e.tags}"\n                              />\n                            </a>\n                          </li>`}),f.insertAdjacentHTML("beforeend",t)})})},{root:null,rootMargin:"0px",threshold:1});f.addEventListener("click",e=>{if(e.preventDefault(),"IMG"===e.target.nodeName){const t=r.create(`\n            <div class="modal">\n                <img src=${e.target.dataset.source}>\n                <button class='closeButton'>X</button>\n            </div>\n        `);t.show(),document.querySelector(".closeButton").addEventListener("click",()=>{t.close()})}}),h.addEventListener("submit",e=>{let t="";e.preventDefault(),d.inputValue=h.query.value,d.currentPage=1,p(d.inputValue,d.currentPage).then(e=>{e.hits.forEach(e=>{t+=`<li class="gallery__item">\n                <a\n                  class="gallery__link"\n                  href="${e.largeImageURL}"\n                >\n                  <img\n                    class="gallery__image"\n                    src="${e.webformatURL}"\n                    data-source="${e.largeImageURL}"\n                    alt="${e.tags}"\n                  />\n                </a>\n              </li>`}),f.innerHTML=t})})},function(e,t,n){}]);