import Swal from "sweetalert2";
import { GetProduct, UpdateProduct } from "../../services/ProductService";
import { Product } from "../../viewModels/ProductVM";
import { RenderViewMain } from "./adminLayoutHelper";
import { GetCategories, GetCategoryByName } from "../../services/CategoryService";
import { LoadAllDropdown } from "../components/dropdown";
import { Category } from "../../viewModels/CategoryVM";
$(
    async function(){
        BackHandler();
        UpdateClickHandler();
        let categories:Category[] = await GetCategories();
        LoadCategories(categories);
        SetCategorySelected();
        $('#txtSearchCategory').on('input',()=>{
          let categoryName:string = $('#txtSearchCategory').val() as string;
          GetCategoryByName(categoryName).then((categories)=>{
            LoadCategories(categories);
          });
        })
        
    }
)
async function SetCategorySelected(){
  let product:Product = await GetProduct( $('#btnUpdateProduct').attr('data-id'));
  $(`li .input-dropdown-menu-item:contains("${product.categoryName.trim()}")`).trigger('click');
  $('.input-dropdown.active').removeClass('active');
}
function BackHandler(){
    $('#back').on('click',()=>{
        RenderViewMain('/admin/page/viewProduct.html',undefined,'/dist/js/viewProduct.bundle.js');
    })
}
 function LoadCategories(categories){
  $('#cboCategory').empty();
  categories.forEach(category=>{
      let row:string = `<li><div class="input-dropdown-menu-item">${category.name}
                      <span><i class="fa-solid fa-circle-check"></i></span>
                       </div></li>`;
      $('#cboCategory').append(row);
  })
  LoadAllDropdown();
}
function UpdateClickHandler(){
    $('#btnUpdateProduct').on('click',function(){
      let id:string = $(this).attr('data-id');
      if(id === undefined || id === null){
        return;
      }  
      let product = new Product();
      product.id = id;
      product.name = $('#txtProductName').val() as string;
      product.salesUnitPrice = $('#txtProductSalePrice').val() as number;
      product.importUnitPrice = $('#txtProductImportPrice').val() as number;
      product.discountPercent = $('#txtProductDiscount').val() as number;
      product.unit = $('#txtProductUnit').val() as string;
      product.unitExtend = $('#txtProductUnitExtend').val() as string;
      product.giftContent = $('#txtProductGiftContent').val() as string;
      product.categoryName = $('#txtCategoryName').val() as string;
      UpdateProduct(product).then(ok=>{
          if(ok){
            Swal.fire("Thông báo","Cập nhật thành công","success");
          }else{
            Swal.fire("Thông báo","Cập nhật thất bại","error");
          }
      });
    })
}