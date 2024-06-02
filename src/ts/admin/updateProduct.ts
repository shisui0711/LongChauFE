import Swal from "sweetalert2";
import { UpdateProduct } from "../../services/ProductService";
import { Product } from "../../viewModels/ProductVM";
import { RenderViewMain } from "./adminLayoutHelper";
$(
    function(){
        BackHandler();
        UpdateClickHandler();
    }
)
function BackHandler(){
    $('#back').on('click',()=>{
        RenderViewMain('/admin/page/viewProduct.html',undefined,'/dist/js/viewProduct.bundle.js');
    })
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
      UpdateProduct(product).then(ok=>{
          if(ok){
            Swal.fire("Thông báo","Cập nhật thành công","success");
          }else{
            Swal.fire("Thông báo","Cập nhật thất bại","error");
          }
      });
    })
}