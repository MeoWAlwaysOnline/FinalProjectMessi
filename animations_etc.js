let getSwitcher = document.querySelector(".isInStock2");
let getCircleSwitch = document.querySelector(".filter__sort-div-circle");
if (getSwitcher && getCircleSwitch) {
    getSwitcher.addEventListener("change", () => {
        if (getSwitcher.checked) {
            getCircleSwitch.style.transform = "translateX(25px)";
            getCircleSwitch.style.backgroundColor = "#12fb0a";
        } else {
            getCircleSwitch.style.transform = "translateX(0)";
            getCircleSwitch.style.backgroundColor = "#FFFFFF";
        }
    });
}

let modalBack = document.querySelector(".modal-back");
let modal = document.querySelector(".modal");
let cards = document.querySelectorAll('.products__cards-item');
let closeIcon = document.querySelector('.modal__close-icon');

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('.item__button')) {
            return;
        }

        let nameEl = card.querySelector('.item__name');
        let categoryEl = card.querySelector('.item__category');
        let priceEl = card.querySelector('.item__price');
        let imgEl = card.querySelector('.item__img');

        if (!priceEl || !imgEl) {
            return;
        }

        let text1 = nameEl ? nameEl.innerText : "";
        let text2 = categoryEl ? categoryEl.innerText : "";

        let titleText = text1.length > text2.length ? text1 : text2;
        let categoryText = text1.length > text2.length ? text2 : text1;

        let productPrice = priceEl.innerText;
        let productImage = imgEl.src;

        let modalTitle = modalBack.querySelector('.modal__text-title');
        let modalPrice = modalBack.querySelector('.modal__text-price');
        let modalImg = modalBack.querySelector('.modal__content > img');
        let modalSuptitle = modalBack.querySelector('.modal__text-suptitle');

        if (modalTitle) {
            modalTitle.innerText = titleText;
        }

        if (modalPrice) {
            modalPrice.innerText = productPrice;
        }

        if (modalImg) {
            modalImg.src = productImage;
        }

        if (modalSuptitle && categoryText) {
            modalSuptitle.innerText = "URBN · " + text2;
        }

        if (modalBack) {
            modalBack.style.display = "flex";
        }

        if (modal) {
            modal.style.display = "flex";
        }
    });
});

let getPlusButton = document.querySelector(".modal_chooseQuantity-plus");
let getMinusButton = document.querySelector(".modal_chooseQuantity-minus");
let getCounter = document.querySelector(".modal__chooseQuantity-counter");
let CounterValue = 1;

if (getCounter) {
    getCounter.textContent = CounterValue;
}

if (getPlusButton) {
    getPlusButton.addEventListener("click", () => {
        if (CounterValue !== 10) {
            CounterValue = CounterValue + 1;
        }
        if (getCounter) getCounter.textContent = CounterValue;
    });
}

if (getMinusButton) {
    getMinusButton.addEventListener("click", () => {
        if (CounterValue > 1) {
            CounterValue = CounterValue - 1;
        }
        if (getCounter) {
            getCounter.textContent = CounterValue;
        }
    });
}

if (closeIcon) {
    closeIcon.addEventListener('click', () => {
        if (modalBack) modalBack.style.display = 'none';
        if (modal) {
            modal.style.display = 'none';
        }
    });
}

if (modalBack) {
    modalBack.addEventListener('click', (e) => {
        if (e.target === modalBack) {
            modalBack.style.display = 'none';
            if (modal) {
                modal.style.display = 'none';
            }
        }
    });
}