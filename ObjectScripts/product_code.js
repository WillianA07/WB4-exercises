
"use strict";

function parsePartCode(productCode) {
    let colon = product.indexOf(":");
    let dash = product.indexOf("-");

    let supplierCode = product.slice(0, colon);
    let productNumber = product.slice(colon +1 , dash);
    let productSize = product.slice(dash + 1);

    let part = {
        supplierCode: supplierCode,
        productNumber: productNumber,
        size: productSize
    };

    return part;
};

let product = "ABC:12345-large"; 

let part1 = parsePartCode(product)

console.log("Supplier: " + part1.supplierCode + " Product Number: " + part1.productNumber + " Size: " + part1.size);
