class Carousel {
    constructor(preBtn, nextBtn, wrapper, items, itemsPerPage, widthOfItem) {
        this._currentPage = 0;
        this._totalPages = 0;
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
        this._nextBtn.addEventListener('click', this.Next);
    }
    Next() {
        if (this._currentPage < this._totalPages) {
            this._currentPage++;
            if (this._currentPage == this._totalPages - 1) {
                if (!this._nextBtn.classList.contains('invisible')) {
                    this._nextBtn.classList.add('invisible');
                }
            }
            if (this._currentPage > 0) {
                if (this._preBtn.classList.contains('invisible')) {
                    this._preBtn.classList.remove('invisible');
                }
            }
        }
        this._wrapper.style.transform = `translateX(-${this._widthOfItem * this._itemsPerPage * this._currentPage}px)`;
    }
    Previous() {
        if (this._currentPage > 0) {
            this._currentPage--;
            if (this._currentPage != this._totalPages) {
                if (this._nextBtn.classList.contains('invisible')) {
                    this._nextBtn.classList.remove('invisible');
                }
            }
            if (this._currentPage == 0) {
                if (!this._preBtn.classList.contains('invisible')) {
                    this._preBtn.classList.add('invisible');
                }
            }
        }
        this._wrapper.style.transform = `translateX(-${this._widthOfItem * this._itemsPerPage * this._currentPage}px)`;
    }
}
const preBrand = document.getElementById('pre_brand');
const nextBrand = document.getElementById('next_brand');
const brandWrapper = document.querySelector('.brand-wrapper');
const brands = document.querySelectorAll('.brand');
const brandCarousel = new Carousel(preBrand, nextBrand, brandWrapper, brands, 5, 262);
const preHealthCheck = document.getElementById('pre_health_check');
const nextHealthCheck = document.getElementById('next_health_check');
const healthCheckWrapper = document.querySelector('.health-check-wrapper');
const healthCheckItems = document.querySelectorAll('.health-check-item');
const healthCheckCarousel = new Carousel(preHealthCheck, nextHealthCheck, healthCheckWrapper, healthCheckItems, 3, 295);
const preSubject = document.getElementById('pre_subject');
const nextSubject = document.getElementById('next_subject');
const subjectWrapper = document.querySelector('.subject-wrapper');
const subjectItems = document.querySelectorAll('.subject-item');
const subjectCarousel = new Carousel(preSubject, nextSubject, subjectWrapper, subjectItems, 6, 215);
const preOutstanding = document.getElementById('pre_outstanding');
const nextOutstanding = document.getElementById('next_outstanding');
const outstandingWrapper = document.querySelector('.outstanding-wrapper');
const outstandingItems = document.querySelectorAll('.outstanding-item');
const outstandingCarousel = new Carousel(preOutstanding, nextOutstanding, outstandingWrapper, outstandingItems, 6, 215);
const preSick = document.getElementById('pre_sick');
const nextSick = document.getElementById('next_sick');
const sickWrapper = document.querySelector('.sick-wrapper');
const sickItems = document.querySelectorAll('.sick');
const sickCarousel = new Carousel(preSick, nextSick, sickWrapper, sickItems, 4, 286);
//# sourceMappingURL=main.js.map