
//Generic Carousel
$(
function(){
    for(const prev of $('.mycarousel-prev')){
        let target = $(prev).attr('mycarousel-target');
        if(target === null){
            continue;
        }
        $(`${target} .mycarousel-prev`).on('click',function(){
            let carouselTarget:string = $(prev).attr('mycarousel-target');
            let itemsPerPage:number = Number($(carouselTarget).attr('display-item'));
            let totalItems:number = $(carouselTarget.concat(' .mycarousel-item')).length;
            let totalPages:number = Math.ceil(totalItems / itemsPerPage);
            let maxWidth = $(carouselTarget).width();
            let currentPage:number = Number($(carouselTarget).attr('current-page')??'0');
            if(currentPage > 0){
            $(carouselTarget).attr('current-page',--currentPage);
            if(currentPage === 0){
                $(carouselTarget.concat(' .mycarousel-prev')).css('visibility','hidden');
            }
            if(currentPage !== totalPages){
                $(carouselTarget.concat(' .mycarousel-next')).css('visibility','visible');
            }
            $(carouselTarget.concat(' .mycarousel-wrapper')).css('transform',`translateX(-${maxWidth*currentPage}px)`)
            }
        });
    }
    for(const next of $('.mycarousel-next')){
        let target = $(next).attr('mycarousel-target');
        if(target === null){
            continue;
        }
        $(`${target} .mycarousel-next`).on('click',function(){
            let carouselTarget:string = $(next).attr('mycarousel-target');
            let itemsPerPage:number = Number($(carouselTarget).attr('display-item'));
            let totalItems:number = $(carouselTarget.concat(' .mycarousel-item')).length;
            let totalPages:number = Math.ceil(totalItems / itemsPerPage);
            let maxWidth = $(carouselTarget).width();
            let currentPage:number = Number($(carouselTarget).attr('current-page')??'0');
            if(currentPage < totalPages){
            $(carouselTarget).attr('current-page',++currentPage);
            if(currentPage === totalPages-1){
                $(carouselTarget.concat(' .mycarousel-next')).css('visibility','hidden');
            }
            if(currentPage > 0){
                $(carouselTarget.concat(' .mycarousel-prev')).css('visibility','visible');
            }
            $(carouselTarget.concat(' .mycarousel-wrapper')).css('transform',`translateX(-${maxWidth*currentPage}px)`);
            }
        });
    }
        
}
)


$('#txtSearch')
    .on('focusin',()=>{
        $('.search-extend')
        .css('visibility','visible')
        .css('opacity','1');
    })
    .on('focusout',()=>{
        $('.search-extend')
        .css('visibility','hidden')
        .css('opacity','0');
    })
    .on('input',()=>{
        let inputValue = $('#txtSearch').val();
        if(inputValue !== ''){
            $('#remove_search').css('visibility','visible');
        }else{
            $('#remove_search').css('visibility','hidden');
        }
    });
$('#remove_search')
    .on('click',()=>{
        $('#txtSearch').val('');
        $('#remove_search').css('visibility','hidden');
    })
