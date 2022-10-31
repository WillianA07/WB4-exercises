
"use strict";

let mailingAddress = {
    name: "Willian",
    address: "1234 56 Ave",
    city: "Woodside",
    state: "New York",
    zip: "11377"
};


function printContact(mailingAddress) {
    console.log(mailingAddress.name);
    console.log(mailingAddress.address);
    console.log(mailingAddress.city + ", " + mailingAddress.state + " " + mailingAddress.zip);
};

printContact(mailingAddress);