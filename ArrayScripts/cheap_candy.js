
"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO:  fill the array with 10 candies of various
    //        price ranges
];

let productLength = products.length;

function candiesLessThanFour(products) {
    for (let i = 0; i < productLength; i++) {
        if (products[i].price < 4) {
            let results = products[i].product;
            console.log(results);
        }
    }
}

candiesLessThanFour(products);

console.log("----------------------")

function candiesWithMMS(products) {
    for (let i = 0; i < productLength; i++) {
        let hasMM = (products[i].product).indexOf("M&Ms");
        //console.log(hasMM);
        if (hasMM > 0) {
            console.log(products[i].product);
        }
    }
}

candiesWithMMS(products);

console.log("----------------------")

function doWeHaveSF(products) {
    for (let i = 0; i < productLength; i++) {
        if (products[i].product == "Swedish Fish") {
            console.log("We do carry Swedish Fish")
        }
    }
}

doWeHaveSF(products);