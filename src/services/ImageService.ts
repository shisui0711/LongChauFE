import { ConvertFileToBase64 } from "../helpers/ConverterHelper";
import { ImgurResponseModel } from "../models/ImgurResponseModel";
const apiKey:string = "7b01ffc71f98f9b012c2cd72aa4d92f2";
export async function GetImageUrl(file:File):Promise<string>{
    const imageBase64:string = await ConvertFileToBase64(file);
    console.log(imageBase64)
    const formData = new FormData();
    formData.append('image',imageBase64);
    try {
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,
            {
                method : "POST",
                body : formData,
                mode : 'no-cors'
            }
        )
        console.log(response);
        if(!response.ok) return "";
        const responseJson:ImgurResponseModel = await response.json() as ImgurResponseModel;
        return responseJson.data.link;
    } catch (error) {
        console.log(error)
        return "";
    }
}