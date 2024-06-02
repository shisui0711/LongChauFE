import { urlApi } from './../../appconfig';
import { Product } from "../viewModels/ProductVM";
export async function AddProduct(product:Product):Promise<boolean>{
    try{
        await fetch(
            `${urlApi}/products`,
            {
                method:'POST',
                body:JSON.stringify(product),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        )
        return true;
    }catch(error){
        console.log(error);
        return false;
    }
}
export async function UpdateProduct(product:Product):Promise<boolean>{
    try {
        let response = await fetch(
            `${urlApi}/products/${product.id}`,
            {
                method:'PUT',
                body:JSON.stringify(product),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        )
        if(response.ok) return true;
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}
export async function DeleteProduct(id:string):Promise<boolean>{
   try{
      let response =  await fetch(
            `${urlApi}/products/${id}`,
            {
                method:'DELETE'
            }
      )
      if(response.ok) return true;
      return false;
   }catch(error){
       console.log(error);
       return false;
   }
}
export async function GetProductByName(keyword:string):Promise<Product[]>{
    try{
        let response = await fetch(
            `${urlApi}/products?q=${keyword}}`
        )
        return response.json();
    }catch(error){
        console.log(error);
        return null;
    }
}
export async function GetProduct(id:string):Promise<Product>{
    try{
        let response = await fetch(
            `${urlApi}/products/${id}`
        )
        return response.json();
    }catch(error){
        console.log(error);
        return null;
    }
}
export async function GetProducts():Promise<Product[]>{
    try{
        let response = await fetch(`${urlApi}/products`)
        return response.json();
    }catch(error){
        console.log(error);
        return [];
    }
}