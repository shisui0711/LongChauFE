import Cart from "../models/CartModel";
import { PriceRender, ToCurrency } from "./Helper";
import { LayoutRender } from "./layoutHelper";
import { MyLocalStorage } from "./localStorage";

let myLocalStorage = new MyLocalStorage();
$(
    function(){
        if(myLocalStorage.ProductCount() === 0){
            window.location.href = "/giohangempty.html";
        }
        LayoutRender();
        LoadProduct();
    }
)
function LoadProduct():void{
    let cart:string = localStorage.getItem('cart');
    let cartObject:Cart = JSON.parse(cart);
    $('#order_container').empty();
    cartObject.products.forEach(product=>{
        if(!product.selected) return;
        let template:string = `<div id="${product.id}" class="row align-items-center mb-3">
        <div class="col-auto border-gray p-1 rounded-3">
            <img width="48" height="48" class="" src="${product.img}" alt="">
        </div>
        <div class="col-7">
            <span class="text-small">${product.name}</span>
        </div>
        <div class="col-1p5">
            <div totalPriceProduct class="text-small text-black fw-medium text-center">${ToCurrency(PriceRender(product.price)*product.quantity)}</div>
        </div>
        <div class="col-2">
            <div class="text-small text-black text-center">x<span>${product.quantity}</span><span> ${product.unit}</span></div>
        </div>
    </div>
    <hr>`
    $('#order_container').append(template);
    });
    CalulateTotalPrice();
}
function CalulateTotalPrice():void{
    let totalPrice:number = 0;
    for(const totalPriceProduct of $('[totalPriceProduct]')){
        totalPrice += Number(PriceRender($(totalPriceProduct).text()));
    }
    $('#totalPrice').text(ToCurrency(totalPrice));
    $('#finalPrice').text(ToCurrency(totalPrice));
}