import Swal from "sweetalert2";
import { DeleteProduct, GetProduct, GetProducts } from "../../services/ProductService";
import { RenderViewMain } from "./adminLayoutHelper";
import { LoadAllDropdown } from "../components/dropdown";
import { Category } from "../../viewModels/CategoryVM";
import { GetCategories, GetCategoryByName } from "../../services/CategoryService";
import { List } from "linqts";
import { Product } from "../../viewModels/ProductVM";
$( async function () {
  let categories =  await GetCategories();
  LoadCategories(categories);
  DirectAddHandler();
  CheckAllHandler();
  $('#btnMultipleRemove').on('click',MultipleRemoveHandler)
  LoadPagination();
  $('#btnReload').on('click',LoadProductHandler)
  $('#btnSearch').on('click',SearchProductHandler)
  $('#cboItemsPerPage').on('change',function(){
    let itemsPerPage:number = $(this).find('option:selected').val() as number;
    $('#itemsPerPage').text(itemsPerPage);
    LoadPagination(1,itemsPerPage);
  })
  $('#txtSearchCategory').on('input',()=>{
    let categoryName:string = $('#txtSearchCategory').val() as string;
    GetCategoryByName(categoryName).then((categories)=>{
      LoadCategories(categories);
    });
  })
});
function MultipleRemoveHandler(){
  let rowSelected:number = $('input[type="checkbox"]:checked[data-id]').length;
  if(rowSelected <= 0){
    Swal.fire("Thông báo", "Bạn chưa chọn sản phẩm nào", "warning");
    return;
  }
  Swal.fire({
    title: "Xác nhận xóa sản phẩm",
    text: `Bạn có chắc chắn muốn xóa ${rowSelected} sản phẩm đã chọn ?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Đồng ý",
    cancelButtonText: "Hủy",
  }).then((result) => {
    if (result.isConfirmed) {
      for(const checkbox of $('input[type="checkbox"]:checked[data-id]')){
        DeleteProduct(checkbox.getAttribute('data-id')).then((ok)=>{
          LoadProductHandler();
        })
      }
    }
  });
}
async function SearchProductHandler() {
  GetProducts().then((products) => {
    let listProducts:List<Product> = new List<Product>(products);
    let productName:string = $('#txtSearchProductName').val() as string;
    let category:string = $('#txtCategorySelected').val() as string;
    if(productName !== ''){
      listProducts = listProducts.Where(x=>x.name.toLowerCase().includes(productName.toLowerCase()));
    }
    if(category !== ''){
     listProducts = listProducts.Where(x=>x.categoryName !== undefined && x.categoryName.toLowerCase().includes(category.toLowerCase())); 
    }
    LoadProduct(listProducts.ToArray());
  })
}
function LoadCategories(categories:Category[]){
  $('#cboCategory').empty();
  categories.forEach(category=>{
      let row:string = `<li><div class="input-dropdown-menu-item">${category.name}
                      <span><i class="fa-solid fa-circle-check"></i></span>
                       </div></li>`;
      $('#cboCategory').append(row);
  });
  LoadAllDropdown();
}
function LoadProduct(products:Product[]){
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
                      <td class="align-middle"><div class="">${product.name}</div></td>
                      <td class="align-middle">${product.categoryName??""}</td>
                      <td class="align-middle">${product.discountPercent}</td>
                      <td class="align-middle">${product.importUnitPrice}</td>
                      <td class="align-middle">${product.salesUnitPrice}</td>
                      <td class="align-middle">${product.imageUrl??""}</td>
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
}
async function LoadPagination(page:number = 1,itemsPerPage:number = 10){
  let totalItems:number = (await GetProducts()).length;
  $('#totalItems').text(totalItems.toString());
  try {
    itemsPerPage = Number($('#itemsPerPage').text());
  } catch (error) {
    
  }
  let totalPages:number = Math.ceil(totalItems/itemsPerPage);
  $('#pagination_list').empty();
  if(page === 1){
    $('#pagination_list').append(` <li class="nav-item px-1"><button disable id="btnPreviousPage" type="button" class="btn bg-gray"><i class="fa-solid fa-chevron-left"></i></button></li>`)
  }else{
    $('#pagination_list').append(` <li class="nav-item px-1"><button id="btnPreviousPage" type="button" class="btn bg-gray"><i class="fa-solid fa-chevron-left"></i></button></li>`)
  }
  for(let i = 1;i < page;i++){
    if(i>1 && i < page -2){
      $('#pagination_list').append(`<li class="nav-item px-1"><button disable type="button" class="btn bg-gray">...</button></li>`);
      $('#pagination_list').append(`<li class="nav-item px-1"><button type="button" target-page="${page-2}" class="btn bg-gray">${page-2}</button></li>`)
      $('#pagination_list').append(`<li class="nav-item px-1"><button type="button" target-page="${page-1}" class="btn bg-gray">${page-1}</button></li>`)
      break;
    }
    $('#pagination_list').append(`<li class="nav-item px-1"><button type="button" target-page="${i}" class="btn bg-gray">${i}</button></li>`)
  }
  $('#pagination_list').append(`<li class="nav-item px-1"><button type="button" class="btn btn-active bg-gray">${page}</button></li>`)
  for(let i = page+1;i<=totalPages;i++){
    if(i > page + 2 && i < totalPages){
      $('#pagination_list').append(`<li class="nav-item px-1"><button disable type="button" class="btn bg-gray">...</button></li>`);
      $('#pagination_list').append(`<li class="nav-item px-1"><button type="button" target-page="${totalPages}" class="btn bg-gray">${totalPages}</button></li>`);
      break;
    }
    $('#pagination_list').append(`<li class="nav-item px-1"><button type="button" target-page="${i}" class="btn bg-gray">${i}</button></li>`)
  }
  if(page === totalPages){
    $('#pagination_list').append(`<li class="nav-item px-1"><button disable id="btnNextPage" type="button" class="btn bg-gray"><i class="fa-solid fa-chevron-right"></i></button></li>`)
  }else{
    $('#pagination_list').append(`<li class="nav-item px-1"><button id="btnNextPage" type="button" class="btn bg-gray"><i class="fa-solid fa-chevron-right"></i></button></li>`)
  }
  LoadProduct(new List<Product>(await GetProducts()).Skip((page-1)*itemsPerPage).Take(itemsPerPage).ToArray());
  $('#pagination_list #btnPreviousPage:not([disable])').on('click',()=>{
    let currentPage:number = Number($('#pagination_list .btn-active').text());
    LoadPagination(currentPage-1,itemsPerPage);
  })
  $('#pagination_list #btnNextPage:not([disable])').on('click',()=>{
    let currentPage:number = Number($('#pagination_list .btn-active').text());
    LoadPagination(currentPage+1,itemsPerPage);
  })
  for(const btnPage of $('#pagination_list button[target-page]')){
    $(btnPage).on('click',()=>{
      LoadPagination(Number($(btnPage).attr('target-page')),itemsPerPage);
    })
  }
}
function LoadProductHandler() {
  LoadPagination(1, Number($('#itemsPerPage').text()));
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
    }else{
      for(const checkbox of $('#product_table input[type="checkbox"]')){
        $(checkbox).prop('checked',false);
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
      let script:string = `
      <script src="/dist/js/updateProduct.bundle.js"></script>
      <script>
      $('#productName').text("${product.name}");
      $('#txtProductName').val("${product.name}");
      $('#txtProductSalePrice').val(${product.salesUnitPrice});
      $('#txtProductDiscount').val(${product.discountPercent});
      $('#txtProductImportPrice').val(${product.importUnitPrice});
      $('#txtProductUnit').val("${product.unit}");
      $('#txtProductUnitExtend').val("${product.unitExtend}");
      $('#btnUpdateProduct').attr('data-id',"${product.id}");
      $('#imgProduct').attr('src',"${product.imageUrl}");
      $('#txtProductGiftContent').val("${product.giftContent??""}");
      </script>
      `
      $('.app-content').append(script);
      
    })
    
  }))
}
