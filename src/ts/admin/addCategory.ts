import Swal from "sweetalert2";
import { AddCategory } from "../../services/CategoryService";
import { Category } from "../../viewModels/CategoryVM";
import { RenderViewMain } from "./adminLayoutHelper";
$(
    function(){
        BackHandler();
        AddCategoryHandler();
    }
)
function BackHandler(){
    $('#back').on('click',()=>{
        RenderViewMain('/admin/page/viewCategory.html',undefined,'/dist/js/viewCategory.bundle.js');
    })
}
function AddCategoryHandler(){
    $('#btnAdd').on('click',()=>{
        if($('.input-error[hidden="false"]').length > 0){
            return;
        }
        let category:Category = new Category();
        category.name = $('#txtCategoryName').val() as string;
        category.description = $('#txtDescription').val() as string;
        if(AddCategory(category)){
            Swal.fire("Thông báo","Thêm sản phẩm thành công","success");
        }else{
            Swal.fire("Thông báo","Thêm sản phẩm thất bại","error");
        }
    })
}