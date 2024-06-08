import Swal from "sweetalert2";
import { UpdateCategory } from "../../services/CategoryService";
import { Category } from "../../viewModels/CategoryVM";
import { RenderViewMain } from "./adminLayoutHelper";
$(
    function(){
        BackHandler();
        UpdateClickHandler();
    }
)
function BackHandler(){
    $('#back').on('click',()=>{
        RenderViewMain('/admin/page/viewCategory.html',undefined,'/dist/js/viewCategory.bundle.js');
    })
}
function UpdateClickHandler(){
    $('#btnUpdate').on('click',function(){
      let id:string = $(this).attr('data-id');
      if(id === undefined || id === null){
        return;
      }  
      let category = new Category();
      category.id = id;
      category.name = $('#txtCategoryName').val() as string;
      category.description = $('#txtDescription').val() as string;
      UpdateCategory(category).then(ok=>{
          if(ok){
            Swal.fire("Thông báo","Cập nhật thành công","success");
          }else{
            Swal.fire("Thông báo","Cập nhật thất bại","error");
          }
      });
    })
}