import { RenderViewMain } from "./adminLayoutHelper";

$(
    function(){
        CollapseHandler();
        SlideClickHandler();
    }
)

function CollapseHandler():void{
    for(const btnCollsapse of $('.slide-collapse')){
        $(btnCollsapse).on('click', function(){
            $(this).toggleClass('show')
        });
    }
}
function SlideClickHandler():void{
    for(const route of $('.slide-item[routerLink]')){
        $(route).on('click', function(){
            let routerLink = $(this).attr('routerLink');
            for(const _route of $('.slide-item[routerLink]')){
                $(_route).removeClass('active')
            }
            $(this).addClass('active')
            let src = $(this).attr('src');
            RenderViewMain(routerLink,undefined,src);
        })
    }
}