// Header mob
const headerBars = document.querySelector('.header_bars');
const headerNav = document.querySelector('.header_mob');
const body = document.body;

headerBars.addEventListener('click', () => {
    headerBars.classList.toggle('active');
    headerNav.classList.toggle('active');

    if (headerBars.classList.contains('active')) {
        // Scrollni o'chirish
        body.style.overflow = 'hidden';
    } else {
        // Scrollni qayta yoqish
        body.style.overflow = '';
    }
});

// Search modal
const headSearch = document.querySelector('.header_search');
const searchModal = document.querySelector('.search_modal');

headSearch.addEventListener('click', (event) => {
    event.stopPropagation();
    headSearch.classList.toggle('active');
    searchModal.classList.toggle('active');
});
document.addEventListener('click', (event) => {
    if (!headSearch.contains(event.target) && !searchModal.contains(event.target)) {
        headSearch.classList.remove('active');
        searchModal.classList.remove('active');
    }
});

// Basket modal
const basketModalOpen = document.querySelectorAll('.basketModalOpen');
const basketModal = document.querySelector('.basket_modal-wrap');
const basketModalBg = document.querySelector('.basket_modal-bg');

basketModalOpen.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        basketModal.classList.toggle('active');
    });
});

basketModalBg.addEventListener('click', () => {
    basketModal.classList.remove('active');
})

document.addEventListener('click', (event) => {
    if (![...basketModalOpen].some(button => button.contains(event.target)) && !basketModal.contains(event.target)) {
        basketModalOpen.forEach(button => button.classList.remove('active')); 
        basketModal.classList.remove('active');
    }
});


// Basket modal card delete
document.querySelectorAll('.modalCardDelete').forEach(button => {
    button.addEventListener('click', () => {
        const basketCard = button.closest('.basket_modal-card');
        if (basketCard) {
            basketCard.style.display = 'none';
        }
    });
});


// Accordion
document.querySelectorAll('.accordion_head').forEach((accordion) => {
    accordion.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            document.querySelectorAll('.accordion_head').forEach((item) => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // More galery
    const moreBtn = document.querySelector('.galery_more-btn');
    const noneCards = document.querySelectorAll('.none-card');

    moreBtn?.addEventListener('click', () => {
        noneCards.forEach(card => {
            card.classList.remove('none-card');
        });

        moreBtn.style.display = 'none';
    });

    // Catalog card none
    const infoBtn = document.querySelector('.catalog_info-btn');
    const newCards = document.querySelectorAll('.new_card');

    let cardNoneElements = Array.from(newCards).filter(card => card.classList.contains('card-none'));

    infoBtn?.addEventListener('click', () => {
        cardNoneElements.forEach(card => {
            card.classList.toggle('card-none');
        });
    });

    // Like active
    const likeTabs = document.querySelectorAll('.like');
    likeTabs.forEach(likeTab => {
        likeTab.addEventListener('click', () => {
            likeTab.classList.toggle('active');
        });
    });

    // Calc function
    const calcItems = document.querySelectorAll('.calc_item');

    calcItems.forEach(calcItem => {
        const minusButton = calcItem.querySelector('.minus-btn');
        const plusButton = calcItem.querySelector('.plus-btn');
        const calcTotal = calcItem.querySelector('.calc_total');

        // Minus button click event
        minusButton.addEventListener('click', () => {
            let currentValue = parseInt(calcTotal.textContent);
            if (currentValue > 0) {
                calcTotal.textContent = currentValue - 1;
            }
        });

        // Plus button click event
        plusButton.addEventListener('click', () => {
            let currentValue = parseInt(calcTotal.textContent);
            calcTotal.textContent = currentValue + 1;
        });
    });


    // Get all tabs and values
    try {
        let tabs = document.querySelectorAll('[id^="personalTab"]');
        let tabsMob = document.querySelectorAll('[id^="personalTabMob"]');
        let values = document.querySelectorAll('[id^="personalValue"]');
        let personalMobTabs = document.querySelector('.personal_mob-tabs');
        const personalMobBtn = document.querySelector('.personal_mob-btn');
        const personalMobBtnSpan = personalMobBtn.querySelector('span'); // Assuming there's a span inside .personal_mob-btn
        function clearActiveClasses() {
            tabs.forEach(tab => tab.classList.remove('active'));
            tabsMob.forEach(tab => tab.classList.remove('active'));
            values.forEach(value => value.classList.remove('active'));
        }
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', function () {
                clearActiveClasses();
                tab.classList.add('active');
                values[index].classList.add('active');
            });
        });
        tabsMob.forEach((tab, index) => {
            tab.addEventListener('click', function () {
                clearActiveClasses();
                tab.classList.add('active');
                values[index].classList.add('active');
                personalMobTabs.classList.remove('active');
                personalMobBtn.classList.remove('active');
                // Set the textContent of the clicked tab into the span inside .personal_mob-btn
                personalMobBtnSpan.textContent = tab.textContent;
            });
        });
        // Personal Mob tabs
        personalMobBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            personalMobTabs.classList.toggle('active');
        });
    } catch (error) { }


    // Select all delete buttons
    const deleteButtons = document.querySelectorAll('.backet_delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const backetCard = button.closest('.backet_card');
            const backetItem = button.closest('.backet_item');

            if (backetCard) {
                backetCard.style.display = 'none';
            } else if (backetItem) {
                backetItem.style.display = 'none';
            }
        });
    });


    // More review
    try {
        const moreReviewButtons = document.querySelectorAll('.more_review');
        moreReviewButtons.forEach(button => {
            button.addEventListener('click', () => {
                const span = button.querySelector('span');
                const parentText = button.closest('.customers_info-texts'); // Get the closest parent container
                const textsNone = parentText.querySelector('.texts_none'); // Find the specific texts_none inside the same container

                if (button.classList.contains('active')) {
                    button.classList.remove('active');
                    span.textContent = 'читать отзыв';
                    textsNone.style.display = 'none';
                } else {
                    button.classList.add('active');
                    span.textContent = 'скрыть отзыв';
                    textsNone.style.display = 'flex';
                }
            });
        });

    } catch (error) { }

    // More video
    try {
        const moreVideoBtns = document.querySelectorAll('.video_more');
        const moreVideoNone = document.querySelectorAll('.video-none');
        moreVideoBtns.forEach(button => {
            button.addEventListener('click', () => {
                moreVideoNone.forEach(video => {
                    video.style.display = 'flex';
                })
                button.style.display = 'none';
            });
        });

    } catch (error) { }



    // Filter active
    const filterBtn = document.querySelector('.filter_btn');
    const dishesTabs = document.querySelector('.dishes_tabs');

    filterBtn.addEventListener('click', () => {
        filterBtn.classList.toggle('active');
        dishesTabs.classList.toggle('active');
    });

});


document.addEventListener('click', function (event) {
    // Filter Select
    const filtersTabs = document.querySelectorAll('.filters_tabs .filters_tab');
    const filtersTabValues = document.querySelectorAll('.filters_tabs .filters_tab-value');

    filtersTabs.forEach((tab, index) => {
        const value = filtersTabValues[index];

        if (tab.contains(event.target)) {
            tab.classList.toggle('active');
            value.classList.toggle('active');
        } else if (value.contains(event.target)) {
            const selectedValue = event.target.textContent;

            tab.querySelector('span').textContent = selectedValue;

            value.querySelectorAll('span').forEach((span) => {
                span.classList.remove('active');
            });

            event.target.classList.add('active');

            tab.classList.remove('active');
            value.classList.remove('active');
        } else {
            tab.classList.remove('active');
            value.classList.remove('active');
        }
    });


    // Select filter
    const catalogTab = document.querySelector('.catalog_select-tab');
    const catalogValue = document.querySelector('.catalog_select-value');

    if (catalogTab.contains(event.target)) {
        catalogTab.classList.toggle('active');
        catalogValue.classList.toggle('active');
    } else if (catalogValue.contains(event.target)) {
        const selectedValue = event.target.textContent;

        catalogTab.querySelector('span').textContent = selectedValue;

        catalogValue.querySelectorAll('span').forEach((span) => {
            span.classList.remove('active');
        });

        event.target.classList.add('active');

        catalogTab.classList.remove('active');
        catalogValue.classList.remove('active');
    } else {
        catalogTab.classList.remove('active');
        catalogValue.classList.remove('active');
    }


    // Select all the delete buttons
    const deleteButtons = document.querySelectorAll('.delete_value');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentDiv = button.closest('.filters_value');
            parentDiv.style.display = 'none';
        });
    });
    const allDeleteButton = document.getElementById('allDelete');
    allDeleteButton.addEventListener('click', () => {
        const allFilters = document.querySelector('.filters_values');
        allFilters.style.display = 'none';
    });

});




// homeSlide
var homeSlide = new Swiper(".homeSlide", {
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
    },
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// photoSlide
var photoSlide = new Swiper(".photoSlide", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    loopAdditionalSlides: 1,
    navigation: {
        nextEl: ".slider_block .swiper-button-next",
        prevEl: ".slider_block .swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 11,
            centeredSlides: true,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 11,
        },
        776: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    }
});

// newSlider
var newSlider = new Swiper(".newSlider", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    loopAdditionalSlides: 1,
    navigation: {
        nextEl: ".new_slider .swiper-button-next",
        prevEl: ".new_slider .swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
        },
        576: {
            slidesPerView: 2,
        },
        776: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        }
    }
});

var newSlider2 = new Swiper(".newSlider2", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    loopAdditionalSlides: 1,
    navigation: {
        nextEl: ".new_slider2 .swiper-button-next",
        prevEl: ".new_slider2 .swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 2,
        },
        776: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        }
    }
});

var newSlider3 = new Swiper(".newSlider3", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    loopAdditionalSlides: 1,
    navigation: {
        nextEl: ".new_slider3 .swiper-button-next",
        prevEl: ".new_slider3 .swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 2,
        },
        776: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        }
    }
});

// catalogSlider
var catalogSlider = new Swiper(".catalogSlider", {
    slidesPerView: 5,
    spaceBetween: 47,
    loop: true,
    navigation: {
        nextEl: ".catalog_slider-wrap .swiper-button-next",
        prevEl: ".catalog_slider-wrap .swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 47,
        }
    }
});

// bannerSlide
var bannerSlide = new Swiper(".bannerSlide", {
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
    },
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
    },
});

// reviewsSlider
var reviewsSlider = new Swiper(".reviewsSlider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".review_slider .swiper-button-next",
        prevEl: ".review_slider .swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});

// Product slider
var productSlider = new Swiper(".productSlider", {
    spaceBetween: 10,
    slidesPerView: 4.5,
    freeMode: true,
    breakpoints: {
        300: {
            direction: 'horizontal',
            slidesPerView: 4.2,
        },
        1200: {
            direction: 'vertical',
            watchSlidesProgress: true,
        }
    }
});
var productSlider2 = new Swiper(".productSlider2", {
    spaceBetween: 10,
    thumbs: {
        swiper: productSlider,
    },
});


document.addEventListener('DOMContentLoaded', function () {

    // Elementlarni olish
    const productShareTab = document.querySelector('.shareCopy');
    const productCopy = document.querySelector('.product_copy');
    const copyClose = document.querySelector('.copy_close');
    const productShareBg = document.querySelector('.product_copy-bg');
    const productCopyBtn = document.querySelector('.product_copy-btn');
    const copyLink = document.querySelector('.product_copy-info span');
    productShareTab.addEventListener('click', () => {
        productCopy.classList.add('active');
    });
    copyClose.addEventListener('click', () => {
        productCopy.classList.remove('active');
    });
    productShareBg.addEventListener('click', () => {
        productCopy.classList.remove('active');
    });
    productCopyBtn.addEventListener('click', () => {
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = copyLink.textContent;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        productCopy.classList.remove('active');
    });


    // Imask phone
    let phoneInputs = document.querySelectorAll('.phone-inp');
    function applyMask(input) {
        let maskOptions = {
            mask: '+7 (***) ***-**-**',
            lazy: false
        };

        input.placeholder = '+7 (***) ***-**-**';

        input.addEventListener('focus', function () {
            new IMask(input, maskOptions);
        });
    }
    phoneInputs.forEach(function (phoneInp) {
        applyMask(phoneInp);
    });

    // Imask date
    let dateInput = document.getElementById('dateInp');
    let maskOptions = {
        mask: Date,
        pattern: 'd{.}`m{.}`Y', // Pattern for the date format
        lazy: false, // Show the mask by default
        blocks: {
            d: { mask: IMask.MaskedRange, from: 1, to: 31 },
            m: { mask: IMask.MaskedRange, from: 1, to: 12 },
            Y: { mask: IMask.MaskedRange, from: 1900, to: 9999 }
        },
        format: function (date) {
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return [day, month, year].map(v => String(v).padStart(2, '0')).join('.');
        },
        parse: function (str) {
            let dayMonthYear = str.split('.');
            return new Date(dayMonthYear[2], dayMonthYear[1] - 1, dayMonthYear[0]);
        }
    };
    let maskedDate = IMask(dateInput, maskOptions);
    maskedDate.value = "24.07.2020";
});


// Get elements
const dropdownButton = document.getElementById('catalogButton');
const dropdownContent = document.getElementById('menu');
const closeButton = document.getElementById('closeButton');

// Toggle the menu when Каталог is clicked
dropdownButton.addEventListener('click', function () {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none'; // Hide menu if already shown
    } else {
        dropdownContent.style.display = 'block'; // Show menu if hidden
    }
});

// Hide the menu when Close button is clicked
closeButton.addEventListener('click', function () {
    dropdownContent.style.display = 'none';
});

// Optional: Click outside to close the menu
window.addEventListener('click', function (e) {
    if (!dropdownButton.contains(e.target) && !dropdownContent.contains(e.target)) {
        dropdownContent.style.display = 'none'; // Hide the menu if clicked outside
    }
});


// Get elements
const dropdownButton3 = document.getElementById('catalogButton3');
const dropdownContent3 = document.getElementById('menu3');
const closeButton3 = document.getElementById('closeButton3');

// Toggle the menu when Каталог is clicked
dropdownButton3.addEventListener('click', function () {
    if (dropdownContent3.style.display === 'block') {
        dropdownContent3.style.display = 'none'; // Hide menu if already shown
    } else {
        dropdownContent3.style.display = 'block'; // Show menu if hidden
    }
});

// Hide the menu when Close button is clicked
closeButton3.addEventListener('click', function () {
    dropdownContent3.style.display = 'none';
});

// Optional: Click outside to close the menu
window.addEventListener('click', function (e) {
    if (!dropdownButton3.contains(e.target) && !dropdownContent3.contains(e.target)) {
        dropdownContent3.style.display = 'none'; // Hide the menu if clicked outside
    }
});


// Get elements
const dropdownButton1 = document.getElementById('catalogButton1');
const dropdownContent1 = document.getElementById('menu1');
const closeButton1 = document.getElementById('closeButton1');

// Toggle the menu when Каталог is clicked
dropdownButton1.addEventListener('click', function () {
    if (dropdownContent1.style.display === 'block') {
        dropdownContent1.style.display = 'none'; // Hide menu if already shown
    } else {
        dropdownContent1.style.display = 'block'; // Show menu if hidden
    }
});

// Hide the menu when Close button is clicked
closeButton1.addEventListener('click', function () {
    dropdownContent1.style.display = 'none';
});

// Optional: Click outside to close the menu
window.addEventListener('click', function (e) {
    if (!dropdownButton1.contains(e.target) && !dropdownContent1.contains(e.target)) {
        dropdownContent1.style.display = 'none'; // Hide the menu if clicked outside
    }
});



// Get elements
const dropdownButton4 = document.getElementById('catalogButton4');
const dropdownContent4 = document.getElementById('menu4');
const closeButton4 = document.getElementById('closeButton4');

// Toggle the menu when Каталог is clicked
dropdownButton4.addEventListener('click', function () {
    if (dropdownContent4.style.display === 'block') {
        dropdownContent4.style.display = 'none'; // Hide menu if already shown
    } else {
        dropdownContent4.style.display = 'block'; // Show menu if hidden
    }
});

// Hide the menu when Close button is clicked
closeButton4.addEventListener('click', function () {
    dropdownContent4.style.display = 'none';
});

// Optional: Click outside to close the menu
window.addEventListener('click', function (e) {
    if (!dropdownButton4.contains(e.target) && !dropdownContent4.contains(e.target)) {
        dropdownContent4.style.display = 'none'; // Hide the menu if clicked outside
    }
});