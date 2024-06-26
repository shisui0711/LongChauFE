/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/ts/admin/adminLayoutHelper.ts
function RenderViewMain(templateUrl, styleUrl, scriptUrl) {
    fetch(templateUrl)
        .then(response => response.text())
        .then(template => {
        // console.log(template);
        // Thực hiện các thao tác với template đã lấy
        $('.app-content').empty();
        if (styleUrl != undefined && styleUrl != null) {
            $('head').append(`<link rel="stylesheet" href="${styleUrl}">`);
        }
        $('.app-content').append(template);
        if (scriptUrl != undefined && scriptUrl != null) {
            $('.app-content').append(`<script src="${scriptUrl}"></script>`);
        }
    })
        .catch(error => {
        console.error('Lỗi khi lấy mẫu:', error);
    });
}

;// CONCATENATED MODULE: ./src/ts/admin/admin.ts

$(function () {
    CollapseHandler();
    SlideClickHandler();
});
function CollapseHandler() {
    for (const btnCollsapse of $('.slide-collapse')) {
        $(btnCollsapse).on('click', function () {
            $(this).toggleClass('show');
        });
    }
}
function SlideClickHandler() {
    for (const route of $('.slide-item[routerLink]')) {
        $(route).on('click', function () {
            let routerLink = $(this).attr('routerLink');
            for (const _route of $('.slide-item[routerLink]')) {
                $(_route).removeClass('active');
            }
            $(this).addClass('active');
            let src = $(this).attr('src');
            RenderViewMain(routerLink, undefined, src);
        });
    }
}

/******/ })()
;