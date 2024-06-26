// export headerTemplate:string;
export let headerTemplate:string = `<header>
<div class="container">
    <div class="row justify-content-between">
        <div class="col-7 mt-2">
            <img src="dist/img/megaphone.png" alt="megaphone">
            <a href="#" class="text-white fw-semibold text-decoration-none mx-1">Trung tâm tiêm chủng Long Châu
                <span><u>Xem chi tiết</u></span></a>
        </div>
        <div class="col-5 d-inline-flex mt-2 justify-content-end">
            <svg class="estore-icon text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                fill="none" viewBox="0 0 20 20">
                <path fill="currentColor"
                    d="M6.5 2A1.5 1.5 0 005 3.5v13A1.5 1.5 0 006.5 18h7a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0013.5 2h-7zM9 14h2a.5.5 0 010 1H9a.5.5 0 010-1z">
                </path>
            </svg>
            <div class="text-white fw-semibold mx-1">
                Tải ứng dụng
            </div>
            <svg class="text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                width="20" height="20">
                <path
                    d="M22.0946 6.8943C21.3154 5.33601 19.6859 4.0754 17.6833 4.29774C15.892 4.49664 13.2323 5.16288 11.4203 7.34634C9.55886 9.58932 8.86485 13.0882 10.2943 18.3285C11.8196 23.9201 14.0861 29.4313 16.9028 33.8791C19.6988 38.2941 23.143 41.8273 27.094 43.1824C30.5884 44.3808 33.2596 43.8808 35.2093 42.5645C37.0881 41.2961 38.1215 39.3872 38.6554 38.0646C39.2533 36.5839 38.8592 35.0433 38.0787 33.9082L35.2017 29.7238C33.8969 27.8261 31.5078 27.0003 29.3096 27.6872L25.3345 28.9294C25.047 29.0193 24.769 28.9283 24.6108 28.7429C22.8418 26.6702 20.8583 23.7785 20.3188 20.8526C20.3009 20.7555 20.3204 20.6759 20.3522 20.6224C20.9367 19.6397 21.9435 18.5257 22.9446 17.551C24.642 15.8984 25.2844 13.273 24.1652 11.035L22.0946 6.8943Z"
                    fill="currentColor"></path>
            </svg>
            <div class="text-white fw-semibold mx-1">
                Tư vấn ngay: 1800 6928
            </div>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-2p25">
            <a href="/index.html"><img src="dist/img/logo.svg" alt="logo"></a>
        </div>
        <div class="col-6 position-relative">
            <div class="row align-items-center bg-white rounded-5">
                <div class="col-10 pe-0">
                    <input id="txtSearch" type="text" class="border-none" placeholder="Tìm tên thuốc, bệnh lý, thực phẩm chức năng..." style="background-color: transparent;">
                </div>
                <div class="col-2 d-inline-flex justify-content-end px-0">
                    <button id="remove_search" class="bg-transparent border-none me-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0033 2.4C17.3053 2.4 21.6033 6.69807 21.6033 12C21.6033 17.3019 17.3053 21.6 12.0033 21.6C6.70139 21.6 2.40332 17.3019 2.40332 12C2.40332 6.69807 6.70139 2.4 12.0033 2.4ZM9.37464 8.53646C9.1408 8.37447 8.81749 8.39761 8.60921 8.60589L8.53978 8.68899C8.37779 8.92283 8.40093 9.24614 8.60921 9.45442L11.1548 12L8.60921 14.5456L8.53978 14.6287C8.37779 14.8625 8.40093 15.1858 8.60921 15.3941L8.69231 15.4635C8.92615 15.6255 9.24946 15.6024 9.45774 15.3941L12.0033 12.8485L14.5489 15.3941L14.632 15.4635C14.8658 15.6255 15.1892 15.6024 15.3974 15.3941L15.4669 15.311C15.6289 15.0772 15.6057 14.7539 15.3974 14.5456L12.8518 12L15.3974 9.45442L15.4669 9.37132C15.6289 9.13748 15.6057 8.81417 15.3974 8.60589L15.3143 8.53646C15.0805 8.37447 14.7572 8.39761 14.5489 8.60589L12.0033 11.1515L9.45774 8.60589L9.37464 8.53646Z" fill="currentColor"></path></svg>
                    </button>
                    <button class="rounded-full btn-search me-2">
                        <svg viewBox="0 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M10.9414 1.93125C5.98269 1.93125 1.94336 5.97057 1.94336 10.9293C1.94336 15.888 5.98269 19.9352 10.9414 19.9352C13.0594 19.9352 15.0074 19.193 16.5469 17.9606L20.2949 21.7066C20.4841 21.888 20.7367 21.988 20.9987 21.9853C21.2607 21.9826 21.5112 21.8775 21.6966 21.6923C21.882 21.5072 21.9875 21.2569 21.9906 20.9949C21.9936 20.7329 21.8939 20.4801 21.7129 20.2907L17.9648 16.5427C19.1983 15.0008 19.9414 13.0498 19.9414 10.9293C19.9414 5.97057 15.9001 1.93125 10.9414 1.93125ZM10.9414 3.93128C14.8192 3.93128 17.9395 7.05148 17.9395 10.9293C17.9395 14.8071 14.8192 17.9352 10.9414 17.9352C7.06357 17.9352 3.94336 14.8071 3.94336 10.9293C3.94336 7.05148 7.06357 3.93128 10.9414 3.93128Z" fill="currentColor"></path></svg>
                    </button>
                </div>
            </div>
            <div class="row mt-1 pb-2 bg-white rounded-3 position-absolute search-extend">
                <span class="ms-2 py-2 fw-medium">Tra cứu hàng đầu</span>
                <div class="col-auto pe-0 my-1">
                    <div>
                        <span class="subject">
                            <p class="segoeui fw-medium text-small my-auto text-black">canxi</p>
                        </span>
                    </div>
                </div>
                <div class="col-auto pe-0 my-1">
                    <div>
                        <span class="subject">
                            <p class="segoeui fw-medium text-small my-auto text-black">kem chống nắng</p>
                        </span>
                    </div>
                </div>
                <div class="col-auto pe-0 my-1">
                    <div>
                        <span class="subject">
                            <p class="segoeui fw-medium text-small my-auto text-black">dha</p>
                        </span>
                    </div>
                </div>
                <div class="col-auto pe-0 my-1">
                    <div>
                        <span class="subject">
                            <p class="segoeui fw-medium text-small my-auto text-black">men vi sinh</p>
                        </span>
                    </div>
                </div>
                <div class="col-auto pe-0 my-1">
                    <div>
                        <span class="subject">
                            <p class="segoeui fw-medium text-small my-auto text-black">sữa rửa mặt</p>
                        </span>
                    </div>
                </div>
                <div class="col-auto pe-0 my-1">
                    <div>
                        <span class="subject">
                            <p class="segoeui fw-medium text-small my-auto text-black">sắt</p>
                        </span>
                    </div>
                </div>
                <div class="col-auto pe-0 my-1">
                    <div>
                        <span class="subject">
                            <p class="segoeui fw-medium text-small my-auto text-black">collagen</p>
                        </span>
                    </div>
                </div>
                <div class="col-auto pe-0 my-1">
                    <div>
                        <span class="subject">
                            <p class="segoeui fw-medium text-small my-auto text-black">dung dịch vệ sinh</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div id="btnLogin" role="button" class="col-2 d-inline-flex justify-content-center align-items-center px-0">
            <svg class="text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M24 4C18.4772 4 14 8.47715 14 14C14 19.5228 18.4772 24 24 24C29.5228 24 34 19.5228 34 14C34 8.47715 29.5228 4 24 4ZM12.2499 28C9.90326 28 8.00002 29.9013 8 32.2489L8 33C8 36.7555 9.94167 39.5669 12.9202 41.3802C15.8491 43.1633 19.7861 44 24 44C28.2139 44 32.1509 43.1633 35.0798 41.3802C38.0583 39.5669 40 36.7555 40 33L40 32.2487C40 29.9011 38.0967 28 35.7502 28H12.2499Z" fill="currentColor"></path></svg>
            <div class="text-white fw-semibold mx-1">
                Đăng nhập
            </div>
        </div>
        <div role="button" class="col-1p25 d-inline-flex cart justify-content-center align-items-center">
            <svg class="text-white" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M0 0.857143C0 0.383756 0.383756 0 0.857143 0H1.49516C2.58141 0 3.2318 0.730277 3.60371 1.40914C3.85162 1.86165 4.03095 2.38649 4.17123 2.86166C4.20922 2.85867 4.2477 2.85714 4.28663 2.85714H18.5692C19.518 2.85714 20.2032 3.76505 19.943 4.67748L17.8542 12.0022C17.4692 13.3522 16.2357 14.2832 14.8319 14.2832H8.03402C6.61861 14.2832 5.37783 13.337 5.00323 11.9721L4.1341 8.8052L2.6957 3.94946L2.69337 3.94096C2.51542 3.29201 2.34842 2.68577 2.10026 2.2328C1.85927 1.79292 1.66716 1.71429 1.49516 1.71429H0.857143C0.383756 1.71429 0 1.33053 0 0.857143ZM7.42857 20C8.69094 20 9.71429 18.9767 9.71429 17.7143C9.71429 16.4519 8.69094 15.4286 7.42857 15.4286C6.16621 15.4286 5.14286 16.4519 5.14286 17.7143C5.14286 18.9767 6.16621 20 7.42857 20ZM15.4286 20C16.6909 20 17.7143 18.9767 17.7143 17.7143C17.7143 16.4519 16.6909 15.4286 15.4286 15.4286C14.1662 15.4286 13.1429 16.4519 13.1429 17.7143C13.1429 18.9767 14.1662 20 15.4286 20Z" fill="currentColor"></path></svg>
            <span class="cart-badge">0</span>
            <div class="text-white fw-semibold ms-2">
                Giỏ hàng
            </div>
        </div>
    </div>
    <div class="row cart-extend position-absolute w-25 z-2" style="right:10%; top:17%;">
        <div class="cart-wrapper bg-white rounded-4 p-3">
            <span class="text-gray text-small fw-semibold">Giỏ hàng</span>
            <div class="cart-container my-4">
                <!-- <div class="row align-items-center mb-3">
                    <div class="col-2">
                        <img src="dist/img/viensui.png" alt="viensui">
                    </div>
                    <div class="col-8">
                        <span class="product-name line-clamp-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure nisi natus officia est modi corrupti ullam, dolorum numquam necessitatibus assumenda? Consectetur maiores alias inventore tenetur nisi vitae molestias similique vero?</span>
                        <span class="text-blue fw-semibold text-small">200.000đ</span>
                        <span class="text-small-2 fw-normal text-gray-light ms-1"><del>290.000đ</del></span>
                        <span class="text-small-2 fw-medium text-gray-light ms-4">1 Hộp</span>
                    </div>
                    <div class="col-2" role="button">
                        <span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.91602 7.03125L4.16144 22.0657C4.25069 23.1499 5.17422 24 6.26256 24H17.7378C18.8261 24 19.7497 23.1499 19.8389 22.0657L21.0843 7.03125H2.91602ZM8.48387 21.1875C8.11581 21.1875 7.80616 20.9012 7.78281 20.5283L7.07969 9.18455C7.05564 8.79661 7.3502 8.46291 7.73748 8.43886C8.13916 8.41069 8.45847 8.70872 8.48317 9.09666L9.1863 20.4404C9.21119 20.8421 8.89333 21.1875 8.48387 21.1875ZM12.7033 20.4844C12.7033 20.873 12.3888 21.1875 12.0002 21.1875C11.6115 21.1875 11.297 20.873 11.297 20.4844V9.14062C11.297 8.75198 11.6115 8.4375 12.0002 8.4375C12.3888 8.4375 12.7033 8.75198 12.7033 9.14062V20.4844ZM16.9206 9.18459L16.2175 20.5283C16.1944 20.8974 15.8867 21.205 15.4718 21.1861C15.0845 21.1621 14.79 20.8284 14.814 20.4405L15.5171 9.0967C15.5412 8.70877 15.8811 8.42653 16.2628 8.43891C16.6501 8.46295 16.9447 8.79666 16.9206 9.18459Z" fill="#020B27"></path><path d="M21.1406 2.8125H16.9219V2.10938C16.9219 0.946219 15.9757 0 14.8125 0H9.1875C8.02434 0 7.07812 0.946219 7.07812 2.10938V2.8125H2.85938C2.0827 2.8125 1.45312 3.44208 1.45312 4.21875C1.45312 4.99533 2.0827 5.625 2.85938 5.625C9.32653 5.625 14.6737 5.625 21.1406 5.625C21.9173 5.625 22.5469 4.99533 22.5469 4.21875C22.5469 3.44208 21.9173 2.8125 21.1406 2.8125ZM15.5156 2.8125H8.48438V2.10938C8.48438 1.72144 8.79956 1.40625 9.1875 1.40625H14.8125C15.2004 1.40625 15.5156 1.72144 15.5156 2.10938V2.8125Z" fill="#020B27"></path></svg>
                        </span>
                    </div>
                </div> -->
            </div>
            <div class="row justify-content-between">
                <div class="col-4"><span class="text-small-2 text-gray-light fw-bold"><span class="cart-total">0</span> sản phẩm</span></div>
                <div class="col-auto"><a class="bg-blue text-decoration-none rounded-4 p-2" href="/giohang.html"><span class="segoeui text-small fw-medium text-white">Xem giỏ hàng</span></a></div>
            </div>
        </div>
    </div>
    <div class="row">
        <ul class="nav justify-content-center">
            <li class="nav-item"><a class="nav-link text-white" href="#">canxi</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="#">kem chống nắng</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="#">dha</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="#">omega 3</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="#">thuốc nhỏ mắt</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="#">sắt</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="#">kẽm</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="#">sữa rửa mặt</a></li>
        </ul>
    </div>
</div>
<!-- Begin Login -->
    <div class="login-container">
        <div class="row justify-content-end mx-2">
            <div class="col-auto">
                <p id="btnCloseLogin" role="button"><svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.21263 4.3871L4.29582 4.29289C4.65631 3.93241 5.22354 3.90468 5.61583 4.2097L5.71004 4.29289L12.0029 10.585L18.2958 4.29289C18.6863 3.90237 19.3195 3.90237 19.71 4.29289C20.1006 4.68342 20.1006 5.31658 19.71 5.70711L13.4179 12L19.71 18.2929C20.0705 18.6534 20.0982 19.2206 19.7932 19.6129L19.71 19.7071C19.3496 20.0676 18.7823 20.0953 18.39 19.7903L18.2958 19.7071L12.0029 13.415L5.71004 19.7071C5.31951 20.0976 4.68635 20.0976 4.29582 19.7071C3.9053 19.3166 3.9053 18.6834 4.29582 18.2929L10.5879 12L4.29582 5.70711C3.93534 5.34662 3.90761 4.77939 4.21263 4.3871L4.29582 4.29289L4.21263 4.3871Z" fill="currentColor"></path></svg></p>
            </div>
        </div>
        <form class="login-form position-relative px-5">
            <p class="text-semilarge-2 fw-bold text-center">Đăng nhập hoặc Đăng ký</p>
            <p class="text-center">Vui lòng đăng nhập để hưởng những đặc quyền dành cho thành viên.</p>
            <span class="position-relative d-inline-block w-100 mb-2">
                <input id="txtPhone" class="form-control py-2" maxlength="10" type="text" placeholder="Nhập số điện thoại">
                <span hidden id="removePhone" class="position-absolute h-fit text-gray" style="top: 20%; right:5%">
                    <svg width="24" height="24" class="text-icon-secondary cursor-pointer" role="button" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.0033 2.4C17.3053 2.4 21.6033 6.69807 21.6033 12C21.6033 17.3019 17.3053 21.6 12.0033 21.6C6.70139 21.6 2.40332 17.3019 2.40332 12C2.40332 6.69807 6.70139 2.4 12.0033 2.4ZM9.37464 8.53646C9.1408 8.37447 8.81749 8.39761 8.60921 8.60589L8.53978 8.68899C8.37779 8.92283 8.40093 9.24614 8.60921 9.45442L11.1548 12L8.60921 14.5456L8.53978 14.6287C8.37779 14.8625 8.40093 15.1858 8.60921 15.3941L8.69231 15.4635C8.92615 15.6255 9.24946 15.6024 9.45774 15.3941L12.0033 12.8485L14.5489 15.3941L14.632 15.4635C14.8658 15.6255 15.1892 15.6024 15.3974 15.3941L15.4669 15.311C15.6289 15.0772 15.6057 14.7539 15.3974 14.5456L12.8518 12L15.3974 9.45442L15.4669 9.37132C15.6289 9.13748 15.6057 8.81417 15.3974 8.60589L15.3143 8.53646C15.0805 8.37447 14.7572 8.39761 14.5489 8.60589L12.0033 11.1515L9.45774 8.60589L9.37464 8.53646Z" fill="currentColor"></path></svg>
                </span>
            </span>
            <span id="errorPhoneMsg" hidden>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="url(#a)" d="M10.5 1.667a8.334 8.334 0 1 1 0 16.667 8.334 8.334 0 0 1 0-16.667Zm.002 10.836a.832.832 0 1 0 0 1.665.832.832 0 0 0 0-1.665Zm-.002-6.67a.833.833 0 0 0-.828.737l-.005.097.001 4.167.006.098a.833.833 0 0 0 1.655-.001l.006-.097-.002-4.168-.005-.097a.834.834 0 0 0-.828-.736Z"></path><defs><linearGradient id="a" x1="16.393" x2="4.608" y1="15.893" y2="4.107" gradientUnits="userSpaceOnUse"><stop stop-color="#D92D20"></stop><stop offset="1" stop-color="#F04438"></stop></linearGradient></defs></svg>
                <span class="text-small text-danger">Số điện thoại không hợp lệ. Vui lòng thử lại hoặc đăng nhập bằng hình thức khác.</span>
            </span>
            <button type="submit" class="btn rounded-5 text-white bg-blue w-100 mt-3 py-2">Tiếp tục</button>
            <div class="hr-with-text"><span class="text-small text-gray">hoặc đăng nhập bằng</span></div>
            <div class="row justify-content-center">
                <div class="col-auto"><button class="btn border-gray rounded-full p-2"><span class="d-inline-block"><svg viewBox="0 0 24 25" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2678_56599)"><path d="M5.31891 15.0035L4.4835 18.1222L1.43011 18.1868C0.517594 16.4943 0 14.5578 0 12.5C0 10.5101 0.483938 8.63362 1.34175 6.98132H1.34241L4.06078 7.4797L5.25159 10.1818C5.00236 10.9084 4.86652 11.6884 4.86652 12.5C4.86661 13.3809 5.02617 14.2249 5.31891 15.0035Z" fill="#FBBB00"></path><path d="M23.7902 10.2583C23.928 10.9842 23.9999 11.7339 23.9999 12.5001C23.9999 13.3592 23.9095 14.1972 23.7375 15.0056C23.1533 17.7563 21.6269 20.1583 19.5124 21.8581L19.5118 21.8574L16.0878 21.6827L15.6032 18.6576C17.0063 17.8348 18.1028 16.5471 18.6804 15.0056H12.2637V10.2583H18.774H23.7902Z" fill="#518EF8"></path><path d="M19.5114 21.8574L19.5121 21.858C17.4556 23.511 14.8433 24.5 11.9996 24.5C7.42969 24.5 3.45652 21.9457 1.42969 18.1868L5.31848 15.0035C6.33187 17.7081 8.94089 19.6334 11.9996 19.6334C13.3143 19.6334 14.546 19.278 15.6029 18.6576L19.5114 21.8574Z" fill="#28B446"></path><path d="M19.6596 3.26262L15.7721 6.44525C14.6783 5.76153 13.3853 5.36656 12 5.36656C8.87213 5.36656 6.21431 7.38017 5.25169 10.1818L1.34245 6.98131H1.3418C3.33895 3.13077 7.36223 0.5 12 0.5C14.9117 0.5 17.5814 1.53716 19.6596 3.26262Z" fill="#F14336"></path></g><defs><clipPath id="clip0_2678_56599"><rect width="24" height="24" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg></span></button></div>
                <div class="col-auto"><button class="btn border-gray rounded-full p-2"><span class="d-inline-block"><svg viewBox="0 0 24 25" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2678_56600)"><path d="M24 12.5C24 18.4897 19.6116 23.4542 13.875 24.3542V15.9688H16.6711L17.2031 12.5H13.875V10.2491C13.875 9.29984 14.34 8.375 15.8306 8.375H17.3438V5.42188C17.3438 5.42188 15.9703 5.1875 14.6573 5.1875C11.9166 5.1875 10.125 6.84875 10.125 9.85625V12.5H7.07812V15.9688H10.125V24.3542C4.38844 23.4542 0 18.4897 0 12.5C0 5.87281 5.37281 0.5 12 0.5C18.6272 0.5 24 5.87281 24 12.5Z" fill="#1877F2"></path><path d="M16.6711 15.9688L17.2031 12.5H13.875V10.249C13.875 9.30003 14.3399 8.375 15.8306 8.375H17.3438V5.42188C17.3438 5.42188 15.9705 5.1875 14.6576 5.1875C11.9165 5.1875 10.125 6.84875 10.125 9.85625V12.5H7.07812V15.9688H10.125V24.3542C10.736 24.45 11.3621 24.5 12 24.5C12.6379 24.5 13.264 24.45 13.875 24.3542V15.9688H16.6711Z" fill="white"></path></g><defs><clipPath id="clip0_2678_56600"><rect width="24" height="24" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg></span></button></div>
                <div class="col-auto"><button class="btn border-gray rounded-full p-2"><span class="d-inline-block"><svg viewBox="0 0 24 25" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2678_56601)"><path d="M16.6192 0.5C16.6751 0.5 16.7309 0.5 16.7899 0.5C16.9269 2.19253 16.2809 3.45719 15.4958 4.37301C14.7254 5.28251 13.6704 6.1646 11.9642 6.03076C11.8504 4.36247 12.4975 3.19161 13.2816 2.27789C14.0087 1.42636 15.3419 0.668621 16.6192 0.5Z" fill="black"></path><path d="M21.7841 18.1166C21.7841 18.1335 21.7841 18.1482 21.7841 18.1641C21.3046 19.6163 20.6206 20.8609 19.7859 22.016C19.024 23.0646 18.0903 24.4757 16.423 24.4757C14.9824 24.4757 14.0254 23.5494 12.549 23.5241C10.9871 23.4988 10.1282 24.2987 8.70019 24.5C8.53684 24.5 8.37348 24.5 8.21329 24.5C7.16468 24.3482 6.31842 23.5178 5.7019 22.7695C3.88396 20.5585 2.47914 17.7025 2.21777 14.0476C2.21777 13.6893 2.21777 13.332 2.21777 12.9737C2.32843 10.358 3.59941 8.23124 5.28878 7.20054C6.18036 6.65253 7.40602 6.18566 8.7708 6.39432C9.3557 6.48496 9.95325 6.6852 10.477 6.88333C10.9734 7.07408 11.5941 7.41237 12.1822 7.39446C12.5806 7.38286 12.9768 7.17525 13.3784 7.02876C14.5545 6.60405 15.7074 6.11715 17.2271 6.34585C19.0535 6.62196 20.3498 7.43345 21.1507 8.68546C19.6057 9.66873 18.3843 11.1505 18.593 13.6808C18.7784 15.9794 20.1148 17.3241 21.7841 18.1166Z" fill="black"></path></g><defs><clipPath id="clip0_2678_56601"><rect width="24" height="24" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg></span></button></div>
                <div class="col-auto"><button class="btn border-gray rounded-full p-2"><span class="d-inline-block"><svg class="h-6 w-6" width="24" height="24" viewBox="0 0 151 158" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M75.77 157.05C117.191 157.05 150.77 123.471 150.77 82.05C150.77 40.6286 117.191 7.05 75.77 7.05C34.3486 7.05 0.770004 40.6286 0.770004 82.05C0.770004 123.471 34.3486 157.05 75.77 157.05Z" fill="url(#paint0_linear_1_4)"></path><path d="M111.76 43.86V85.13C106.24 78.53 97.95 74.33 88.69 74.33C72.1 74.33 58.6 87.83 58.6 104.42C58.6 121.01 72.1 134.51 88.69 134.51C105.28 134.51 118.78 121.01 118.78 104.42V43.87H111.77L111.76 43.86ZM88.69 127.48C75.97 127.48 65.62 117.13 65.62 104.41C65.62 91.69 75.97 81.34 88.69 81.34C101.41 81.34 111.76 91.69 111.76 104.41C111.76 117.13 101.41 127.48 88.69 127.48Z" fill="white"></path><path d="M46.17 82.93H39.16V130.98H46.17V82.93Z" fill="white"></path><path d="M49.01 76.66C47.93 76.17 47.25 75.05 47.32 73.87L47.64 69.68L54.9 71.96C55.57 71.06 56.14 70.08 56.6 69.03L44.67 65.29L44.03 73.64C43.94 75.17 44.41 76.62 45.3 77.78C46.62 77.57 47.87 77.19 49.05 76.66C49.05 76.66 49.03 76.66 49.02 76.65L49.01 76.66Z" fill="white"></path><path d="M41.47 65.39L33.32 67.34C31.82 67.72 30.56 68.64 29.73 69.87C30.33 71.05 31.09 72.14 31.97 73.11C31.97 73.07 31.97 73.04 31.97 73.01C32.11 71.83 32.96 70.85 34.11 70.54L38.19 69.56L38.25 77.19C39.3 77.54 40.41 77.78 41.56 77.89L41.47 65.38V65.39Z" fill="white"></path><path d="M53.29 65.52C54.05 65.83 54.84 65.98 55.62 65.98C56.3 65.98 56.98 65.86 57.63 65.64C57.77 64.82 57.85 63.97 57.85 63.1C57.85 62.63 57.83 62.17 57.78 61.71C57.76 61.73 57.75 61.75 57.74 61.76C57.19 62.34 56.42 62.68 55.62 62.68C55.25 62.68 54.9 62.61 54.55 62.47L50.69 60.83L55.2 54.63C54.55 53.7 53.81 52.84 52.97 52.08L45.58 62.24L53.29 65.51V65.52Z" fill="white"></path><path d="M49.86 49.92C48.7 49.31 47.44 48.85 46.12 48.57C46.15 48.62 46.18 48.67 46.2 48.7C46.77 49.74 46.66 51.04 45.9 51.95L43.15 55.13L38.6 48.89C37.51 49.22 36.47 49.68 35.51 50.25L42.94 60.43L48.42 54.09C49.42 52.9 49.9 51.41 49.86 49.93V49.92Z" fill="white"></path><path d="M36.04 55.21C35.21 53.88 33.93 52.96 32.49 52.55C31.55 53.49 30.73 54.55 30.07 55.71C30.13 55.69 30.2 55.68 30.24 55.67C30.43 55.63 30.62 55.61 30.8 55.61C31.79 55.61 32.7 56.11 33.24 56.94L35.42 60.53L28.11 62.94C28.11 62.94 28.11 63.04 28.11 63.09C28.11 64.19 28.23 65.27 28.46 66.3L40.4 62.36L36.05 55.2L36.04 55.21Z" fill="white"></path><path d="M90.94 41.99L18.53 41.99C9.07001 41.99 1.40001 34.31 1.40001 24.86V0.449989L73.81 0.449989C83.27 0.449989 90.94 8.12999 90.94 17.58V41.99Z" fill="url(#paint1_linear_1_4)"></path><path d="M17.04 36.12V7.66H34.97V10.79H20.25V20.3H33.06V23.43H20.25V36.11H17.04V36.12Z" fill="white"></path><path d="M38.12 36.12V7.66H49.38C50.87 7.66 52.21 8.03 53.41 8.78C54.6 9.53 55.55 10.54 56.26 11.81C56.96 13.08 57.32 14.52 57.32 16.12C57.32 17.8 56.97 19.31 56.26 20.63C55.55 21.96 54.61 23 53.41 23.76C52.22 24.52 50.88 24.9 49.38 24.9H41.33V36.12H38.12ZM41.33 21.77H49.54C50.38 21.77 51.13 21.53 51.8 21.04C52.46 20.55 53 19.88 53.41 19.01C53.82 18.14 54.02 17.17 54.02 16.08C54.02 14.59 53.59 13.34 52.72 12.32C51.85 11.3 50.8 10.8 49.55 10.8H41.34V21.78L41.33 21.77Z" fill="white"></path><path d="M66.52 36.12V10.79H58.35V7.66H78.15V10.79H69.73V36.12H66.52Z" fill="white"></path><defs><linearGradient id="paint0_linear_1_4" x1="75.77" y1="157.87" x2="75.77" y2="6.55" gradientUnits="userSpaceOnUse"><stop stop-color="#F04E23"></stop><stop offset="1" stop-color="#F7941E"></stop></linearGradient><linearGradient id="paint1_linear_1_4" x1="46.17" y1="41.99" x2="46.17" y2="0.449989" gradientUnits="userSpaceOnUse"><stop stop-color="#58595B"></stop><stop offset="1" stop-color="#808285"></stop></linearGradient></defs></svg></span></button></div>
            </div>
        </form>
        <img class="mt-2 rounded-5" src="dist/img/background_login.svg" alt="">
      </div>
      <div class="login-backdrop"></div>
      <!-- End Login -->
      <script src="dist/js/header.bundle.js"></script>
</header>`
export let footerTemplate:string = `<footer>
<div class="bg-blue">
    <div class="container">
        <div class="row align-items-center justify-content-between py-3">
            <div class="col-auto pt-3">
                <a class="text-decoration-none text-white d-inline-flex " href="#">
                    <span>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4189 2C16.8372 2 20.4189 5.64568 20.4189 10.1429C20.4189 13.5133 17.8948 17.0459 12.9523 20.819C12.6362 21.0603 12.2017 21.0603 11.8856 20.819C6.94304 17.0459 4.41895 13.5133 4.41895 10.1429C4.41895 5.64568 8.00067 2 12.4189 2ZM12.4189 7.42857C10.9462 7.42857 9.75228 8.6438 9.75228 10.1429C9.75228 11.6419 10.9462 12.8571 12.4189 12.8571C13.8917 12.8571 15.0856 11.6419 15.0856 10.1429C15.0856 8.6438 13.8917 7.42857 12.4189 7.42857Z" fill="currentColor"></path></svg>
                    </span>
                    <p class="mx-2 text-semilarge">Xem hệ thống nhà thuốc trên toàn quốc</p>
                </a>
            </div>
            <div class="col-auto">
                <a class="box-white text-decoration-none rounded-5" href="#"><span class="text-blue text-medium fw-medium ms-2">Xem danh sách nhà thuốc</span></a>
            </div>
        </div>
    </div>
</div>
<div class="container py-3">
    <div class="row">
        <div class="col-2">
            <p class="text-small text-gray-light fw-bold">VỀ CHÚNG TÔI</p>
            <ul class="nav flex-column">
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Giới thiệu</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Hệ thống cửa hàng</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Giấy phép kinh doanh</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Quy chế hoạt động</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Chính sách đặt cọc</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Chính sách nội dung</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Chính sách đổi trả thuốc</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Chính sách giao hàng</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Chính sách bảo mật</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Chính sách thanh toán</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Kiểm tra hóa đơn điện tử</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Chính sách thu thập và xử lý dữ liệu cá nhân</a></li>
            </ul>
        </div>
        <div class="col-2">
            <p class="text-small text-gray-light fw-bold">DANH MỤC</p>
            <ul class="nav flex-column">
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Thực phẩm chức năng</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Dược mỹ phẩm</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Chăm sóc cá nhân</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Thuốc</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Trang thiết bị y tế</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Đặt thuốc online</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Trung tâm Tiêm chủng</a></li>
            </ul>
        </div>
        <div class="col-2">
            <p class="text-small text-gray-light fw-bold">TÌM HIỂU THÊM</p>
            <ul class="nav flex-column">
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Góc sức khỏe</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Tra cứu thuốc</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Tra cứu dược chất</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Tra cứu dược liệu</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Bệnh thường gặp</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Bệnh viện</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Hoạt động xã hội</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Tin tức tuyển dụng</a></li>
                <li class="nav-item"><a class="nav-link px-0 text-blue text-small" href="#">Tin tức sự kiện</a></li>
            </ul>
        </div>
        <div class="col-3">
            <p class="text-small text-gray-light fw-bold">TỔNG ĐÀI</p>
            <div class="text-small fw-medium mb-3">
                <p class="mb-1">Tư vấn mua hàng</p>
                <a class="text-decoration-none" href="#">18006928 <span class="text-gray-light">(Nhánh 1)</span></a>
            </div>
            <div class="text-small fw-medium mb-3">
                <p class="mb-1">Trung tâm Vắc xin</p>
                <a class="text-decoration-none" href="#">18006928 <span class="text-gray-light">(Nhánh 2)</span></a>
            </div>
            <div class="text-small fw-medium mb-3">
                <p class="mb-1">Gợi ý, khiếu nại</p>
                <a class="text-decoration-none" href="#">18006928 <span class="text-gray-light">(Nhánh 3)</span></a>
            </div>
            <p class="text-small text-gray-light fw-bold">CHỨNG NHẬN BỞI</p>
            <div class="row align-items-center mb-3">
                <div class="col-auto">
                    <img src="dist/img/bo_cong_thuong.svg" alt="">
                </div>
                <div class="col-auto">
                    <img src="dist/img/DMCA.svg" alt="">
                </div>
            </div>
            <p class="text-small text-gray-light fw-bold">HỖ TRỢ THANH TOÁN</p>
            <div class="row">
                <div class="col-auto mb-3 pe-0">
                    <a class="border-gray p-1 rounded-2" href="#"><img class="px-0" style="width: 36px; height: 19px;" src="dist/img/visa.svg" alt=""></a>
                </div>
                <div class="col-auto mb-3 pe-0">
                    <a class="border-gray p-1 rounded-2" href="#"><img class="px-0" style="width: 36px; height: 19px;" src="dist/img/mtc.svg" alt=""></a>
                </div>
                <div class="col-auto mb-3 pe-0">
                    <a class="border-gray p-1 rounded-2" href="#"><img class="px-0" style="width: 36px; height: 19px;" src="dist/img/jcb.svg" alt=""></a>
                </div>
                <div class="col-auto mb-3 pe-0">
                    <a class="border-gray p-1 rounded-2" href="#"><img class="px-0" style="width: 36px; height: 19px;" src="dist/img/amex.svg" alt=""></a>
                </div>
                <div class="col-auto mb-3 pe-0">
                    <a class="border-gray p-1 rounded-2" href="#"><img class="px-0" style="width: 36px; height: 19px;" src="dist/img/vnpay.svg" alt=""></a>
                </div>
                <div class="col-auto mb-3 pe-0">
                    <a class="border-gray p-1 rounded-2" href="#"><img class="px-0" style="width: 36px; height: 19px;" src="dist/img/zalopay.svg" alt=""></a>
                </div>
                <div class="col-auto mb-3 pe-0">
                    <a class="border-gray p-1 rounded-2" href="#"><img class="px-0" style="width: 36px; height: 19px;" src="dist/img/momo.svg" alt=""></a>
                </div>
            </div>
        </div>
        <div class="col-3">
            <p class="text-small text-gray-light fw-bold">KẾT NỐI VỚI CHÚNG TÔI</p>
            <div class="row">
                <div class="col-auto mb-3 pe-0">
                    <a href="#"><img class="px-0" style="width: 28px; height: 28px;" src="dist/img/facebook.svg" alt=""></a>
                </div>
                <div class="col-auto mb-3 pe-0">
                    <a href="#"><img class="px-0" style="width: 28px; height: 28px;" src="dist/img/zalo.svg" alt=""></a>
                </div>
            </div>
            <div>
                <p class="text-small text-gray-light fw-bold">TẢI ỨNG DỤNG LONG CHÂU</p>
                <img src="dist/img/QR_100x100.png" alt="">
            </div>
        </div>
    </div>
    <div class="row mt-3">
        <hr>
        <p class="text-center text-gray text-small fw-normal">© 2007 - 2022 Công ty Cổ Phần Dược Phẩm FPT Long Châu Số ĐKKD 0315275368 cấp ngày 17/09/2018 tại Sở Kế hoạch Đầu tư TPHCM</p>
        <div class="col-auto">
            <p class="text-gray text-small fw-normal mt-1">Địa chỉ: 379-381 Hai Bà Trưng, P. Võ Thị Sáu, Q.3, TP. HCM</p>
        </div>
        <div class="col-auto">
            <ul>
                <li class="d-inline-block text-gray text-small fw-normal me-2"><span>&#8226; Số điện thoại:</span><a class="text-decoration-none" href="#">(028)73023456</a></li>
                <li class="d-inline-block text-gray text-small fw-normal me-2"><span>&#8226; Email:</span> <a class="text-decoration-none" href="#">sale@nhathuoclongchau.com.vn</a></li>
                <li class="d-inline-block text-gray text-small fw-normal"><span>&#8226; Người quản lý nội dung: Nguyễn Bách Điệp</span></li>
            </ul>
        </div>
    </div>
</div>
</footer>`
export let navTemplate:string = ` <nav>
<div class="row">
    <ul class="nav position-relative justify-content-center flex-nowrap my-nav gap-4">
        <li class="nav-item">
            <a class="nav-link text-black d-inline-flex border-bottom my-nav px-0" href="/danhmuc.html">
                <span class="menu-item fw-medium text-small">Thực phẩm chức năng<i class="fa-solid fa-chevron-up semi-rotate mx-2"></i></span>
            </a>
            <div class="position-absolute panel">
                <div class="row">
                    <div class="col-2p75">
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/tpcn_vitamin_khoang_chat.png" alt="">
                                <span class="fw-semibold">Vitamin & khoáng chất</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/sinh_li_noi_tiet_to.png" alt="">
                                <span class="fw-semibold">Sinh lý - Nội tiết tố</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <div class="">
                                <a class="line-clamp-1 text-decoration-none my-2" ref="#">
                                    <img src="dist/img/cai_thien_tang_cuong_chuc_nang.png" alt="">
                                    <span class=" fw-semibold">Cải thiện tăng cường chức năng</span>
                                </a>
                            </div>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_dieu_tri.png" alt="">
                                <span class="fw-semibold">Hỗ trợ điều trị</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_tieu_hoa.png" alt="">
                                <span class="fw-semibold">Hỗ trợ tiêu hóa</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/than_kinh_nao.png" alt="">
                                <span class="fw-semibold">Thần kinh não</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_lam_dep.png" alt="">
                                <span class="fw-semibold">Hỗ trợ làm đẹp</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/suc_khoe_tim_mach.png" alt="">
                                <span class="fw-semibold">Sức khỏe tim mạch</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/dinh_duong.png" alt="">
                                <span class="fw-semibold">Dinh dưỡng</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-9 bg-gray rounded-end-4">
                        <div class="row mt-3 mx-2 gap-3">
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/bo_sung_canxi_vitamin_d.png" alt="#">
                                    <span class="text-black text-small fw-medium">Bổ sung Canxi & Vitamin D</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/tpcn_vitamin_tong_hop.png" alt="#">
                                    <span class="text-black text-small fw-medium">Vitamin tổng hợp</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/dau_ca_omega_3_dha.png" alt="#">
                                    <span class="text-black text-small fw-medium">Dầu cá, Omega 3, DHA</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/tpcn_vitamin_c_cac_loai.png" alt="#">
                                    <span class="text-black text-small fw-medium">Vitamin C các loại</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/bo_sung_sat_axit_folic.png" alt="#">
                                    <span class="text-black text-small fw-medium">Bổ sung Sắt & Axit Folic</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/show-more-dot-icon.svg" alt="#">
                                    <span class="text-black text-small fw-medium">Xem thêm</span>
                                </a>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-auto pe-0 text-center d-inline-flex">
                                <p class="fw-semibold text-medium ms-2">Bán chạy nhất</p>
                                <p class="mx-2 text-gray-light">|</p>
                                <a class="text-decoration-none text-blue text-small" href="#">Xem tất cả</a>
                            </div>
                        </div>
                        <div class="row justify-content-evenly">
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09006.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên nang mềm NatureCare Omega 369 bổ sung Omega, giảm nguy cơ xơ vữa động mạch (6 vỉ x 20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">484.500đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Hộp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through">570.000đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_0958.png" alt="">
                                    </div> 
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên uống Precare Mama Diamond cung cấp các vitamin, khoáng chất cho phụ nữ mang thai (30 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">157.250đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Hộp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through">185.000đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09365.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Kids Multivitamins Plus Calcium & D3 hương dưa hấu giúp bổ sung calci và vitamin cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">146.000đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09335.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Daily Vitamins Plus Biotin & Ginseng hương cam giúp bổ sung vitamin cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">126.500đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09324.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Vitamin C 1000mg hương chanh giúp bổ sung vitamin C cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">113.000đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link text-black d-inline-flex border-bottom my-nav px-0" href="#">
                <span class="menu-item fw-medium text-small">Dược mỹ phẩm<i class="fa-solid fa-chevron-up semi-rotate mx-2"></i></span>
            </a>
            <div class="position-absolute panel">
                <div class="row">
                    <div class="col-2p75">
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/tpcn_vitamin_khoang_chat.png" alt="">
                                <span class="fw-semibold">Vitamin & khoáng chất</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/sinh_li_noi_tiet_to.png" alt="">
                                <span class="fw-semibold">Sinh lý - Nội tiết tố</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <div class="">
                                <a class="line-clamp-1 text-decoration-none my-2" ref="#">
                                    <img src="dist/img/cai_thien_tang_cuong_chuc_nang.png" alt="">
                                    <span class=" fw-semibold">Cải thiện tăng cường chức năng</span>
                                </a>
                            </div>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_dieu_tri.png" alt="">
                                <span class="fw-semibold">Hỗ trợ điều trị</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_tieu_hoa.png" alt="">
                                <span class="fw-semibold">Hỗ trợ tiêu hóa</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/than_kinh_nao.png" alt="">
                                <span class="fw-semibold">Thần kinh não</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_lam_dep.png" alt="">
                                <span class="fw-semibold">Hỗ trợ làm đẹp</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/suc_khoe_tim_mach.png" alt="">
                                <span class="fw-semibold">Sức khỏe tim mạch</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/dinh_duong.png" alt="">
                                <span class="fw-semibold">Dinh dưỡng</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-9 bg-gray rounded-end-4">
                        <div class="row mt-3 mx-2 gap-3">
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/bo_sung_canxi_vitamin_d.png" alt="#">
                                    <span class="text-black text-small fw-medium">Bổ sung Canxi & Vitamin D</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/tpcn_vitamin_tong_hop.png" alt="#">
                                    <span class="text-black text-small fw-medium">Vitamin tổng hợp</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/dau_ca_omega_3_dha.png" alt="#">
                                    <span class="text-black text-small fw-medium">Dầu cá, Omega 3, DHA</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/tpcn_vitamin_c_cac_loai.png" alt="#">
                                    <span class="text-black text-small fw-medium">Vitamin C các loại</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/bo_sung_sat_axit_folic.png" alt="#">
                                    <span class="text-black text-small fw-medium">Bổ sung Sắt & Axit Folic</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/show-more-dot-icon.svg" alt="#">
                                    <span class="text-black text-small fw-medium">Xem thêm</span>
                                </a>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-auto pe-0 text-center d-inline-flex">
                                <p class="fw-semibold text-medium ms-2">Bán chạy nhất</p>
                                <p class="mx-2 text-gray-light">|</p>
                                <a class="text-decoration-none text-blue text-small" href="#">Xem tất cả</a>
                            </div>
                        </div>
                        <div class="row justify-content-evenly">
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09006.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên nang mềm NatureCare Omega 369 bổ sung Omega, giảm nguy cơ xơ vữa động mạch (6 vỉ x 20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">484.500đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Hộp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through">570.000đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_0958.png" alt="">
                                    </div> 
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên uống Precare Mama Diamond cung cấp các vitamin, khoáng chất cho phụ nữ mang thai (30 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">157.250đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Hộp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through">185.000đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09365.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Kids Multivitamins Plus Calcium & D3 hương dưa hấu giúp bổ sung calci và vitamin cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">146.000đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09335.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Daily Vitamins Plus Biotin & Ginseng hương cam giúp bổ sung vitamin cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">126.500đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09324.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Vitamin C 1000mg hương chanh giúp bổ sung vitamin C cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">113.000đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link text-black d-inline-flex border-bottom my-nav px-0" href="#">
                <span class="menu-item fw-medium text-small">Chăm sóc cá nhân<i class="fa-solid fa-chevron-up semi-rotate mx-2"></i></span>
            </a>
            <div class="position-absolute panel">
                <div class="row">
                    <div class="col-2p75">
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/tpcn_vitamin_khoang_chat.png" alt="">
                                <span class="fw-semibold">Vitamin & khoáng chất</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/sinh_li_noi_tiet_to.png" alt="">
                                <span class="fw-semibold">Sinh lý - Nội tiết tố</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <div class="">
                                <a class="line-clamp-1 text-decoration-none my-2" ref="#">
                                    <img src="dist/img/cai_thien_tang_cuong_chuc_nang.png" alt="">
                                    <span class=" fw-semibold">Cải thiện tăng cường chức năng</span>
                                </a>
                            </div>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_dieu_tri.png" alt="">
                                <span class="fw-semibold">Hỗ trợ điều trị</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_tieu_hoa.png" alt="">
                                <span class="fw-semibold">Hỗ trợ tiêu hóa</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/than_kinh_nao.png" alt="">
                                <span class="fw-semibold">Thần kinh não</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_lam_dep.png" alt="">
                                <span class="fw-semibold">Hỗ trợ làm đẹp</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/suc_khoe_tim_mach.png" alt="">
                                <span class="fw-semibold">Sức khỏe tim mạch</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/dinh_duong.png" alt="">
                                <span class="fw-semibold">Dinh dưỡng</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-9 bg-gray rounded-end-4">
                        <div class="row mt-3 mx-2 gap-3">
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/bo_sung_canxi_vitamin_d.png" alt="#">
                                    <span class="text-black text-small fw-medium">Bổ sung Canxi & Vitamin D</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/tpcn_vitamin_tong_hop.png" alt="#">
                                    <span class="text-black text-small fw-medium">Vitamin tổng hợp</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/dau_ca_omega_3_dha.png" alt="#">
                                    <span class="text-black text-small fw-medium">Dầu cá, Omega 3, DHA</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/tpcn_vitamin_c_cac_loai.png" alt="#">
                                    <span class="text-black text-small fw-medium">Vitamin C các loại</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/bo_sung_sat_axit_folic.png" alt="#">
                                    <span class="text-black text-small fw-medium">Bổ sung Sắt & Axit Folic</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/show-more-dot-icon.svg" alt="#">
                                    <span class="text-black text-small fw-medium">Xem thêm</span>
                                </a>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-auto pe-0 text-center d-inline-flex">
                                <p class="fw-semibold text-medium ms-2">Bán chạy nhất</p>
                                <p class="mx-2 text-gray-light">|</p>
                                <a class="text-decoration-none text-blue text-small" href="#">Xem tất cả</a>
                            </div>
                        </div>
                        <div class="row justify-content-evenly">
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09006.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên nang mềm NatureCare Omega 369 bổ sung Omega, giảm nguy cơ xơ vữa động mạch (6 vỉ x 20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">484.500đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Hộp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through">570.000đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_0958.png" alt="">
                                    </div> 
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên uống Precare Mama Diamond cung cấp các vitamin, khoáng chất cho phụ nữ mang thai (30 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">157.250đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Hộp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through">185.000đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09365.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Kids Multivitamins Plus Calcium & D3 hương dưa hấu giúp bổ sung calci và vitamin cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">146.000đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09335.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Daily Vitamins Plus Biotin & Ginseng hương cam giúp bổ sung vitamin cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">126.500đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09324.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Vitamin C 1000mg hương chanh giúp bổ sung vitamin C cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">113.000đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link text-black d-inline-flex border-bottom my-nav px-0" href="#">
                <span class="menu-item fw-medium text-small">Thuốc<i class="fa-solid fa-chevron-up semi-rotate mx-2"></i></span>
            </a>
            <div class="position-absolute panel">
                <div class="row">
                    <div class="col-2p75">
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/tpcn_vitamin_khoang_chat.png" alt="">
                                <span class="fw-semibold">Vitamin & khoáng chất</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/sinh_li_noi_tiet_to.png" alt="">
                                <span class="fw-semibold">Sinh lý - Nội tiết tố</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <div class="">
                                <a class="line-clamp-1 text-decoration-none my-2" ref="#">
                                    <img src="dist/img/cai_thien_tang_cuong_chuc_nang.png" alt="">
                                    <span class=" fw-semibold">Cải thiện tăng cường chức năng</span>
                                </a>
                            </div>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_dieu_tri.png" alt="">
                                <span class="fw-semibold">Hỗ trợ điều trị</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_tieu_hoa.png" alt="">
                                <span class="fw-semibold">Hỗ trợ tiêu hóa</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/than_kinh_nao.png" alt="">
                                <span class="fw-semibold">Thần kinh não</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_lam_dep.png" alt="">
                                <span class="fw-semibold">Hỗ trợ làm đẹp</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/suc_khoe_tim_mach.png" alt="">
                                <span class="fw-semibold">Sức khỏe tim mạch</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/dinh_duong.png" alt="">
                                <span class="fw-semibold">Dinh dưỡng</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-9 bg-gray rounded-end-4">
                        <div class="row mt-3 mx-2 gap-3">
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/bo_sung_canxi_vitamin_d.png" alt="#">
                                    <span class="text-black text-small fw-medium">Bổ sung Canxi & Vitamin D</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/tpcn_vitamin_tong_hop.png" alt="#">
                                    <span class="text-black text-small fw-medium">Vitamin tổng hợp</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/dau_ca_omega_3_dha.png" alt="#">
                                    <span class="text-black text-small fw-medium">Dầu cá, Omega 3, DHA</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/tpcn_vitamin_c_cac_loai.png" alt="#">
                                    <span class="text-black text-small fw-medium">Vitamin C các loại</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/bo_sung_sat_axit_folic.png" alt="#">
                                    <span class="text-black text-small fw-medium">Bổ sung Sắt & Axit Folic</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/show-more-dot-icon.svg" alt="#">
                                    <span class="text-black text-small fw-medium">Xem thêm</span>
                                </a>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-auto pe-0 text-center d-inline-flex">
                                <p class="fw-semibold text-medium ms-2">Bán chạy nhất</p>
                                <p class="mx-2 text-gray-light">|</p>
                                <a class="text-decoration-none text-blue text-small" href="#">Xem tất cả</a>
                            </div>
                        </div>
                        <div class="row justify-content-evenly">
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09006.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên nang mềm NatureCare Omega 369 bổ sung Omega, giảm nguy cơ xơ vữa động mạch (6 vỉ x 20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">484.500đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Hộp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through">570.000đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_0958.png" alt="">
                                    </div> 
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên uống Precare Mama Diamond cung cấp các vitamin, khoáng chất cho phụ nữ mang thai (30 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">157.250đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Hộp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through">185.000đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09365.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Kids Multivitamins Plus Calcium & D3 hương dưa hấu giúp bổ sung calci và vitamin cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">146.000đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09335.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Daily Vitamins Plus Biotin & Ginseng hương cam giúp bổ sung vitamin cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">126.500đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09324.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Vitamin C 1000mg hương chanh giúp bổ sung vitamin C cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">113.000đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link text-black d-inline-flex border-bottom my-nav px-0" href="#">
                <span class="menu-item fw-medium text-small">Thiết bị y tế<i class="fa-solid fa-chevron-up semi-rotate mx-2"></i></span>
            </a>
            <div class="position-absolute panel">
                <div class="row">
                    <div class="col-2p75">
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/tpcn_vitamin_khoang_chat.png" alt="">
                                <span class="fw-semibold">Vitamin & khoáng chất</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/sinh_li_noi_tiet_to.png" alt="">
                                <span class="fw-semibold">Sinh lý - Nội tiết tố</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <div class="">
                                <a class="line-clamp-1 text-decoration-none my-2" ref="#">
                                    <img src="dist/img/cai_thien_tang_cuong_chuc_nang.png" alt="">
                                    <span class=" fw-semibold">Cải thiện tăng cường chức năng</span>
                                </a>
                            </div>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_dieu_tri.png" alt="">
                                <span class="fw-semibold">Hỗ trợ điều trị</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_tieu_hoa.png" alt="">
                                <span class="fw-semibold">Hỗ trợ tiêu hóa</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/than_kinh_nao.png" alt="">
                                <span class="fw-semibold">Thần kinh não</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/ho_tro_lam_dep.png" alt="">
                                <span class="fw-semibold">Hỗ trợ làm đẹp</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/suc_khoe_tim_mach.png" alt="">
                                <span class="fw-semibold">Sức khỏe tim mạch</span>
                            </a>
                        </div>
                        <div class="row panel-item">
                            <a class="text-decoration-none my-2" ref="#">
                                <img src="dist/img/dinh_duong.png" alt="">
                                <span class="fw-semibold">Dinh dưỡng</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-9 bg-gray rounded-end-4">
                        <div class="row mt-3 mx-2 gap-3">
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/bo_sung_canxi_vitamin_d.png" alt="#">
                                    <span class="text-black text-small fw-medium">Bổ sung Canxi & Vitamin D</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/tpcn_vitamin_tong_hop.png" alt="#">
                                    <span class="text-black text-small fw-medium">Vitamin tổng hợp</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/dau_ca_omega_3_dha.png" alt="#">
                                    <span class="text-black text-small fw-medium">Dầu cá, Omega 3, DHA</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/tpcn_vitamin_c_cac_loai.png" alt="#">
                                    <span class="text-black text-small fw-medium">Vitamin C các loại</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/bo_sung_sat_axit_folic.png" alt="#">
                                    <span class="text-black text-small fw-medium">Bổ sung Sắt & Axit Folic</span>
                                </a>
                            </div>
                            <div class="col-3p75 product-mini py-3">
                                <a class="text-decoration-none" ref="#">
                                    <img src="dist/img/show-more-dot-icon.svg" alt="#">
                                    <span class="text-black text-small fw-medium">Xem thêm</span>
                                </a>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-auto pe-0 text-center d-inline-flex">
                                <p class="fw-semibold text-medium ms-2">Bán chạy nhất</p>
                                <p class="mx-2 text-gray-light">|</p>
                                <a class="text-decoration-none text-blue text-small" href="#">Xem tất cả</a>
                            </div>
                        </div>
                        <div class="row justify-content-evenly">
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09006.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên nang mềm NatureCare Omega 369 bổ sung Omega, giảm nguy cơ xơ vữa động mạch (6 vỉ x 20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">484.500đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Hộp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through">570.000đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_0958.png" alt="">
                                    </div> 
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên uống Precare Mama Diamond cung cấp các vitamin, khoáng chất cho phụ nữ mang thai (30 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">157.250đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Hộp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through">185.000đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09365.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Kids Multivitamins Plus Calcium & D3 hương dưa hấu giúp bổ sung calci và vitamin cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">146.000đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09335.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Daily Vitamins Plus Biotin & Ginseng hương cam giúp bổ sung vitamin cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">126.500đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                            <div class="col-2 product-short pe-0">
                                <div class="bg-white px-2 rounded-4">
                                    <div class="row">
                                        <div class="col-3 p-0 ms-1">
                                            <span class="product-discount text-small-2 invisible">-15%</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <img class="rounded-5" src="dist/img/DSC_09324.png" alt="">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <a class="text-decoration-none product-link" href="#"><h6 class="text-small text-black fw-medium">Viên sủi Kudos Vitamin C 1000mg hương chanh giúp bổ sung vitamin C cho cơ thể (20 viên)</h6></a>
                                </div>
                                <div class="row d-inline-block">
                                    <span class="text-small text-blue fw-semibold pe-0">113.000đ</span>
                                    <span class="text-small-3 text-blue fw-semibold ps-0">/ Tuýp</span>
                                </div>
                                <div class="row">
                                    <span class="text-gray text-small-2 fw-normal text-decoration-line-through invisible">126.500đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link text-black d-inline-flex border-bottom my-nav px-0" href="#">
                <span class="menu-item fw-medium text-small">Tiêm chủng</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-black d-inline-flex border-bottom my-nav px-0" href="#">
                <span class="menu-item fw-medium text-small">Bệnh</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-black d-inline-flex border-bottom my-nav px-0" href="#">
                <span class="menu-item fw-medium text-small">Góc sức khỏe</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-black d-inline-flex border-bottom my-nav px-0" href="#">
                <span class="menu-item fw-medium text-small">Hệ thống nhà thuốc</span>
            </a>
        </li>
    </ul>
</div>
</nav>`
