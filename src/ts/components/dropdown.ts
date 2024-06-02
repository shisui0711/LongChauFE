import { GetErrorMessage } from "../projectTemplate";

export function LoadAllDropdown():void{
    ShowDropdownHandler();
    InputSearchHandler();
    RemoveSearchHandler();
    ItemSelectHandler();
}
function InputSearchHandler():void{
    for(const input of $('[input-search]')){
        let dropdownTarget = input.getAttribute('dropdown-target');
        if(dropdownTarget === null || dropdownTarget === ""){
            continue;
        }
        $(`${dropdownTarget} [input-search]`).on('input',()=>{
            let inputValue:string = $(`${dropdownTarget} [input-search]`).val().toString();
            if(inputValue.length > 0){
                $(`${dropdownTarget} [reset-search]`).prop('hidden',false);
            }else{
                $(`${dropdownTarget} [reset-search]`).prop('hidden',true);
            }
        });
    }
}
function RemoveSearchHandler():void{
    for(const btnRemove of $('[reset-search]')){
        let dropdownTarget = btnRemove.getAttribute('dropdown-target');
        if(dropdownTarget === null || dropdownTarget === ""){
            continue;
        }
        $(`${dropdownTarget} [reset-search]` ).on('click',()=>{
           $(`${dropdownTarget} [input-search]`).val('');
           $(`${dropdownTarget} [reset-search]`).prop('hidden',true);
           $(`${dropdownTarget} [input-search]`).trigger('input');
        });
    }
}
function ShowDropdownHandler():void{
    for(const btnDropdown of $('.input-dropdown')){
        let target:string = btnDropdown.getAttribute('dropdown-target');
        if(target === null || target === ""){
            continue;
        }
        $(`.input-dropdown[dropdown-target="${target}"]`).on('click',()=>{
            $(`.input-dropdown[dropdown-target="${target}"]`).toggleClass('active');
        })
    }
}
function ItemSelectHandler():void{
    for(const dropMenu of $('.input-dropdown-menu')){
        let id:string = dropMenu.getAttribute('id');
        if(id === null || id === ""){
            continue;
        }
        for(const item of $(`#${id} .input-dropdown-menu-item`)){
            $(item).on('click',()=>{
                for(const _item of $(`#${id} .input-dropdown-menu-item`)){
                    $(_item).attr('state',"");
                }
                $(item).attr('state',"selected");
                $(`.input-dropdown[dropdown-target="#${id}"]`).toggleClass('active');
                $(`.input-dropdown[dropdown-target="#${id}"]>input`).val($(item).text()).trigger('input');
            })
        }
    }
}
export function TextChangeValidate(){
    $('.btn-confirm').on('click',()=>{
        for(const inputGroup of $('.input-custom-group')){
            $(inputGroup).find('input:first').trigger('input');
        }
    })
    for(const inputGroup of $('.input-custom-group')){
        let validate = $(inputGroup).attr('validate');
        if(validate === undefined || validate === ''){
            continue;
        }
        let validateOptions = validate.split('|');
        $(inputGroup).find('input').on('input',()=>{
            for(const validateOption of validateOptions){
                switch(validateOption){
                case 'required':
                    if($(inputGroup).find('input').val() === ''){
                        ErrorState($(inputGroup));
                        return;
                    }else{
                        NormalState($(inputGroup));
                    }
                    break;
                case 'email':
                    const regexEmail:RegExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
                    if($(inputGroup).find('input').val() !== '' && !regexEmail.test($(inputGroup).find('input').val().toString())){
                        ErrorState($(inputGroup),"Email không hợp lệ");
                        return;
                    }else{
                        NormalState($(inputGroup));
                    }
                    break;
                case 'phone':
                    const regexPhone:RegExp = new RegExp(/^0[0-9]{9}$/);
                    if($(inputGroup).find('input').val() !== '' && !regexPhone.test($(inputGroup).find('input').val().toString())){
                        ErrorState($(inputGroup),"Số điện thoại không hợp lệ");
                        return;
                    }else{
                        NormalState($(inputGroup));
                    }
                    break;
            }
            }
        })
    }
}

function ErrorState(element:JQuery<HTMLElement>,message?:string|undefined){
    
    element.find('input:first')
    .css('border','1px solid red')
    .css('background-color','rgb(254, 243, 242)');
    if(message !== undefined){
        element.siblings('.input-error')
        .empty()
        .append(GetErrorMessage(message))
        .prop('hidden',false);
    }else{
        element.siblings('.input-error')
        .empty()
        .append(GetErrorMessage('Thông tin bắt buộc. Vui lòng nhập đầy đủ.'))
        .prop('hidden',false);
    }
    
}
function NormalState(element:JQuery<HTMLElement>){
    element.find('input:first')
    .css('border','1px solid #86b7fe')
    .css('background-color','white');
    element.siblings('.input-error')
    .prop('hidden',true);
    
}
