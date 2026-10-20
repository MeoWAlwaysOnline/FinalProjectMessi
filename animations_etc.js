// switcher
let getSwitcher = document.querySelector(".isInStock2");
let getCircleSwitch = document.querySelector(".filter__sort-div-circle");
getSwitcher.addEventListener("change", () => {
    if (getSwitcher.checked) {
        getCircleSwitch.style.transform = "translateX(25px)"; 
        getCircleSwitch.style.backgroundColor = "#12fb0a"
    } else {
        getCircleSwitch.style.transform = "translateX(0)";
        getCircleSwitch.style.backgroundColor = "#FFFFFF"
    }
});

// modal
let getModalBack = document.querySelector(".modal-back");
let getModal = document.querySelector(".modal");
let getButton = document.querySelectorAll(".open__modal-test");
let getClose = document.querySelector(".modal__close-icon");

getButton.forEach(button =>{
    button.addEventListener("click", () => {
        getModalBack.style.display = "flex";
        getModal.style.display = "flex";
    });
})

getClose.addEventListener("click", () => {
    getModalBack.style.display = "none";
    getModal.style.transform = "none"
})

// add and subtract
let getPlusButton = document.querySelector(".modal_chooseQuantity-plus");
let getMinusButton = document.querySelector(".modal_chooseQuantity-minus");
let getCounter = document.querySelector(".modal__chooseQuantity-counter");
let CounterValue = 1;
getCounter.textContent = CounterValue;

getPlusButton.addEventListener("click", () => {
    if (CounterValue !== 10) {
        CounterValue = CounterValue + 1;
    }
    getCounter.textContent = CounterValue;
})

getMinusButton.addEventListener("click", () => {
    if (CounterValue > 0) {
        CounterValue = CounterValue - 1;
    }
    getCounter.textContent = CounterValue;
})