const cartButton = document.querySelector(".search__cart");
const cart = document.querySelector(".cart");
const closeButton = document.querySelector(".cart__close");

cartButton.addEventListener("click", () => {
    cart.classList.add("active");
});

closeButton.addEventListener("click", () => {
    cart.classList.remove("active");
});

let cartItems = [];// сюди складаємо товари кошика

const cartTitle = document.querySelector(".cart__header h2");
const cartEmpty = document.querySelector(".cart__empty");

// створюємо в кошику список товарів
const cartList = document.createElement("div");
cartList.className = "cart__list";
const cartFooter = document.createElement("div");
cartFooter.className = "cart__footer";
cart.append(cartList, cartFooter);

// додати товар у масив
function addToCart(name, price, img, qty) {
    let found = cartItems.find(item => item.name === name);
    if (found) {
        found.qty += qty;// такий товар вже є — збільшуємо кількість
    } else {
        cartItems.push({ name: name, price: price, img: img, qty: qty });
    }
    renderCart();
}

function renderCart() {
    let totalCount = 0;
    let totalPrice = 0;
    cartList.innerHTML = "";

    cartItems.forEach((item, index) => {
        totalCount += item.qty;
        totalPrice += item.price * item.qty;

        let row = document.createElement("div");
        row.className = "cart__item";
        row.innerHTML = `
            <img src="${item.img}" alt="">
            <div class="cart__item-info">
                <p class="cart__item-name">${item.name}</p>
                <p class="cart__item-price">${item.price} ₴ × ${item.qty}</p>
            </div>
            <button class="cart__item-remove" data-index="${index}">×</button>
        `;
        cartList.appendChild(row);
    });

    cartTitle.textContent = `Кошик [${totalCount}]`;
    cartEmpty.style.display = cartItems.length ? "none" : "flex";
    cartFooter.style.display = cartItems.length ? "flex" : "none";
    cartFooter.innerHTML = `
        <div class="cart__total"><span>Разом</span><span>${totalPrice} ₴</span></div>
        <button class="cart__checkout">Оформити замовлення</button>
    `;
}

// видалення товару хрестиком
cartList.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart__item-remove")) {
        cartItems.splice(Number(e.target.dataset.index), 1);
        renderCart();
    }
});

// кнопка у кошик на картці товару
document.querySelectorAll(".item__button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); // щоб не відкривалась модалка
        let card = btn.closest(".products__cards-item");
        if (card.dataset.isInStock === "false") return; // немає в наявності

        let name = card.querySelector(".item__name").innerText;
        let price = parseInt(card.querySelector(".item__price").innerText.replace(/\s+/g, ""));
        let img = card.querySelector(".item__img").src;

        addToCart(name, price, img, 1);
        cart.classList.add("active");
    });
});

// кнопка додати кошик в модалці
document.querySelector(".modal__addToCart").addEventListener("click", () => {
    addToCart(modalTitle.innerText, basePriceValue, modalImg.src, CounterValue);
    closeModal();
    cart.classList.add("active");
});

// кнопка оформити замовлення очищає кошик
cartFooter.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart__checkout")) {
        cartItems = [];          // обнуляємо кошик
        renderCart();
        cart.classList.remove("active");
        alert("Дякуємо, замовлення оформлено");
    }
});

const searchForm = document.querySelector(".search__items");
const searchInput = document.querySelector(".search__items input");
const productsBox = document.querySelector(".products__cards");

const noResults = document.createElement("p");
noResults.className = "products__noresults";
noResults.textContent = "Нічого не знайдено";
noResults.style.display = "none";
productsBox.appendChild(noResults);

searchForm.addEventListener("submit", (e) => e.preventDefault());

searchInput.addEventListener("input", () => {
    let query = searchInput.value.trim().toLowerCase();
    let shown = 0;

    document.querySelectorAll(".products__cards-item").forEach(card => {
        let text = (
            card.querySelector(".item__name").innerText + " " +
            card.querySelector(".item__category").innerText
        ).toLowerCase();

        let match = text.includes(query);
        card.classList.toggle("is-hidden", !match);

        if (match && card.style.display !== "none") shown++;
    });

    noResults.style.display = shown ? "none" : "block";

    if (query) {
        document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    }
});

renderCart();