import Product from "../models/ProductModel";
import CarouselHandler from "./Carousel";
import { LoadCartHandler } from "./header";
import { LayoutRender } from "./layoutHelper";
import { MyLocalStorage } from "./localStorage";
let myLocalStorage = new MyLocalStorage();

$(
function(){
    LayoutRender();
    AddProductHandler();
    CarouselHandler();
}
)
function AddProductHandler():void{
    for(const btnProduct of $('.product-buy')){
        let productTarget:string = $(btnProduct).attr('product-target');
        if(productTarget === null || productTarget === undefined ){
            continue;
        }
        $(btnProduct).on('click',function(){
            let productName:string = $(productTarget.concat(' .product-name')).text();
            let productPrice:string = $(productTarget.concat(' .product-price')).text();
            let productPriceOld:string = $(productTarget.concat(' .product-price-old')).text();
            let productImage:string = $(productTarget.concat(' .product-image')).attr('src');
            let productUnit:string = $(productTarget.concat(' .product-unit-short')).text().slice(2);
            let productLink:string = $(productTarget.concat(' .product-link')).attr('href');
            let isDiscount:boolean = $(productTarget.concat(' .product-discount')).css('visibility') === 'visible';
            
            let product:Product = {
                id:generateGuid(),
                name:productName,
                img:productImage,
                price:productPrice,
                priceOld:isDiscount?'0':productPrice,
                quantity:1,
                unit:productUnit,
                time:Date.now(),
                url:productLink,
                selected:true
            }
            myLocalStorage.AddProduct(product);
            LoadCartHandler();
        })
    }
}

function generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }