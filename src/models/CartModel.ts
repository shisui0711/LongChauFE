import Product from "./ProductModel";

export default interface Cart{
    expires?:number;
    totalQuantity:number;
    products:Product[];
}