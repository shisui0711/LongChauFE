export function RenderViewMain(templateUrl: string,styleUrl?:string,scriptUrl?:string): void {
    fetch(templateUrl)
      .then(response => response.text())
      .then(template => {
        // console.log(template);
        // Thực hiện các thao tác với template đã lấy
        $('.app-content').empty();
        if(styleUrl != undefined && styleUrl != null){
          $('head').append(`<link rel="stylesheet" href="${styleUrl}">`);
        }
        $('.app-content').append(template);
        if(scriptUrl != undefined && scriptUrl != null){
          $('.app-content').append(`<script src="${scriptUrl}"></script>`);
        }
      })
      .catch(error => {
        console.error('Lỗi khi lấy mẫu:', error);
      });
  }
  