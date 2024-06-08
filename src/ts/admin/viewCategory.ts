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
  LoadCategoryHandler();
  DirectAddHandler();
  CheckAllHandler();
  $('#btnReload').on('click',LoadCategoryHandler);
  $('#btnSearch').on('click',SearchCategoryHandler)
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
  GetCategories().then((categories) => {
    LoadCategory(categories)
  });
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
        let script:string = `<script>
        $('#txtCategoryName').text("${category.name}");
        $('#txtDescription').val("${category.description}");
        $('#btnUpdate').attr('data-id',"${category.id}");
        // $('#iconImageCategory').attr('src',"${category.iconUrl}");
        </script>
        <script src="/dist/js/updateCategory.bundle.js"></script>
        `
        $('.app-content').append(script);
      })

    }))
  }
