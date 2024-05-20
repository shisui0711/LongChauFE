import { LayoutRender } from "./layoutHelper";

$(
    function(){
        LayoutRender();
        IncreaseAndDesceaseHandlder();
    }
)
function IncreaseAndDesceaseHandlder():void{
    $('#productQuantity').on('input',()=>{
        let quantity:number = Number($('#productQuantity').val());
        if(quantity < 1){
            $('#productQuantity').val('1');
            $('#increseQuantity svg path').css('stroke','black');
            $('#decresseQuantity svg path').css('stroke','gray');
        }
        else if(quantity > 999){
            $('#productQuantity').val('999');
            $('#increseQuantity svg path').css('stroke','gray');
            $('#decresseQuantity svg path').css('stroke','black');
        }
    });
    $('#decresseQuantity').on('click',()=>{
        let quantity:number = Number($('#productQuantity').val());
        if(quantity === 1){
            return;
        }
        if(--quantity === 1)
            $('#decresseQuantity svg path').css('stroke','gray')
        if(quantity <999)
            $('#increseQuantity svg path').css('stroke','black')
        $('#productQuantity').val(quantity)
    });
    $('#increseQuantity').on('click',()=>{
        let quantity:number = Number($('#productQuantity').val());
        if(quantity === 999){
            return;
        }
        if(++quantity === 999)
            $('#increseQuantity svg path').css('stroke','gray')
        if(quantity > 1)
            $('#decresseQuantity svg path').css('stroke','black')
        $('#productQuantity').val(quantity)
    });
}