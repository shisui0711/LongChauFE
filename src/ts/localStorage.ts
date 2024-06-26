import Cart from "../models/CartModel";
import Product from "../models/ProductModel";
import { PriceRender, ToCurrency } from "./Helper";
export class MyLocalStorage{
    public SetSelectAllProduct(value:boolean = true) {
        if(localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined){
            return;
        }
        let cart:string = localStorage.getItem('cart');
        let cartObject:Cart = JSON.parse(cart);
        cartObject.products.forEach(product=>product.selected = value);
        localStorage.setItem('cart',JSON.stringify(cartObject)
        );
    }
    public SetQuantityProduct(id:string,value:number):void{
        if(localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined){
            return;
        }
        let cart:string = localStorage.getItem('cart');
        let cartObject:Cart = JSON.parse(cart);
        let productExist:Product = cartObject.products.find(p=>p.id === id);
        if(productExist !== undefined){
            productExist.quantity = value;
            localStorage.setItem('cart',JSON.stringify(cartObject));
        }
    }
    public SetSelectProduct(id:string,value:boolean):void{
        if(localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined){
            return;
        }
        let cart:string = localStorage.getItem('cart');
        let cartObject:Cart = JSON.parse(cart);
        let productExist:Product = cartObject.products.find(p=>p.id === id);
        if(productExist !== undefined){
            productExist.selected = value;
            localStorage.setItem('cart',JSON.stringify(cartObject));
        }
    }
    public AddProduct(item: Product):void{
        if(localStorage.getItem('cart') !== null){
            let cart:string = localStorage.getItem('cart');
            let cartObject:Cart = JSON.parse(cart);
            let productExist:Product = cartObject.products.find(p=>p.name === item.name);
            if(productExist !== undefined){
                productExist.quantity += 1;
            }else{
                cartObject.products.push(item);
                cartObject.totalQuantity += 1;
            } 
            localStorage.setItem('cart',JSON.stringify(cartObject));
        }else{
            let cart:Cart = {
                expires:Date.now() + 1000*60*60*24*30,
                totalQuantity:1,
                products:[item]
            }
            localStorage.setItem('cart',JSON.stringify(cart));
        }
    }
    public RemoveProductById(id: string):void{
        if(localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined){
            return;
        }
        let cart:string = localStorage.getItem('cart');
        let cartObject:Cart = JSON.parse(cart);
        cartObject.products = cartObject.products.filter(p=>p.id !== id);
        cartObject.totalQuantity -= 1;
        if(cartObject.totalQuantity === 0){
            localStorage.removeItem('cart');
        }else{
            localStorage.setItem('cart',JSON.stringify(cartObject));
        }
    }
    public ProductCount():number{
        if(localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined){
            return 0;
        }
        let cart:string = localStorage.getItem('cart');
        let cartObject:Cart = JSON.parse(cart);
        return cartObject.products.length;
    }
    public GetTotalQuantity():number{
        if(localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined){
            return 0;
        }
        let cart:string = localStorage.getItem('cart');
        let cartObject:Cart = JSON.parse(cart);
        return cartObject.totalQuantity;
    }
}