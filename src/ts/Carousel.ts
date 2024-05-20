export default function CarouselHandler(): void {
  for (const prev of $(".mycarousel-prev")) {
    let target = $(prev).attr("mycarousel-target");
    if (target === null || target === undefined) {
      continue;
    }
    $(`${target} .mycarousel-prev`).on("click", function () {
      let carouselTarget: string = $(prev).attr("mycarousel-target");
      let itemsPerPage: number = Number($(carouselTarget).attr("display-item"));
      let totalItems: number = $(
        carouselTarget.concat(" .mycarousel-item")
      ).length;
      let totalPages: number = Math.ceil(totalItems / itemsPerPage);
      let maxWidth = $(carouselTarget).width();
      let currentPage: number = Number(
        $(carouselTarget).attr("current-page") ?? "0"
      );
      if (currentPage > 0) {
        $(carouselTarget).attr("current-page", --currentPage);
        if (currentPage === 0) {
          $(carouselTarget.concat(" .mycarousel-prev")).css(
            "visibility",
            "hidden"
          );
        }
        if (currentPage !== totalPages) {
          $(carouselTarget.concat(" .mycarousel-next")).css(
            "visibility",
            "visible"
          );
        }
        $(carouselTarget.concat(" .mycarousel-wrapper")).css(
          "transform",
          `translateX(-${maxWidth * currentPage}px)`
        );
      }
    });
  }
  for (const next of $(".mycarousel-next")) {
    let target = $(next).attr("mycarousel-target");
    if (target === null || target === undefined) {
      continue;
    }
    $(`${target} .mycarousel-next`).on("click", function () {
      let carouselTarget: string = $(next).attr("mycarousel-target");
      let itemsPerPage: number = Number($(carouselTarget).attr("display-item"));
      let totalItems: number = $(
        carouselTarget.concat(" .mycarousel-item")
      ).length;
      let totalPages: number = Math.ceil(totalItems / itemsPerPage);
      let maxWidth = $(carouselTarget).width();
      let currentPage: number = Number(
        $(carouselTarget).attr("current-page") ?? "0"
      );
      if (currentPage < totalPages) {
        $(carouselTarget).attr("current-page", ++currentPage);
        if (currentPage === totalPages - 1) {
          $(carouselTarget.concat(" .mycarousel-next")).css(
            "visibility",
            "hidden"
          );
        }
        if (currentPage > 0) {
          $(carouselTarget.concat(" .mycarousel-prev")).css(
            "visibility",
            "visible"
          );
        }
        $(carouselTarget.concat(" .mycarousel-wrapper")).css(
          "transform",
          `translateX(-${maxWidth * currentPage}px)`
        );
      }
    });
  }
  for (const btnIndicator of $(".mycarousel-indicators [mycarousel-target]")) {
    let target = $(btnIndicator).attr("mycarousel-target");
    if (target === null || target === undefined) {
      continue;
    }
    let targetPage = Number($(btnIndicator).attr("mycarousel-target-page"));
    $(
      `${target} .mycarousel-indicators [mycarousel-target-page = ${targetPage}]`
    ).on("click", function () {
      let carouselTarget: string = $(btnIndicator).attr("mycarousel-target");
      let itemsPerPage: number = Number($(carouselTarget).attr("display-item"));
      let totalItems: number = $(
        carouselTarget.concat(" .mycarousel-item")
      ).length;
      let totalPages: number = Math.ceil(totalItems / itemsPerPage);
      let targetPage = Number($(btnIndicator).attr("mycarousel-target-page"));
      if (targetPage === totalPages - 1) {
        $(carouselTarget.concat(" .mycarousel-next")).css(
          "visibility",
          "hidden"
        );
      } else {
        $(carouselTarget.concat(" .mycarousel-next")).css(
          "visibility",
          "visible"
        );
      }
      if (targetPage > 0) {
        $(carouselTarget.concat(" .mycarousel-prev")).css(
          "visibility",
          "visible"
        );
      } else {
        $(carouselTarget.concat(" .mycarousel-prev")).css(
          "visibility",
          "hidden"
        );
      }
      let maxWidth = $(carouselTarget).width();
      $(carouselTarget.concat(" .mycarousel-wrapper")).css(
        "transform",
        `translateX(-${maxWidth * targetPage}px)`
      );
    });
  }
}
