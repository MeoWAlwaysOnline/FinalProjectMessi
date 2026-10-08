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