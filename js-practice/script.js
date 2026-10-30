/*let hour = 23;

if (hour >= 8 && hour < 22) {
  console.log("Open ☕");
} else {
  console.log("Closed");
}


function deliveryMessage(total) {
  if (total >= 500) {
    return "Free delivery";
  } else {
    return "Delivery: ₹40";
  }
}

console.log(deliveryMessage(450));
console.log(deliveryMessage(600));*/





/*let item = "Cappuccino";*/
/*let item = "Latte"
let price = 200;
const isAvailable = true;

console.log(price);

console.log(typeof(item));
console.log(typeof( price));
console.log(typeof( isAvailable));

console.log(item + " costs " +  price) ;

/*console.log(item + " costs ₹" + price);
console.log("Cappuccino cost is", + price );*/




// let age = 25;

// if(age >= 60) {
//     console.log("Senior discount");

// } else if (age >=18){
//     console.log("You can join the coffee workshop");

// } else{
//     console.log("Too young comeback later");
// }



/*


function greet(name) {
  return "Welcome to Espresso, " + name;
}

console.log(greet("Akhil"));
console.log(greet("Obito"));
console.log(greet("Kevin"));*/


// let qty = 4;
// let price = 180;

// function calculateTotal(price, qty) {

//   return price * qty;
// }
// console.log(calculateTotal(180, 4));





// function makeCoffee(bean, milk) {   // bean, milk = PARAMETERS (empty slots)
//   return bean + " coffee with " + milk;   // return = the cup that comes out
// }

// let cup = makeCoffee("Arabica", "oat milk");   // "Arabica", "oat milk" = ARGUMENTS (what you pour in)
// console.log(cup);




// function add (a, b) {
//   return a + b;
// }

// let x = add(2, 3);
// // console.log(x * 2);  
// console.log(a + b);  


/*after add 2, 3 it becomes 5 and the value of x = add (2, 3)*/




// function add(a, b) {
//   console.log(a + b);
// }

// let x = add(2, 3);
// console.log(x * 2);



// function a1(n) { return n + 1; }
// function a2(n) { console.log(n + 1); }

// console.log(a1(5) * 2);
// console.log(a2(5) * 2);



// function makeCoffee(bean, milk) {

//   return bean + " coffee with " + milk;

// }


// let cup1 = makeCoffee("Arabica", "oat milk");
// let cup2 = makeCoffee("AColumbian", "coconut milk");





// let car = document.querySelector(".car");
// car.textContent = "Porsche gt3 RS 911";

// let btn = document.querySelector("#btn");
// btn.addEventListener("click", function () {

//   car.textContent = "You pressed";

// });





// let blueBtn = document.querySelector("#blue");

// blueBtn.addEventListener("click", function () {

//   document.body.style.backgroundColor = "blue";
// });





// let menu = ["Cappuccino", "Cold Coffee", "Latte", "Espresso"];
// console.log(menu[3]);
// console.log(menu.length);

// menu.push("Mocha");

// console.log(menu);




// let prices = [500, 120, 600, 798, 328];

// console.log(prices[4]);
// console.log(prices.length);

// for (let i = 0; i < prices.length; i++) {
//   console.log("₹" + prices[i]);
// }



// for (let i = 0; i < menu.length; i++) {

//   console.log(menu[i]);
// }



// let list = document.querySelector("#list");
// let drinks = ["Cranberry blue", "Ice latte", "Orange Crusher", "Red garden"];
// let rates= [599, 699, 399, 789];

// for (let i = 0; i < drinks.length; i++) {

//   let item = document.createElement("p");
//   item.textContent = drinks[i] + " - ₹ " + rates[i];
//   list.appendChild(item);
// }



// let drink = {name: "Latte", price: 180};
// console.log(drink.name); 
// console.log(drink.price);



let menu = [
  {name: "Latte", price: 180},
  {name: "Mocha", price: 220},
  {name: "Cold Coffee", price: 999},
  {name: "Ice cream espresso", price: 899}
];

for (let i = 0; i < menu.length; i++) {
  console.log(menu[i].name + " - ₹ " + menu[i].price);
}