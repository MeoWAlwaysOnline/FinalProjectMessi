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
let getButton = document.querySelector(".open__modal-test");
let getClose = document.querySelector(".modal__close-icon");

getButton.addEventListener("click", () => {
    getModalBack.style.display = "flex";
    getModal.style.display = "flex";
})

getClose.addEventListener("click", () => {
    getModalBack.style.display = "none";
    getModal.style.transform = "none"
})