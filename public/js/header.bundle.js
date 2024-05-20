(()=>{"use strict";var t={558:(t,e,o)=>{o.d(e,{R:()=>r});class r{SetSelectAllProduct(){if(null===localStorage.getItem("cart")||void 0===localStorage.getItem("cart"))return;let t=localStorage.getItem("cart"),e=JSON.parse(t);e.products.forEach((t=>t.selected=!0)),localStorage.setItem("cart",JSON.stringify(e))}SetQuantityProduct(t,e){if(null===localStorage.getItem("cart")||void 0===localStorage.getItem("cart"))return;let o=localStorage.getItem("cart"),r=JSON.parse(o),a=r.products.find((e=>e.id===t));void 0!==a&&(a.quantity=e,localStorage.setItem("cart",JSON.stringify(r)))}SetSelectProduct(t,e){if(null===localStorage.getItem("cart")||void 0===localStorage.getItem("cart"))return;let o=localStorage.getItem("cart"),r=JSON.parse(o),a=r.products.find((e=>e.id===t));void 0!==a&&(a.selected=e,localStorage.setItem("cart",JSON.stringify(r)))}AddProduct(t){if(null!==localStorage.getItem("cart")){let e=localStorage.getItem("cart"),o=JSON.parse(e),r=o.products.find((e=>e.name===t.name));void 0!==r?r.quantity+=1:(o.products.push(t),o.totalQuantity+=1),localStorage.setItem("cart",JSON.stringify(o))}else{let e={expires:Date.now()+2592e6,totalQuantity:1,products:[t]};localStorage.setItem("cart",JSON.stringify(e))}}RemoveProductById(t){if(null===localStorage.getItem("cart")||void 0===localStorage.getItem("cart"))return;let e=localStorage.getItem("cart"),o=JSON.parse(e);o.products=o.products.filter((e=>e.id!==t)),o.totalQuantity-=1,0===o.totalQuantity?localStorage.removeItem("cart"):localStorage.setItem("cart",JSON.stringify(o))}ProductCount(){if(null===localStorage.getItem("cart")||void 0===localStorage.getItem("cart"))return 0;let t=localStorage.getItem("cart");return JSON.parse(t).products.length}GetTotalQuantity(){if(null===localStorage.getItem("cart")||void 0===localStorage.getItem("cart"))return 0;let t=localStorage.getItem("cart");return JSON.parse(t).totalQuantity}}}},e={};function o(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,o),i.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{function t(t){try{return Number.parseInt(Array.from(t.matchAll(/\d+/g)).join(""))}catch(t){return 0}}function e(t){try{let e=t.toLocaleString("vi-VN",{style:"currency",currency:"VND"}).split("");return e.length>0?(e.splice(e.length-2,1),e.join("")):"0"}catch(t){return"0"}}function r(t){return new URL(t).pathname}let a=new(o(558).R);function i(){if(null===localStorage.getItem("cart")||void 0===localStorage.getItem("cart"))return void $(".cart-badge").css("visibility","hidden");let o=localStorage.getItem("cart"),r=JSON.parse(o);"0"===$(".cart-badge").text(r.totalQuantity).text()?$(".cart-badge").css("visibility","hidden"):$(".cart-badge").css("visibility","visible"),$(".cart-container").empty();for(const o of r.products){let r=`<div class="row align-items-center mb-3">\n        <div class="col-2">\n            <img src="${o.img}" alt="${o.id}">\n        </div>\n        <div class="col-8">\n            <span class="product-name line-clamp-2">${o.name}</span>\n            <span class="text-blue fw-semibold text-small">${e(t(o.price)*o.quantity)}</span>\n            <span class="text-small-2 fw-normal text-gray-light ms-1 ${"0"===o.priceOld[0]?"invisible":""}"><del>${e(t(o.priceOld)*o.quantity)}</del></span>\n            <span class="text-small-2 fw-medium text-gray-light ms-4">${o.quantity} ${o.unit}</span>\n        </div>\n        <div class="col-2 cart-remove" role="button" target="${o.id}">\n            <span>\n                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.91602 7.03125L4.16144 22.0657C4.25069 23.1499 5.17422 24 6.26256 24H17.7378C18.8261 24 19.7497 23.1499 19.8389 22.0657L21.0843 7.03125H2.91602ZM8.48387 21.1875C8.11581 21.1875 7.80616 20.9012 7.78281 20.5283L7.07969 9.18455C7.05564 8.79661 7.3502 8.46291 7.73748 8.43886C8.13916 8.41069 8.45847 8.70872 8.48317 9.09666L9.1863 20.4404C9.21119 20.8421 8.89333 21.1875 8.48387 21.1875ZM12.7033 20.4844C12.7033 20.873 12.3888 21.1875 12.0002 21.1875C11.6115 21.1875 11.297 20.873 11.297 20.4844V9.14062C11.297 8.75198 11.6115 8.4375 12.0002 8.4375C12.3888 8.4375 12.7033 8.75198 12.7033 9.14062V20.4844ZM16.9206 9.18459L16.2175 20.5283C16.1944 20.8974 15.8867 21.205 15.4718 21.1861C15.0845 21.1621 14.79 20.8284 14.814 20.4405L15.5171 9.0967C15.5412 8.70877 15.8811 8.42653 16.2628 8.43891C16.6501 8.46295 16.9447 8.79666 16.9206 9.18459Z" fill="#020B27"></path><path d="M21.1406 2.8125H16.9219V2.10938C16.9219 0.946219 15.9757 0 14.8125 0H9.1875C8.02434 0 7.07812 0.946219 7.07812 2.10938V2.8125H2.85938C2.0827 2.8125 1.45312 3.44208 1.45312 4.21875C1.45312 4.99533 2.0827 5.625 2.85938 5.625C9.32653 5.625 14.6737 5.625 21.1406 5.625C21.9173 5.625 22.5469 4.99533 22.5469 4.21875C22.5469 3.44208 21.9173 2.8125 21.1406 2.8125ZM15.5156 2.8125H8.48438V2.10938C8.48438 1.72144 8.79956 1.40625 9.1875 1.40625H14.8125C15.2004 1.40625 15.5156 1.72144 15.5156 2.10938V2.8125Z" fill="#020B27"></path></svg>\n            </span>\n        </div>\n        </div>`;$(".cart-container").append(r)}$(".cart-total").text(r.totalQuantity),function(){for(const t of $(".cart-remove"))$(t).on("click",(function(){let e=$(t).attr("target");if(null==e)return;if(null===localStorage.getItem("cart")||void 0===localStorage.getItem("cart"))return;a.RemoveProductById(e);let o=a.GetTotalQuantity();$(".cart-badge").text(o),0===o&&$(".cart-extend").css("visibility","hidden").css("opacity","0"),i()}))}()}$((function(){$("#txtSearch").on("focusin",(()=>{$(".search-extend").css("visibility","visible").css("opacity","1")})).on("focusout",(()=>{$(".search-extend").css("visibility","hidden").css("opacity","0")})).on("input",(()=>{""!==$("#txtSearch").val()?$("#remove_search").css("visibility","visible"):$("#remove_search").css("visibility","hidden")})),$("#remove_search").on("click",(()=>{$("#txtSearch").val(""),$("#remove_search").css("visibility","hidden")})),$("#btnLogin").on("click",(()=>{$(".login-container").css("visibility","visible"),$(".login-backdrop").css("visibility","visible")})),$("#btnCloseLogin").on("click",(()=>{$(".login-container").css("visibility","hidden"),$(".login-backdrop").css("visibility","hidden")})),$("#txtPhone").on("input",(()=>{""!==$("#txtPhone").val()?($("#removePhone").prop("hidden",!1),$("#txtPhone").val().toString().match(/\d+/g)?($("#errorPhoneMsg").prop("hidden",!0),$("#txtPhone").css("border-color","blue").css("background-color","white")):($("#errorPhoneMsg").prop("hidden",!1),$("#txtPhone").css("border-color","red").css("background-color","rgb(254, 243, 242)"))):$("#removePhone").prop("hidden",!0)})),$("#removePhone").on("click",(()=>{$("#txtPhone").val(""),$("#removePhone").prop("hidden",!0),$("#errorPhoneMsg").prop("hidden",!0),$("#txtPhone").css("border-color","blue").css("background-color","white")})),$(".cart").on("mouseover",(()=>{if("/giohang.html"===r(window.location.href))return;let t=Number($(".cart-badge").text());0!==t&&void 0!==t?$(".cart-extend").css("visibility","visible").css("opacity","1"):$(".cart-extend").css("visibility","hidden").css("opacity","0")})).on("mouseout",(()=>{"/giohang.html"!==r(window.location.href)&&$(".cart-extend").css("visibility","hidden").css("opacity","0")})),$(".cart-extend").on("mouseover",(()=>{let t=Number($(".cart-badge").text());0!==t&&void 0!==t?$(".cart-extend").css("visibility","visible").css("opacity","1").on("mouseout",(()=>{$(".cart-extend").css("visibility","hidden").css("opacity","0")})):$(".cart-extend").css("visibility","hidden").css("opacity","0")})),i(),$(".cart").on("click",(()=>{if(null===localStorage.getItem("cart")||void 0===localStorage.getItem("cart"))return void(window.location.href="/giohangempty.html");let t=localStorage.getItem("cart"),e=JSON.parse(t);null!=e&&0!==e.products.length?window.location.href="/giohang.html":window.location.href="/giohangempty.html"}))}))})()})();