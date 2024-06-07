import { urlApi } from "../../appconfig";
import { Category } from "../viewModels/CategoryVM";

export async function AddCategory(category:Category):Promise<boolean>{
    try{
        await fetch(
            `${urlApi}/categories`,
            {
                method:'POST',
                body:JSON.stringify(category),
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
export async function UpdateCategory(category:Category):Promise<boolean>{
    try {
        let response = await fetch(
            `${urlApi}/categories/${category.id}`,
            {
                method:'PUT',
                body:JSON.stringify(category),
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
export async function DeleteCategory(id:string):Promise<boolean>{
    try{
       let response =  await fetch(
             `${urlApi}/categories/${id}`,
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
 export async function GetCategoryByName(keyword:string):Promise<Category[]>{
    try{
        let categories:Category[] = await GetCategories();
        return categories.filter(c => c.name.toLowerCase().includes(keyword.toLowerCase()));
    }catch(error){
        return [];
    }
}
 export async function GetCategory(id:string):Promise<Category>{
    try{
        let response = await fetch(
            `${urlApi}/categories/${id}`
        )
        return response.json();
    }catch(error){
        console.log(error);
        return null;
    }
}
export async function GetCategories():Promise<Category[]>{
    try{
        let response = await fetch(`${urlApi}/categories`)
        return response.json();
    }catch(error){
        console.log(error);
        return [];
    }
}