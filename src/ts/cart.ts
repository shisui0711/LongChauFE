import { MyLocalStorage } from './localStorage';
import Cart from "../models/CartModel";
import { LayoutRender } from './layoutHelper';
import { PriceRender, ToCurrency } from './Helper';
let myLocalStorage = new MyLocalStorage();
$(
    function(){
        if(myLocalStorage.ProductCount() === 0){
            window.location.href = "/giohangempty.html";
        }
        LayoutRender();
        LoadProductInCart();
        CartChangeHandler();
        RemoveOrderProductHandler();
        OrderConfirmHandler();
    }
)
function LoadProductInCart():void{
    let cart:string = localStorage.getItem('cart');
    let cartObject:Cart = JSON.parse(cart);
    $('#order_container').empty();
    cartObject.products.forEach(product=>{
        let template = `<div id="${product.id}" class="row align-items-center">
        <div class="col-auto">
            <input target-product="#${product.id}" class="form-check-input" type="checkbox" ${product.selected ? 'checked': ''}>
        </div>
        <div class="col-auto border-gray p-1 rounded-3">
            <img width="48" height="48" src="${product.img}" alt="">
        </div>
        <div class="col-4">
            <span class="text-small">${product.name}</span>
        </div>
        <div class="col-1p5">
            <div productPrice hidden class="text-small text-blue fw-medium text-center">${product.price}</div>
            <div totalOfProduct class="text-small text-blue fw-medium text-center">${product.price}</div>
        </div>
        <div class="col-2">
            <div class="row align-items-center justify-content-center">
                <div class="col-auto px-0"><span target-product="#${product.id}" class="btn-decrease border-gray rounded-start-4 p-2" ><svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path  d="M3.75 12H20.25" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div>
                <div class="col-auto px-0"><input productQuantity target-product="#${product.id}" class="border-gray text-center" type="number" min="1" max="999" maxlength="3" value="${product.quantity}" style="width: 40px;height: 36.5px;"></div>
                <div class="col-auto px-0"><span target-product="#${product.id}" class="btn-increase border-gray rounded-end-4 p-2" ><svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8834 3.00673L12 3C12.5128 3 12.9355 3.38604 12.9933 3.88338L13 4V11H20C20.5128 11 20.9355 11.386 20.9933 11.8834L21 12C21 12.5128 20.614 12.9355 20.1166 12.9933L20 13H13V20C13 20.5128 12.614 20.9355 12.1166 20.9933L12 21C11.4872 21 11.0645 20.614 11.0067 20.1166L11 20V13H4C3.48716 13 3.06449 12.614 3.00673 12.1166L3 12C3 11.4872 3.38604 11.0645 3.88338 11.0067L4 11H11V4C11 3.48716 11.386 3.06449 11.8834 3.00673L12 3L11.8834 3.00673Z" fill="currentColor"></path></svg></span></div>
            </div>
        </div>
        <div class="col-2">
            <select class="form-select">
                <option>${product.unit}</option>
            </select>
        </div>
        <div class="col-auto">
            <span class="text-gray" role="button" remove-target="#${product.id}"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px]"><path d="M2.91602 7.03125L4.16144 22.0657C4.25069 23.1499 5.17422 24 6.26256 24H17.7378C18.8261 24 19.7497 23.1499 19.8389 22.0657L21.0843 7.03125H2.91602ZM8.48387 21.1875C8.11581 21.1875 7.80616 20.9012 7.78281 20.5283L7.07969 9.18455C7.05564 8.79661 7.3502 8.46291 7.73748 8.43886C8.13916 8.41069 8.45847 8.70872 8.48317 9.09666L9.1863 20.4404C9.21119 20.8421 8.89333 21.1875 8.48387 21.1875ZM12.7033 20.4844C12.7033 20.873 12.3888 21.1875 12.0002 21.1875C11.6115 21.1875 11.297 20.873 11.297 20.4844V9.14062C11.297 8.75198 11.6115 8.4375 12.0002 8.4375C12.3888 8.4375 12.7033 8.75198 12.7033 9.14062V20.4844ZM16.9206 9.18459L16.2175 20.5283C16.1944 20.8974 15.8867 21.205 15.4718 21.1861C15.0845 21.1621 14.79 20.8284 14.814 20.4405L15.5171 9.0967C15.5412 8.70877 15.8811 8.42653 16.2628 8.43891C16.6501 8.46295 16.9447 8.79666 16.9206 9.18459Z" fill="currentColor"></path><path d="M21.1406 2.8125H16.9219V2.10938C16.9219 0.946219 15.9757 0 14.8125 0H9.1875C8.02434 0 7.07812 0.946219 7.07812 2.10938V2.8125H2.85938C2.0827 2.8125 1.45312 3.44208 1.45312 4.21875C1.45312 4.99533 2.0827 5.625 2.85938 5.625C9.32653 5.625 14.6737 5.625 21.1406 5.625C21.9173 5.625 22.5469 4.99533 22.5469 4.21875C22.5469 3.44208 21.9173 2.8125 21.1406 2.8125ZM15.5156 2.8125H8.48438V2.10938C8.48438 1.72144 8.79956 1.40625 9.1875 1.40625H14.8125C15.2004 1.40625 15.5156 1.72144 15.5156 2.10938V2.8125Z" fill="currentColor"></path></svg></span>
        </div>
        </div>
        <hr>`
        $('#order_container').append(template);
    });
    SelectProductHandler();
    CalculateTotalPrice();
    CalculateTotalProduct();
    IncreaseAndDesceaseHandlder();
    InputQuantityHandler();
}
function InputQuantityHandler():void{
    for(const input of $('[productQuantity]')){
        let productTarget = input.getAttribute('target-product');
        $(`${productTarget} [productQuantity]`).on('input',()=>{
            let quantity = Number($(`${productTarget} [productQuantity]`).val());
            if(quantity > 999){
                $(`${productTarget} [productQuantity]`).val(999);
                quantity = 999;
            }
            if(quantity < 1){
                $(`${productTarget} [productQuantity]`).val(1);
                quantity = 1;
            }
            CalculateTotalPrice();
            myLocalStorage.SetQuantityProduct(productTarget.substring(1),quantity);
        })
    }
}
function IncreaseAndDesceaseHandlder():void{
    for(const btnInscrese of $('.btn-increase')){
        let productTarget = btnInscrese.getAttribute('target-product')
        $(`${productTarget} .btn-increase`).on('click',()=>{
            let quantity:number = Number($(`${productTarget} [productQuantity]`).val());
            if(quantity === 999) return;
            if(++quantity === 999)
                $(`${productTarget} .btn-increase svg path`).css('stroke','gray')
            if(quantity > 1)
                $(`${productTarget} .btn-decrease svg path`).css('stroke','black')
            $(`${productTarget} [productQuantity]`).val(quantity)
            myLocalStorage.SetQuantityProduct(productTarget.substring(1),quantity);
            CalculateTotalPrice();
        })
    }
    for(const btnDescease of $('.btn-decrease')){
        let productTarget = btnDescease.getAttribute('target-product')
        $(`${productTarget} .btn-decrease`).on('click',()=>{
            let quantity:number = Number($(`${productTarget} [productQuantity]`).val());
            if(quantity === 1) return;
            if(--quantity === 1)
                $(`${productTarget} .btn-decrease svg path`).css('stroke','gray');
            if(quantity <999)
                $(`${productTarget} .btn-increase svg path`).css('stroke','black');
            $(`${productTarget} [productQuantity]`).val(quantity);
            myLocalStorage.SetQuantityProduct(productTarget.substring(1),quantity);
            CalculateTotalPrice();
        })
    }
}
function RemoveOrderProductHandler():void{
    for(const btnRemove of $('[remove-target]')){
        let productTarget = btnRemove.getAttribute('remove-target');
        $(`${productTarget} [remove-target]`).on('click',()=>{
            let productId:string = $(`${productTarget} [remove-target]`).attr('remove-target');
            myLocalStorage.RemoveProductById(productId.substring(1));
            if(myLocalStorage.ProductCount() ===0){
                window.location.href = "./giohangempty.html"
            }else{
                LoadProductInCart();
            }
        })
    }
}
function CalculateTotalProduct():void{
    let totalProdcut:number = $('#order_container > :not(hr)').length;
    $('#totalProduct').text(totalProdcut);
}
function CartChangeHandler():void{
    $('#order_container').on('change',(event)=>{
        console.log("Order has been changed: ",event.target);
    });
}
function CalculateTotalPrice():void{
    let totalPrice:number = 0;
    for(const product of $('input[target-product]:checked')){
        let targetProduct = product.getAttribute('target-product');
        let quantity = Number($(`${targetProduct} [productQuantity]`).val());
        let price = Number(PriceRender($(`${targetProduct} [productPrice]`).text()));
        $(`${targetProduct} [totalOfProduct]`).text(ToCurrency(price * quantity))
        totalPrice+= price * quantity;
    }
    $('#totalPrice').text(ToCurrency(totalPrice));
    $('#finalPrice').text(ToCurrency(totalPrice));
}
function SelectProductHandler():void{
    $('#checkAll').on('change',()=>{
        if($('#checkAll').is(':checked')){
            $('input[type="checkbox"][target-product]').prop('checked',true);
            myLocalStorage.SetSelectAllProduct();
            CalculateTotalPrice();
        }
    })
    for(const checkbox of $('input[type="checkbox"][target-product]')){
        $(checkbox).on('change',()=>{
            CalculateTotalPrice();
            if(!$(checkbox).prop('checked')){
                $('#checkAll').prop('checked',false);
                let targetProduct = checkbox.getAttribute('target-product');
                myLocalStorage.SetSelectProduct(targetProduct.substring(1),false);
            }else{
                let targetProduct = checkbox.getAttribute('target-product');
                myLocalStorage.SetSelectProduct(targetProduct.substring(1),true);
            }
        })
    }
}
function OrderConfirmHandler():void{
    $('#btnOrderConfirm').on('click',()=>{
        for(const checkbox of $('input[type="checkbox"][target-product]:checked')){
            let targetProduct:string = checkbox.getAttribute('target-product');
            myLocalStorage.SetSelectProduct(targetProduct.substring(1),true);
        }
        window.location.href = "./thanhtoan.html";
    })
}
