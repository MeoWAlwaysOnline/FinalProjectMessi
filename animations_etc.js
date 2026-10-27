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
let cards = document.querySelectorAll(".products__cards-item");
let closeIcon = document.querySelector(".modal__close-icon");

let modalTitle = modalBack.querySelector(".modal__text-title");
let modalPrice = modalBack.querySelector(".modal__text-price");
let modalImg = modalBack.querySelector(".modal__content > img");
let modalSuptitle = modalBack.querySelector(".modal__text-suptitle");

let getPlusButton = document.querySelector(".modal_chooseQuantity-plus");
let getMinusButton = document.querySelector(".modal_chooseQuantity-minus");
let getCounter = document.querySelector(".modal__chooseQuantity-counter");

let CounterValue = 1;
let basePriceValue = 0;

function updatePrice() {
    if (!modalPrice) return;
    let totalPrice = basePriceValue * CounterValue;
    modalPrice.textContent = `${totalPrice} ₴`;
}

if (getPlusButton && getCounter) {
    getPlusButton.addEventListener("click", () => {
        if (CounterValue < 10) {
            CounterValue++;
            getCounter.textContent = CounterValue;
            updatePrice();
        }
    });
}

if (getMinusButton && getCounter) {
    getMinusButton.addEventListener("click", () => {
        if (CounterValue > 1) {
            CounterValue--;
            getCounter.textContent = CounterValue;
            updatePrice();
        }
    });
}

cards.forEach(card => {
    card.addEventListener("click", () => {
        let nameEl = card.querySelector(".item__name");
        let categoryEl = card.querySelector(".item__category");
        let priceEl = card.querySelector(".item__price");
        let imgEl = card.querySelector(".item__img");

        let text1 = nameEl ? nameEl.innerText : "";
        let text2 = categoryEl ? categoryEl.innerText : "";

        let titleText = text1.length > text2.length ? text1 : text2;
        let categoryText = text1.length > text2.length ? text2 : text1;
        let productImage = imgEl.src;

        basePriceValue = parseInt(priceEl.innerText.replace(/\s+/g, ""));

        CounterValue = 1;
        getCounter.textContent = CounterValue;
        updatePrice();

        modalTitle.innerText = titleText;
        modalImg.src = productImage;
        modalSuptitle.innerText = "URBN · " + categoryText;
        modalBack.style.display = "flex";
        modal.style.display = "flex";
    });
});

closeIcon.addEventListener("click", closeModal);
modalBack.addEventListener("click", (e) => {
    if (e.target === modalBack) {
        closeModal();
    }
});

function closeModal() {
    modalBack.style.display = "none";
    modal.style.display = "none";
    CounterValue = 1;
    getCounter.textContent = "1";
}
