let orderBtn = document.querySelector("#order-btn");
let orderMsg = document.querySelector("#order-msg");

orderBtn.addEventListener("click", function () {
  orderMsg.textContent = "Thanks! Your order is on the way.";

  setTimeout(function () {
    orderMsg.textContent = "";
  }, 3000);
});

let list = document.querySelector("#list");
let drinks = ["Latte", "Mocha", "Espresso"];

for (let i = 0; i < drinks.length; i++) {
  let item = document.createElement("p");
  item.textContent = drinks[i];
  list.appendChild(item);
}

let menuItems = [
  {
    name: "Cappuccino",
    desc: "Rich espresso with steamed milk foam",
    price: 180,
  },
  {
    name: "Cold Coffee",
    desc: "Chilled coffee blended with ice cream",
    price: 200,
  },
  {
    name: "Café Latte",
    desc: "Smooth espresso with lots of creamy milk.",
    price: 190,
  },
  {
    name: "Chocolate Croissant",
    desc: "Buttery, flaky and filled with chocolate",
    price: 150,
  },
];

let grid = document.querySelector(".menu-grid");
for (let i = 0; i < menuItems.length; i++) {
  let card = document.createElement("div");
  card.classList.add("menu-card");

  card.innerHTML =
    "<h3>" +
    menuItems[i].name +
    "</h3>" +
    "<p>" +
    menuItems[i].desc +
    "</p>" +
    "<span class='price'>₹" +
    menuItems[i].price +
    "</span>";

  grid.appendChild(card);
}
// setTimeout(function () {

//     orderMsg.classList.add("hide");
// })

// button.addEventListener("click", function () {
//   message.textContent = "Thanks!";
//   setTimeout(function () {
//     message.textContent = "";
//   }, 3000);
// });

// console.log("Thanks your order is on the way");
// setTimeout(function () {

//     console.log ("");
// }, 3000);

// console.log("1. Order placed");
// setTimeout(function () {
//   console.log("3. Coffee ready!");
// }, 2000);
// console.log("2. Waiting...");
