
"use strict";

let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

function getMealCost (order) {
    let sum = 0;
    let numItems = order.length;

    for (let i = 0; i < numItems; i++) {
        sum += order[i].price;
    }
    return sum;
}

let subtotal = getMealCost(lunch);
let tax = subtotal * 0.08;
let tip = subtotal * 0.18;
let total = subtotal + tax+ tip;

console.log("Your meal total was $" + total);