export interface ImgurResponseModel {
    status:number,
    success:boolean,
    data:{
        id:string,
        deletehash:string,
        account_id:string,
        account_url:string,
        ad_type:string,
        ad_url:string,
        title:string,
        description:string,
        name:string,
        type:string,
        width:number,
        height:number,
        size:number,
        views:number,
        section:string,
        vote:string,
        bandwidth:number,
        animated:boolean,
        favorite:boolean,
        in_gallery:boolean,
        in_most_viral:boolean,
        has_sound:boolean,
        is_ad:boolean,
        nsfw:string,
        link:string,
        tags:string[],
        datetime:number,
        mp4:string,
        hls:string
    }
}