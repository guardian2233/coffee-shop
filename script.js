let orderBtn = document.querySelector("#order-btn");
let orderMsg = document.querySelector("#order-msg");


orderBtn.addEventListener("click", function ()  {

    orderMsg.textContent = "Thanks! Your order is on the way.";

    setTimeout(function () {

        orderMsg.textContent = "";
    }, 3000);
});


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