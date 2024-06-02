
export function StateChangeHandler():void{
    $('.btn-switch').on('click',()=>{
        let raw_state:string = $('.btn-switch').attr('check-state');
        if(raw_state === "true"){
            $('.btn-switch').attr('check-state',"false")
        }else if(raw_state === "false"){
            $('.btn-switch').attr('check-state',"true")
        }
    })
}