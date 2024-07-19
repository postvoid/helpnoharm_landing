const swiper2 = new Swiper('.swiper2', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    }
});

function toggleAccordion(index) {
    const content = document.querySelectorAll('.accordion-content')[index];
    const maxHeight = content.style.maxHeight;

    document.querySelectorAll('.accordion-content').forEach((el, i) => {
        if (i != index) {
            el.style.maxHeight = null;
        }
    });

    if (maxHeight === '0px' || maxHeight === '') {
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        content.style.maxHeight = null;
    }
}


// PROGRAM

const tabs = document.querySelectorAll("#operations__tab");
const tabsContainer = document.querySelector("#operations__tab-container");
const tabsContent = document.querySelectorAll("#operations__content");

tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest("#operations__tab");

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach((t) =>
        t.classList.remove(
            "-translate-y-1/4",
            "font-semibold",
            "bg-rose-500"
        )
    );
    tabs.forEach((t) =>
        t.classList.add(
            "bg-rose-200",
            "hover:bg-rose-400",
            "text-black1"
        )
    );
    tabsContent.forEach((c) =>
        c.classList.remove("operations__content--active")
    );

    // Activate tab
    clicked.classList.add("-translate-y-1/4");

    // Activate content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add("operations__content--active");
    document
        .querySelector(`.operations__tab--${clicked.dataset.tab}`)
        .classList.remove(
            "bg-rose-200",
            "hover:bg-rose-400",
            "text-black1"
        );
    document
        .querySelector(`.operations__tab--${clicked.dataset.tab}`)
        .classList.add("font-semibold", "bg-rose-500", "text-white");
});