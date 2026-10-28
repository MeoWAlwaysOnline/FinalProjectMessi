let cardsData = [
    // shoes
    {img: "./src/images/Vortex_runner.jpg", category: "Кросівки", name: "Кросівки Vortex Runner", price: 2399, isInStock: true},
    {img: "./src/images/Midnight_Court.jpg", category: "Кросівки", name: "Кросівки Midnight Court", price: 1899, isInStock: true},
    {img: "./src/images/Lime_Pulse.jpg", category: "Кросівки", name: "Кросівки Lime Pulse", price: 2199, isInStock: false},
    {img: "./src/images/Steel_Frame.jpg", category: "Кросівки", name: "Кросівки Steel Frame", price: 2650, isInStock: true},
    // hoodies
    {img: "./src/images/Худі_Blockletter.jpg", category: "Худі", name: "Худі Blockletter", price: 1450, isInStock: true},
    {img: "./src/images/Худі_Cloudwash.jpg", category: "Худі", name: "Худі Cloudwash", price: 1590, isInStock: true},
    {img: "./src/images/Худі_Night_Signal.jpg", category: "Худі", name: "Худі Night Signal", price: 1690, isInStock: false},
    {img: "./src/images/Худі_Concrete.jpg", category: "Худі", name: "Худі Concrete", price: 1380, isInStock: true},
    // caps
    {img: "./src/images/Кепка_Low_Arc.jpg", category: "Кепки", name: "Кепка Low Arc", price: 599, isInStock: true},
    {img: "./src/images/Кепка_Fieldwork.jpg", category: "Кепки", name: "Кепка Fieldwork", price: 649, isInStock: true},
    {img: "./src/images/Кепка_Nightshade.jpg", category: "Кепки", name: "Кепка Nightshade", price: 620, isInStock: false},
    {img: "./src/images/Кепка_Sunline.jpg", category: "Кепки", name: "Кепка Sunline", price: 549, isInStock: true},
    // tshirts
    {img: "./src/images/Футболка_Base_Tee.jpg", category: "Футболки", name: "Футболка Base Tee", price: 490, isInStock: true},
    {img: "./src/images/Футболка_Blockprint.jpg", category: "Футболки", name: "Футболка Blockprint", price: 590, isInStock: true},
    {img: "./src/images/Футболка_Skyline.jpg", category: "Футболки", name: "Футболка Skyline", price: 540, isInStock: false},
    {img: "./src/images/Футболка_Mono_Logo.jpg", category: "Футболки", name: "Футболка Mono Logo", price: 470, isInStock: true},
];

let section = document.querySelector(".products__cards");

function cardsAdd() {
cardsData.forEach(card => {
    // card
    let article = document.createElement("article");
    article.classList.add("products__cards-item", "open__modal-test");

    // card block with text
    let divTxt = document.createElement("div");

    // content
    let img = document.createElement("img");
    img.className = "item__img";
    let category = document.createElement("h3");
    category.className = "item__category"
    let name = document.createElement("p");
    name.className = "item__name";
    let price = document.createElement("span");
    price.className = "item__price";
    let button = document.createElement("button");
    button.className = "item__button";
    if (card.isInStock === true) {
        button.textContent = "У кошик";
    } else {
        button.textContent = "Немає у наявності";
    }
    

    // fill
    img.src = card.img;
    category.textContent = card.category;
    name.textContent = card.name;
    price.textContent = `${card.price} ₴`;

    // append
    divTxt.append(category, name, price, button);
    article.append(img, divTxt);
    section.appendChild(article);
});
}
cardsAdd();

function deleteCards() {
    section.innerHTML = "";
}


// switcher
let getSwitcher = document.querySelector(".isInStock2");
let getCircleSwitch = document.querySelector(".filter__sort-div-circle");
if (getSwitcher && getCircleSwitch) {
    getSwitcher.addEventListener("change", () => {
        let cards = document.querySelectorAll(".products__cards-item");

        if (getSwitcher.checked) {
            getCircleSwitch.style.transform = "translateX(25px)";
            getCircleSwitch.style.backgroundColor = "#30ff25";
            cardsData.forEach((card, index) => {
                if (card.isInStock === false) {
                    cards[index].style.display = "none";
                }
            });
        } else {
            getCircleSwitch.style.transform = "translateX(0)";
            getCircleSwitch.style.backgroundColor = "#FFFFFF";
            cards.forEach(card => {
                card.style.display = "";
            });
        }
    });
}

// filter
let getFilterAll = document.getElementById("filter__all");
let getFilterShoes = document.getElementById("filter__shoes");
let getFilterHoodies = document.getElementById("filter__hoodies");
let getFilterCaps = document.getElementById("filter__caps");
let getFilterTshirts = document.getElementById("filter__tshirts");
// buttons events
// all
getFilterAll.addEventListener("click", () => {
    let cards = document.querySelectorAll(".products__cards-item");
    // color change (i know i made it so stupid way)
    getFilterAll.style.backgroundColor = "#FFFFFF";
    getFilterAll.style.color = "#000000";
    getFilterShoes.style.backgroundColor = "inherit";
    getFilterShoes.style.color = "#A3A3AB";
    getFilterHoodies.style.backgroundColor = "inherit";
    getFilterHoodies.style.color = "#A3A3AB";
    getFilterCaps.style.backgroundColor = "inherit";
    getFilterCaps.style.color = "#A3A3AB";
    getFilterTshirts.style.backgroundColor = "inherit";
    getFilterTshirts.style.color = "#A3A3AB";
    // color change (i know i made it so stupid way)
    cards.forEach(card => {
        card.style.display = "";
    });
});
// shoes
getFilterShoes.addEventListener("click", () => {
    let cards = document.querySelectorAll(".products__cards-item");
    // color change (i know i made it so stupid way)
    getFilterAll.style.backgroundColor = "inherit";
    getFilterAll.style.color = "#A3A3AB";
    getFilterShoes.style.backgroundColor = "#FFFFFF";
    getFilterShoes.style.color = "#000000";
    getFilterHoodies.style.backgroundColor = "inherit";
    getFilterHoodies.style.color = "#A3A3AB";
    getFilterCaps.style.backgroundColor = "inherit";
    getFilterCaps.style.color = "#A3A3AB";
    getFilterTshirts.style.backgroundColor = "inherit";
    getFilterTshirts.style.color = "#A3A3AB";
    // color change (i know i made it so stupid way)
    cardsData.forEach((card, index) => {
        if (card.category === "Кросівки") {
            cards[index].style.display = "";
        } else {
            cards[index].style.display = "none";
        }
    });
});
// hoodies
getFilterHoodies.addEventListener("click", () => {
    let cards = document.querySelectorAll(".products__cards-item");
    // color change (i know i made it so stupid way)
    getFilterAll.style.backgroundColor = "inherit";
    getFilterAll.style.color = "#A3A3AB";
    getFilterShoes.style.backgroundColor = "inherit";
    getFilterShoes.style.color = "#A3A3AB";
    getFilterHoodies.style.backgroundColor = "#FFFFFF";
    getFilterHoodies.style.color = "#000000";
    getFilterCaps.style.backgroundColor = "inherit";
    getFilterCaps.style.color = "#A3A3AB";
    getFilterTshirts.style.backgroundColor = "inherit";
    getFilterTshirts.style.color = "#A3A3AB";
    // color change (i know i made it so stupid way)
    cardsData.forEach((card, index) => {
        if (card.category === "Худі") {
            cards[index].style.display = "";
        } else {
            cards[index].style.display = "none";
        }
    });
});
// caps
getFilterCaps.addEventListener("click", () => {
    // color change (i know i made it so stupid way)
    getFilterAll.style.backgroundColor = "inherit";
    getFilterAll.style.color = "#A3A3AB";
    getFilterShoes.style.backgroundColor = "inherit";
    getFilterShoes.style.color = "#A3A3AB";
    getFilterHoodies.style.backgroundColor = "inherit";
    getFilterHoodies.style.color = "#A3A3AB";
    getFilterCaps.style.backgroundColor = "#FFFFFF";
    getFilterCaps.style.color = "#000000";
    getFilterTshirts.style.backgroundColor = "inherit";
    getFilterTshirts.style.color = "#A3A3AB";
    // color change (i know i made it so stupid way)
    let cards = document.querySelectorAll(".products__cards-item");
    cardsData.forEach((card, index) => {
        if (card.category === "Кепки") {
            cards[index].style.display = "";
        } else {
            cards[index].style.display = "none";
        }
    });
});
// tshirts
getFilterTshirts.addEventListener("click", () => {
    // color change (i know i made it so stupid way)
    getFilterAll.style.backgroundColor = "inherit";
    getFilterAll.style.color = "#A3A3AB";
    getFilterShoes.style.backgroundColor = "inherit";
    getFilterShoes.style.color = "#A3A3AB";
    getFilterHoodies.style.backgroundColor = "inherit";
    getFilterHoodies.style.color = "#A3A3AB";
    getFilterCaps.style.backgroundColor = "inherit";
    getFilterCaps.style.color = "#A3A3AB";
    getFilterTshirts.style.backgroundColor = "#FFFFFF";
    getFilterTshirts.style.color = "#000000";
    // color change (i know i made it so stupid way)
    let cards = document.querySelectorAll(".products__cards-item");
    cardsData.forEach((card, index) => {
        if (card.category === "Футболки") {
            cards[index].style.display = "";
        } else {
            cards[index].style.display = "none";
        }
    });
});

// price filter
let priceSelector = document.querySelector(".filter__sort-price");
let copyCardsData = [...cardsData];
priceSelector.addEventListener("change", () => {
    switch (priceSelector.value) {
        case "cheap":
            cardsData.sort((a, b) => a.price - b.price);
            deleteCards();
            cardsAdd();
        break;

        case "expensive":
            cardsData.sort((a, b) => b.price - a.price);
            deleteCards();
            cardsAdd();
        break;
    
        case "default":
            cardsData = [...copyCardsData];
            deleteCards();
            cardsAdd();
        break;
    }
});

// reset 
let reset = document.querySelector(".filter__sort-reset");
reset.addEventListener("click", () => {
    let cards = document.querySelectorAll(".products__cards-item");
    getCircleSwitch.style.transform = "translateX(0)";
    getCircleSwitch.style.backgroundColor = "#FFFFFF";
    cards.forEach(card => {
        card.style.display = "";
    });
    // color change (i know i made it so stupid way)
    getFilterAll.style.backgroundColor = "#FFFFFF";
    getFilterAll.style.color = "#000000";
    getFilterShoes.style.backgroundColor = "inherit";
    getFilterShoes.style.color = "#A3A3AB";
    getFilterHoodies.style.backgroundColor = "inherit";
    getFilterHoodies.style.color = "#A3A3AB";
    getFilterCaps.style.backgroundColor = "inherit";
    getFilterCaps.style.color = "#A3A3AB";
    getFilterTshirts.style.backgroundColor = "inherit";
    getFilterTshirts.style.color = "#A3A3AB";
    // color change (i know i made it so stupid way)
    cards.forEach(card => {
        card.style.display = "";
    });
    priceSelector.value = "default";
});