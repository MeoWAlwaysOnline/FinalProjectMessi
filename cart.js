const cartButton = document.querySelector(".search__cart");
const cart = document.querySelector(".cart");
const closeButton = document.querySelector(".cart__close");

cartButton.addEventListener("click", () => {
    cart.classList.add("active");
});

closeButton.addEventListener("click", () => {
    cart.classList.remove("active");
});