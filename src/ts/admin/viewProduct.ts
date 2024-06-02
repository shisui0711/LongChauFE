import Swal from "sweetalert2";
import { DeleteProduct, GetProduct, GetProducts } from "../../services/ProductService";
import { RenderViewMain } from "./adminLayoutHelper";
$(function () {
  LoadProductHandler();
  DirectAddHandler();
  CheckAllHandler();
});
function LoadProductHandler() {
  GetProducts().then((products) => {
    if ($("#product_table").length > 0) {
      $("#product_table").empty();
      products.forEach((product) => {
        const row = `
                    <tr>
                        <td class="align-middle">
                            <div class="form-check form-check-md d-flex align-items-center justify-content-center">
                                <input type="checkbox" class="form-check-input" data-id="${product.id}" value="${product.id}">
                            </div>
                        </td>
                        <td class="text-center">
                            <button type="button" class="btn bg-blue text-white btn-update" data-id="${product.id}">
                            <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="btn bg-danger text-white btn-remove" data-id="${product.id}">
                            <i class="fas fa-trash"></i>
                            </button>
                        </td>
                        <td class="align-middle">${product.name}</td>
                        <td class="align-middle">${product.discountPercent}</td>
                        <td class="align-middle">${product.importUnitPrice}</td>
                        <td class="align-middle">${product.salesUnitPrice}</td>
                        <td class="align-middle">${product.imageUrl}</td>
                        <td class="align-middle">${product.unit}</td>
                        <td class="align-middle">${product.unitExtend}</td>
                    </tr>
                `;
        $("#product_table").append(row);
      });
      UpdateEventHanler();
      RemoveEventHandler();
      CancelCheckAllHandler();
    }
  });
}

function DirectAddHandler() {
  $("#btnAdd").on("click", function () {
    RenderViewMain(
      "/admin/page/addProduct.html",
      undefined,
      "/dist/js/addProduct.bundle.js"
    );
  });
}
function RemoveEventHandler() {
    for(const btnRemove of $(".btn-remove")){
    $(btnRemove).on("click", function () {
      const id = $(this).attr("data-id");
      Swal.fire({
        title: "Xác nhận xóa sản phẩm",
        text: `Bạn có chắc chắn muốn xóa sản phẩm ID ${id} không ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Đồng ý",
        cancelButtonText: "Hủy",
      }).then((result) => {
        if (result.isConfirmed) {
          DeleteProduct(id).then((ok) => {
            if (ok) {
              Swal.fire({
                title: "Xóa thành công",
                text: `Sản phẩm ID ${id} đã được xóa thàng công`,
                icon: "success",
              });
              LoadProductHandler();
            } else {
              Swal.fire({
                title: "Xóa thất bại",
                text: `Sản phẩm ID ${id} chưa được xóa`,
                icon: "error",
              });
            }
          });
        }
      });
    });
  }
}
function UpdateEventHanler(){
  for(const btnUpdate of $(".btn-update")){
    $(btnUpdate).on("click", function () {
      const id = $(this).attr("data-id");
      RenderUpdateProductView(id);
    });
  }
}
function CheckAllHandler(){
  $('#check_all_checkbox_product').on('change',()=>{
    const isChecked = $('#check_all_checkbox_product').prop('checked');
    if(isChecked){
      for(const checkbox of $('#product_table input[type="checkbox"]')){
        $(checkbox).prop('checked',true);
      }
    }
    
  })
}
function CancelCheckAllHandler(){
  for(const checkbox of $('#product_table input[type="checkbox"]')){
     $(checkbox).on('click',()=>{
      const isNotChecked = $('#product_table input[type="checkbox"]:not(:checked)').length > 0;
      if(isNotChecked){
        $('#check_all_checkbox_product').prop('checked',false);
      }
     })
  }
}
function RenderUpdateProductView(id:string){
  fetch('/admin/page/updateProduct.html').then(response=>response.text().then(html=>{
    GetProduct(id).then(product=>{
      $('.app-content').empty();
      $('.app-content').append(html);
      let script:string = `<script>
      $('#productName').text("${product.name}");
      $('#txtProductName').val("${product.name}");
      $('#txtProductSalePrice').val(${product.salesUnitPrice});
      $('#txtProductDiscount').val(${product.discountPercent});
      $('#txtProductImportPrice').val(${product.importUnitPrice});
      $('#txtProductUnit').val("${product.unit}");
      $('#txtProductUnitExtend').val("${product.unitExtend}");
      $('#btnUpdateProduct').attr('data-id',"${product.id}");
      $('#imgProduct').attr('src',"${product.imageUrl}");
      </script>
      <script src="/dist/js/updateProduct.bundle.js"></script>
      `
      $('.app-content').append(script);
    })
    
  }))
}
