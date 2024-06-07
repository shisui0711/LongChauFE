import Swal from "sweetalert2";
import { Product } from "../../viewModels/ProductVM";
import { AddProduct } from "../../services/ProductService";
import { LoadAllDropdown, TextChangeValidate } from "../components/dropdown";
import { RenderViewMain } from "./adminLayoutHelper";
import { GetCategories, GetCategoryByName } from "../../services/CategoryService";
import { Category } from "../../viewModels/CategoryVM";
import { GetImageUrl } from "../../services/ImageService";

$(
    async function(){
        let categories =  await GetCategories();
        LoadCategories(categories);
        LoadAllDropdown();
        TextChangeValidate();
        BackHandler();
        AddProductHandler();
        ChoosePictureHandler();
        $('#txtSearchCategory').on('input',()=>{
            let categoryName:string = $('#txtSearchCategory').val() as string;
            GetCategoryByName(categoryName).then((categories)=>{
              LoadCategories(categories);
            });
          })
    }
)
function ChoosePictureHandler(){
    const fileInput = $('#imageProduct') as JQuery<HTMLInputElement>;
    fileInput.on('change',(event)=>{
        const file:File = event.target.files[0];
        if(!file) return;
        console.log(file)
        GetImageUrl(file).then(imageUrl=>{
            console.log(imageUrl)
            $('#imageDisplayProduct').attr('src',imageUrl);
        })
    })
}
function BackHandler(){
    $('#back').on('click',()=>{
        RenderViewMain('/admin/page/viewProduct.html',undefined,'/dist/js/viewProduct.bundle.js');
    })
}
function AddProductHandler(){
    $('#btnAddProduct').on('click',()=>{
        if($('.input-error:not([hidden])').length > 0){
            return;
        }
        let product:Product = new Product();
        product.name = $('#txtProductName').val() as string;
        product.salesUnitPrice = $('#txtProductSalePrice').val() as number;
        product.importUnitPrice = $('#txtProductImportPrice').val() as number;
        product.discountPercent = $('#txtProductDiscount').val() as number;
        product.unit = $('#txtProductUnit').val() as string;
        product.unitExtend = $('#txtProductUnitExtend').val() as string;
        product.giftContent = $('#txtProductGiftContent').val() as string;
        product.categoryName = $('#txtCategoryName').val() as string;
        if(AddProduct(product)){
            Swal.fire("Thông báo","Thêm sản phẩm thành công","success");
        }else{
            Swal.fire("Thông báo","Thêm sản phẩm thất bại","error");
        }
    })
}
function LoadCategories(categories:Category[]){
    $('#cboCategory').empty();
    categories.forEach(category=>{
        let row:string = `<li><div class="input-dropdown-menu-item">${category.name}
                        <span><i class="fa-solid fa-circle-check"></i></span>
                         </div></li>`;
        $('#cboCategory').append(row);
    })
    LoadAllDropdown();
}


