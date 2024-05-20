import { footerTemplate, headerTemplate, navTemplate } from "./layoutTemplate";

export function LayoutRender() {
    $('header').replaceWith(headerTemplate);
    $('nav').replaceWith(navTemplate);
    $('footer').replaceWith(footerTemplate);
}