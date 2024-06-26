import Swal from "sweetalert2";
import { RenderViewMain } from "./adminLayoutHelper";
import {
  DeleteCategory,
  GetCategories,
  GetCategory
} from "../../services/CategoryService";
import { List } from "linqts";
import { Category } from "../../viewModels/CategoryVM";
$(function () {
  LoadPagination();
  DirectAddHandler();
  CheckAllHandler();
  $('#btnMultipleRemove').on('click',MultipleRemoveHandler)
  $('#btnReload').on('click',LoadCategoryHandler);
  $('#btnSearch').on('click',SearchCategoryHandler)
  $('#cboItemsPerPage').on('change',function(){
    let itemsPerPage:number = $(this).find('option:selected').val() as number;
    $('#itemsPerPage').text(itemsPerPage);
    LoadPagination(1,itemsPerPage);
  })
});
async function SearchCategoryHandler(){
  GetCategories().then((categories) => {
    let listCategory:List<Category> = new List<Category>(categories);
    let categoryName:string = $('#txtSearchCategoryName').val() as string;
    if(categoryName !== ''){
      listCategory = listCategory.Where(x => x.name.toLowerCase().includes(categoryName.toLowerCase()));
    }
    LoadCategory(listCategory.ToArray());
  })
}
function LoadCategory(categories:Category[]){
  if ($("#category_table").length > 0) {
    $("#category_table").empty();
    categories.forEach((category) => {
      const row = `
                    <tr>
                        <td class="align-middle">
                            <div class="form-check form-check-md d-flex align-items-center justify-content-center">
                                <input type="checkbox" class="form-check-input" data-id="${category.id}" value="${category.id}">
                            </div>
                        </td>
                        <td class="text-center">
                            <button type="button" class="btn bg-blue text-white btn-update" data-id="${category.id}">
                            <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="btn bg-danger text-white btn-remove" data-id="${category.id}">
                            <i class="fas fa-trash"></i>
                            </button>
                        </td>
                        <td class="align-middle">${category.name}</td>
                        <td class="align-middle">${category.iconUrl??""}</td>
                        <td class="align-middle">${category.description??""}</td>
                    </tr>
                `;
      $("#category_table").append(row);
    });
    UpdateEventHanler();
    RemoveEventHandler();
    CancelCheckAllHandler();
  }
}
function LoadCategoryHandler() {
  LoadPagination();
}
function UpdateEventHanler() {
  for (const btnUpdate of $(".btn-update")) {
    $(btnUpdate).on("click", function () {
      const id = $(this).attr("data-id");
      RenderUpdateCategoryView(id);
    });
  }
}

function RemoveEventHandler() {
  for (const btnRemove of $(".btn-remove")) {
    $(btnRemove).on("click", function () {
      const id = $(this).attr("data-id");
      Swal.fire({
        title: "Xác nhận xóa danh mục",
        text: `Bạn có chắc chắn muốn xóa danh mục ID ${id} không ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Đồng ý",
        cancelButtonText: "Hủy",
      }).then((result) => {
        if (result.isConfirmed) {
          DeleteCategory(id).then((ok) => {
            if (ok) {
              Swal.fire({
                title: "Xóa thành công",
                text: `Danh mục ID ${id} đã được xóa thàng công`,
                icon: "success",
              });
              LoadCategoryHandler();
            } else {
              Swal.fire({
                title: "Xóa thất bại",
                text: `Danh mục ID ${id} chưa được xóa`,
                icon: "error",
              });
            }
          });
        }
      });
    });
  }
}
function DirectAddHandler() {
  $("#btnAdd").on("click", function () {
    RenderViewMain(
      "/admin/page/addCategory.html",
      undefined,
      "/dist/js/addCategory.bundle.js"
    );
  });
}
function CheckAllHandler() {
  $("#check_all_checkbox").on("change", () => {
    const isChecked = $("#check_all_checkbox").prop("checked");
    if (isChecked) {
      for (const checkbox of $('#category_table input[type="checkbox"]')) {
        $(checkbox).prop("checked", true);
      }
    }else{
      for (const checkbox of $('#category_table input[type="checkbox"]')) {
        $(checkbox).prop("checked", false);
      }
    }
  });
}
function CancelCheckAllHandler() {
  for (const checkbox of $('#category_table input[type="checkbox"]')) {
    $(checkbox).on("click", () => {
      const isNotChecked =
        $('#category_table input[type="checkbox"]:not(:checked)').length > 0;
      if (isNotChecked) {
        $("#check_all_checkbox").prop("checked", false);
      }
    });
  }
}
function RenderUpdateCategoryView(id:string){
    fetch('/admin/page/updateCategory.html').then(response=>response.text().then(html=>{
      GetCategory(id).then(category=>{
        $('.app-content').empty();
        $('.app-content').append(html);
        console.log(category)
        let script:string = `<script>
        $('#txtCategoryName').val("${category.name}");
        $('#txtDescription').val("${category.description??""}");
        $('#btnUpdate').attr('data-id',"${category.id}");
        // $('#iconImageCategory').attr('src',"${category.iconUrl??""}");
        </script>
        <script src="/dist/js/updateCategory.bundle.js"></script>
        `
        $('.app-content').append(script);
      })

    }))
  }
  function MultipleRemoveHandler(){
    let rowSelected:number = $('input[type="checkbox"]:checked[data-id]').length;
    if(rowSelected <= 0){
      Swal.fire("Thông báo", "Bạn chưa chọn danh mục nào", "warning");
      return;
    }
    Swal.fire({
      title: "Xác nhận xóa danh mục",
      text: `Bạn có chắc chắn muốn xóa ${rowSelected} danh mục đã chọn ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        for(const checkbox of $('input[type="checkbox"]:checked[data-id]')){
          DeleteCategory(checkbox.getAttribute('data-id')).then((ok)=>{
            LoadCategoryHandler();
          })
        }
      }
    });
  }
  async function LoadPagination(page:number = 1,itemsPerPage:number = 10){
    let totalItems:number = (await GetCategories()).length;
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
    LoadCategory(new List<Category>(await GetCategories()).Skip((page-1)*itemsPerPage).Take(itemsPerPage).ToArray());
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