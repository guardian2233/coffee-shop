let orderBtn = document.querySelector("#order-btn");
let orderMsg = document.querySelector("#order-msg");


orderBtn.addEventListener("click", function ()  {

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