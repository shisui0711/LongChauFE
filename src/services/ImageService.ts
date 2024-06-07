import { ImgurResponseModel } from "../models/ImgurResponseModel";

export async function GetImageUrl(file:File):Promise<string>{
    const formData = new FormData();
    formData.append('image',file);
    formData.append('type', 'file');
    try {
        const response = await fetch("https://api.imgur.com/3/image",
            {
                method : "POST",
                headers : {
                    "Authorization": "Client-ID 3e09a670e34c454",
                },
                body : formData
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