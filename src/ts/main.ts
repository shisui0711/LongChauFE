class Carousel{
    private _currentPage:number = 0;
    private readonly _preBtn:HTMLElement;
    private readonly _nextBtn:HTMLElement;
    private readonly _wrapper:HTMLElement;
    private readonly _items:NodeListOf<Element>;
    private readonly _itemsPerPage:number;
    private _totalPages:number = 0;
    private _widthOfItem:number;
    constructor(preBtn:HTMLElement, nextBtn:HTMLElement, wrapper:HTMLElement, items:NodeListOf<Element>,itemsPerPage:number,widthOfItem:number) {
        this._preBtn = preBtn;
        this._nextBtn = nextBtn;
        this._wrapper = wrapper;
        this._items = items;
        this._itemsPerPage = itemsPerPage;
        this._totalPages = Math.ceil(this._items.length / this._itemsPerPage);
        this._widthOfItem = widthOfItem;

        this.Next = this.Next.bind(this);
        this.Previous = this.Previous.bind(this);

        this._preBtn.addEventListener('click', this.Previous);
        this._nextBtn.addEventListener('click',this.Next);
    }
    private Next():void {
        if (this._currentPage < this._totalPages){
            this._currentPage++;
            if(this._currentPage == this._totalPages -1){
                if(!this._nextBtn.classList.contains('invisible')){
                    this._nextBtn.classList.add('invisible');
                }
            }
            if(this._currentPage > 0){
                if(this._preBtn.classList.contains('invisible')){
                    this._preBtn.classList.remove('invisible');
                }
            }
        }

        this._wrapper.style.transform = `translateX(-${this._widthOfItem*this._itemsPerPage*this._currentPage}px)`;
    }
    private Previous():void{
        if (this._currentPage > 0){
            this._currentPage--;
            if  (this._currentPage != this._totalPages){
                if(this._nextBtn.classList.contains('invisible')){
                    this._nextBtn.classList.remove('invisible');
                }
            }
            if(this._currentPage == 0){
                if(!this._preBtn.classList.contains('invisible')){
                    this._preBtn.classList.add('invisible');
                }
            }
        }
        this._wrapper.style.transform = `translateX(-${this._widthOfItem*this._itemsPerPage*this._currentPage}px)`;
    }
}
const preBrand:HTMLElement = document.getElementById('pre_brand');
const nextBrand:HTMLElement = document.getElementById('next_brand');
const brandWrapper:HTMLElement = document.querySelector('.brand-wrapper');
const brands:NodeListOf<Element> = document.querySelectorAll('.brand');

const brandCarousel:Carousel = new Carousel(preBrand, nextBrand, brandWrapper,brands,5,262);

const preHealthCheck:HTMLElement = document.getElementById('pre_health_check');
const nextHealthCheck:HTMLElement = document.getElementById('next_health_check');
const healthCheckWrapper:HTMLElement = document.querySelector('.health-check-wrapper');
const healthCheckItems:NodeListOf<Element> = document.querySelectorAll('.health-check-item');

const healthCheckCarousel:Carousel = new Carousel(preHealthCheck,nextHealthCheck,healthCheckWrapper,healthCheckItems,3,295);

const preSubject:HTMLElement = document.getElementById('pre_subject');
const nextSubject:HTMLElement = document.getElementById('next_subject');
const subjectWrapper:HTMLElement = document.querySelector('.subject-wrapper');
const subjectItems:NodeListOf<Element> = document.querySelectorAll('.subject-item');

const subjectCarousel:Carousel = new Carousel(preSubject,nextSubject,subjectWrapper,subjectItems,6,215);

const preOutstanding:HTMLElement = document.getElementById('pre_outstanding');
const nextOutstanding:HTMLElement = document.getElementById('next_outstanding');
const outstandingWrapper:HTMLElement = document.querySelector('.outstanding-wrapper');
const outstandingItems:NodeListOf<Element> = document.querySelectorAll('.outstanding-item');

const outstandingCarousel:Carousel = new Carousel(preOutstanding,nextOutstanding,outstandingWrapper,outstandingItems,6,215);

const preSick:HTMLElement = document.getElementById('pre_sick');
const nextSick:HTMLElement = document.getElementById('next_sick');
const sickWrapper:HTMLElement = document.querySelector('.sick-wrapper');
const sickItems:NodeListOf<Element> = document.querySelectorAll('.sick');

const sickCarousel:Carousel = new Carousel(preSick,nextSick,sickWrapper,sickItems,4,286);