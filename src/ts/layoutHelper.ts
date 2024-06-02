import { footerTemplate, headerTemplate, navTemplate } from "./layoutTemplate";

export function LayoutRender():void {
    $('header').replaceWith(headerTemplate);
    $('nav').replaceWith(navTemplate);
    $('footer').replaceWith(footerTemplate);
}