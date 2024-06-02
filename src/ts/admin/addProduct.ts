import Swal from "sweetalert2";
import { Product } from "../../viewModels/ProductVM";
import { AddProduct } from "../../services/ProductService";
import { LoadAllDropdown, TextChangeValidate } from "../components/dropdown";
import { RenderViewMain } from "./adminLayoutHelper";
import { GetCategories } from "../../services/CategoryService";
import { Category } from "../../viewModels/CategoryVM";

$(
    async function(){
        await LoadCategories();
        LoadAllDropdown();
        TextChangeValidate();
        BackHandler();
        AddProductHandler();
    }
)
function BackHandler(){
    $('#back').on('click',()=>{
        RenderViewMain('/admin/page/viewProduct.html',undefined,'/dist/js/viewProduct.bundle.js');
    })
}
function AddProductHandler(){
    $('#btnAddProduct').on('click',()=>{
        if($('.input-error[hidden="false"]').length > 0){
            return;
        }
        let product:Product = new Product();
        product.name = $('#txtProductName').val() as string;
        product.salesUnitPrice = $('#txtProductSalePrice').val() as number;
        product.importUnitPrice = $('#txtProductImportPrice').val() as number;
        product.discountPercent = $('#txtProductDiscount').val() as number;
        product.unit = $('#txtProductUnit').val() as string;
        product.unitExtend = $('#txtProductUnitExtend').val() as string;
        if(AddProduct(product)){
            Swal.fire("Thông báo","Thêm sản phẩm thành công","success");
        }else{
            Swal.fire("Thông báo","Thêm sản phẩm thất bại","error");
        }
    })
}
async function LoadCategories():Promise<void>{
    $('#cboCategory').empty();
    let categories:Category[] = await GetCategories();
    categories.forEach(category=>{
        let row:string = `<li><div class="input-dropdown-menu-item">${category.name}
                        <span><i class="fa-solid fa-circle-check"></i></span>
                         </div></li>`;
        $('#cboCategory').append(row);
    })
}


