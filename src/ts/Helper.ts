export function PriceRender(price:string):number{
    try {
        return Number.parseInt(Array.from(price.matchAll(/\d+/g)).join(''));
    } catch (error) {
        return 0;
    }
}
export function ToCurrency(price:number):string{
    try {
        let rawPriceArr = price.toLocaleString('vi-VN',{style:'currency',currency:'VND'}).split('');
        if(rawPriceArr.length > 0){
            rawPriceArr.splice(rawPriceArr.length-2,1);
            return rawPriceArr.join('');
        }
        return '0';
    } catch (error) {
        return '0';
    }
}
export function getPathFromURL(url: string): string {
    const parsedURL = new URL(url);
    return parsedURL.pathname;
}