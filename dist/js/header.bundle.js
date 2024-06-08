/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ MyLocalStorage)
/* harmony export */ });
class MyLocalStorage {
    SetSelectAllProduct() {
        if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined) {
            return;
        }
        let cart = localStorage.getItem('cart');
        let cartObject = JSON.parse(cart);
        cartObject.products.forEach(product => product.selected = true);
        localStorage.setItem('cart', JSON.stringify(cartObject));
    }
    SetQuantityProduct(id, value) {
        if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined) {
            return;
        }
        let cart = localStorage.getItem('cart');
        let cartObject = JSON.parse(cart);
        let productExist = cartObject.products.find(p => p.id === id);
        if (productExist !== undefined) {
            productExist.quantity = value;
            localStorage.setItem('cart', JSON.stringify(cartObject));
        }
    }
    SetSelectProduct(id, value) {
        if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined) {
            return;
        }
        let cart = localStorage.getItem('cart');
        let cartObject = JSON.parse(cart);
        let productExist = cartObject.products.find(p => p.id === id);
        if (productExist !== undefined) {
            productExist.selected = value;
            localStorage.setItem('cart', JSON.stringify(cartObject));
        }
    }
    AddProduct(item) {
        if (localStorage.getItem('cart') !== null) {
            let cart = localStorage.getItem('cart');
            let cartObject = JSON.parse(cart);
            let productExist = cartObject.products.find(p => p.name === item.name);
            if (productExist !== undefined) {
                productExist.quantity += 1;
            }
            else {
                cartObject.products.push(item);
                cartObject.totalQuantity += 1;
            }
            localStorage.setItem('cart', JSON.stringify(cartObject));
        }
        else {
            let cart = {
                expires: Date.now() + 1000 * 60 * 60 * 24 * 30,
                totalQuantity: 1,
                products: [item]
            };
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
    RemoveProductById(id) {
        if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined) {
            return;
        }
        let cart = localStorage.getItem('cart');
        let cartObject = JSON.parse(cart);
        cartObject.products = cartObject.products.filter(p => p.id !== id);
        cartObject.totalQuantity -= 1;
        if (cartObject.totalQuantity === 0) {
            localStorage.removeItem('cart');
        }
        else {
            localStorage.setItem('cart', JSON.stringify(cartObject));
        }
    }
    ProductCount() {
        if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined) {
            return 0;
        }
        let cart = localStorage.getItem('cart');
        let cartObject = JSON.parse(cart);
        return cartObject.products.length;
    }
    GetTotalQuantity() {
        if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined) {
            return 0;
        }
        let cart = localStorage.getItem('cart');
        let cartObject = JSON.parse(cart);
        return cartObject.totalQuantity;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// UNUSED EXPORTS: LoadCartHandler

// EXTERNAL MODULE: ./src/ts/localStorage.ts
var ts_localStorage = __webpack_require__(558);
;// CONCATENATED MODULE: ./src/ts/Helper.ts
function PriceRender(price) {
    try {
        return Number.parseInt(Array.from(price.matchAll(/\d+/g)).join(''));
    }
    catch (error) {
        return 0;
    }
}
function ToCurrency(price) {
    try {
        let rawPriceArr = price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).split('');
        if (rawPriceArr.length > 0) {
            rawPriceArr.splice(rawPriceArr.length - 2, 1);
            return rawPriceArr.join('');
        }
        return '0';
    }
    catch (error) {
        return '0';
    }
}
function getPathFromURL(url) {
    const parsedURL = new URL(url);
    return parsedURL.pathname;
}

;// CONCATENATED MODULE: ./src/ts/header.ts


let myLocalStorage = new ts_localStorage/* MyLocalStorage */.R();
$(function () {
    SearchBoxHandler();
    LoginVisibleHandler();
    InputPhoneHandler();
    CartVisibleHandler();
    LoadCartHandler();
    CartClickHandler();
});
function SearchBoxHandler() {
    $('#txtSearch')
        .on('focusin', () => {
        $('.search-extend')
            .css('visibility', 'visible')
            .css('opacity', '1');
    })
        .on('focusout', () => {
        $('.search-extend')
            .css('visibility', 'hidden')
            .css('opacity', '0');
    })
        .on('input', () => {
        let inputValue = $('#txtSearch').val();
        if (inputValue !== '') {
            $('#remove_search').css('visibility', 'visible');
        }
        else {
            $('#remove_search').css('visibility', 'hidden');
        }
    });
    $('#remove_search')
        .on('click', () => {
        $('#txtSearch').val('');
        $('#remove_search').css('visibility', 'hidden');
    });
}
function CartVisibleHandler() {
    $('.cart')
        .on('mouseover', () => {
        if (getPathFromURL(window.location.href) === "/giohang.html") {
            return;
        }
        let numberProduct = Number($('.cart-badge').text());
        if (numberProduct === 0 || numberProduct === undefined) {
            $('.cart-extend')
                .css('visibility', 'hidden')
                .css('opacity', '0');
            return;
        }
        $('.cart-extend')
            .css('visibility', 'visible')
            .css('opacity', '1');
    })
        .on('mouseout', () => {
        if (getPathFromURL(window.location.href) === "/giohang.html") {
            return;
        }
        $('.cart-extend')
            .css('visibility', 'hidden')
            .css('opacity', '0');
    });
    $('.cart-extend')
        .on('mouseover', () => {
        let numberProduct = Number($('.cart-badge').text());
        if (numberProduct === 0 || numberProduct === undefined) {
            $('.cart-extend')
                .css('visibility', 'hidden')
                .css('opacity', '0');
            return;
        }
        $('.cart-extend')
            .css('visibility', 'visible')
            .css('opacity', '1')
            .on('mouseout', () => {
            $('.cart-extend')
                .css('visibility', 'hidden')
                .css('opacity', '0');
        });
    });
}
function LoadCartHandler() {
    if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined) {
        $('.cart-badge').css('visibility', 'hidden');
        return;
    }
    let cart = localStorage.getItem('cart');
    let cartObject = JSON.parse(cart);
    $('.cart-badge').text(cartObject.totalQuantity).text() === '0' ? $('.cart-badge').css('visibility', 'hidden') : $('.cart-badge').css('visibility', 'visible');
    $('.cart-container').empty();
    for (const product of cartObject.products) {
        let productTemplate = `<div class="row align-items-center mb-3">
        <div class="col-2">
            <img src="${product.img}" alt="${product.id}">
        </div>
        <div class="col-8">
            <span class="product-name line-clamp-2">${product.name}</span>
            <span class="text-blue fw-semibold text-small">${ToCurrency(PriceRender(product.price) * product.quantity)}</span>
            <span class="text-small-2 fw-normal text-gray-light ms-1 ${product.priceOld[0] === '0' ? 'invisible' : ''}"><del>${ToCurrency(PriceRender(product.priceOld) * product.quantity)}</del></span>
            <span class="text-small-2 fw-medium text-gray-light ms-4">${product.quantity} ${product.unit}</span>
        </div>
        <div class="col-2 cart-remove" role="button" target="${product.id}">
            <span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.91602 7.03125L4.16144 22.0657C4.25069 23.1499 5.17422 24 6.26256 24H17.7378C18.8261 24 19.7497 23.1499 19.8389 22.0657L21.0843 7.03125H2.91602ZM8.48387 21.1875C8.11581 21.1875 7.80616 20.9012 7.78281 20.5283L7.07969 9.18455C7.05564 8.79661 7.3502 8.46291 7.73748 8.43886C8.13916 8.41069 8.45847 8.70872 8.48317 9.09666L9.1863 20.4404C9.21119 20.8421 8.89333 21.1875 8.48387 21.1875ZM12.7033 20.4844C12.7033 20.873 12.3888 21.1875 12.0002 21.1875C11.6115 21.1875 11.297 20.873 11.297 20.4844V9.14062C11.297 8.75198 11.6115 8.4375 12.0002 8.4375C12.3888 8.4375 12.7033 8.75198 12.7033 9.14062V20.4844ZM16.9206 9.18459L16.2175 20.5283C16.1944 20.8974 15.8867 21.205 15.4718 21.1861C15.0845 21.1621 14.79 20.8284 14.814 20.4405L15.5171 9.0967C15.5412 8.70877 15.8811 8.42653 16.2628 8.43891C16.6501 8.46295 16.9447 8.79666 16.9206 9.18459Z" fill="#020B27"></path><path d="M21.1406 2.8125H16.9219V2.10938C16.9219 0.946219 15.9757 0 14.8125 0H9.1875C8.02434 0 7.07812 0.946219 7.07812 2.10938V2.8125H2.85938C2.0827 2.8125 1.45312 3.44208 1.45312 4.21875C1.45312 4.99533 2.0827 5.625 2.85938 5.625C9.32653 5.625 14.6737 5.625 21.1406 5.625C21.9173 5.625 22.5469 4.99533 22.5469 4.21875C22.5469 3.44208 21.9173 2.8125 21.1406 2.8125ZM15.5156 2.8125H8.48438V2.10938C8.48438 1.72144 8.79956 1.40625 9.1875 1.40625H14.8125C15.2004 1.40625 15.5156 1.72144 15.5156 2.10938V2.8125Z" fill="#020B27"></path></svg>
            </span>
        </div>
        </div>`;
        $('.cart-container').append(productTemplate);
    }
    $('.cart-total').text(cartObject.totalQuantity);
    RemoveProductHandler();
}
function RemoveProductHandler() {
    for (const btnRemove of $('.cart-remove')) {
        $(btnRemove).on('click', function () {
            let productId = $(btnRemove).attr('target');
            if (productId === null || productId === undefined) {
                return;
            }
            if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined) {
                return;
            }
            myLocalStorage.RemoveProductById(productId);
            let totalQuantity = myLocalStorage.GetTotalQuantity();
            $('.cart-badge').text(totalQuantity);
            if (totalQuantity === 0) {
                $('.cart-extend')
                    .css('visibility', 'hidden')
                    .css('opacity', '0');
            }
            LoadCartHandler();
        });
    }
}
function CartClickHandler() {
    $('.cart').on('click', () => {
        if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined) {
            window.location.href = "/giohangempty.html";
            return;
        }
        let cart = localStorage.getItem('cart');
        let cartObject = JSON.parse(cart);
        if (cartObject === null || cartObject === undefined || cartObject.products.length === 0) {
            window.location.href = "/giohangempty.html";
            return;
        }
        else {
            window.location.href = "/giohang.html";
        }
    });
}
function LoginVisibleHandler() {
    $('#btnLogin').on('click', () => {
        $('.login-container').css('visibility', 'visible');
        $('.login-backdrop').css('visibility', 'visible');
        // $('body').css('overflow','hidden !important');
    });
    $('#btnCloseLogin').on('click', () => {
        $('.login-container').css('visibility', 'hidden');
        $('.login-backdrop').css('visibility', 'hidden');
        // $('body').css('overflow','auto !important');
    });
}
function InputPhoneHandler() {
    $('#txtPhone').on('input', () => {
        if ($('#txtPhone').val() !== '') {
            $('#removePhone').prop('hidden', false);
            let inputValue = $('#txtPhone').val().toString();
            if (!inputValue.match(/\d+/g)) {
                $('#errorPhoneMsg').prop('hidden', false);
                $('#txtPhone')
                    .css('border-color', 'red')
                    .css('background-color', 'rgb(254, 243, 242)');
            }
            else {
                $('#errorPhoneMsg').prop('hidden', true);
                $('#txtPhone')
                    .css('border-color', 'blue')
                    .css('background-color', 'white');
            }
        }
        else {
            $('#removePhone').prop('hidden', true);
        }
    });
    $('#removePhone').on('click', () => {
        $('#txtPhone').val('');
        $('#removePhone').prop('hidden', true);
        $('#errorPhoneMsg').prop('hidden', true);
        $('#txtPhone')
            .css('border-color', 'blue')
            .css('background-color', 'white');
    });
}

})();

/******/ })()
;