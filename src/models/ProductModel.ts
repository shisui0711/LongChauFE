export default interface Product{
    id:string
    name:string;
    img:string;
    price:string;
    priceOld:string;
    quantity:number;
    unit:string;
    time?:number;
    url?:string;
    selected:boolean;
}