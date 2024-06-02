export function RadioHandler():void{
    for(const btnRadio of $('.btn-radio')){
        $(btnRadio).on('click',()=>{
            for(const _btnRadio of $('.btn-radio')){
                $(_btnRadio).attr('checked-state','false');
            }
            $(btnRadio).attr('checked-state','true');
        });
    }
}