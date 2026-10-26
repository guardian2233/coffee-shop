let orderBtn = document.querySelector("#order-btn");
let orderMsg = document.querySelector("#order-msg");


orderBtn.addEventListener("click", function () {

    orderMsg.textContent = "Thanks! Your order is on the way.";
});