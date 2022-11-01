
"use strict";

let vehicles = [
    {
        vehicleNumber: 1,
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        vehicleNumber: 2,
        color: "Red",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3
    },
    {
        vehicleNumber: 3,
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        vehicleNumber: 4,
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        vehicleNumber: 5,
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        vehicleNumber: 6,
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("12-30-2022"),
        capacity: 5
    },
    {
        vehicleNumber: 7,
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2023"),
        capacity: 5
    },
    {
        vehicleNumber: 8,
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    },
];

let numberOfVehicles = vehicles.length;

function redVehicles(vehicles) {
    for (let i = 0; i < numberOfVehicles; i++) {
        if (vehicles[i].color == "Red") {
            console.log(vehicles[i].vehicleNumber)
        }
    }
}

redVehicles(vehicles);

console.log("------------------------");

function expiredRegistrations(vehicles) {
    let today = new Date().getTime();

    for (let i = 0; i < numberOfVehicles; i++) {
        let registrationDate = (vehicles[i].registrationExpires).getTime();
        let timeDiff = registrationDate - today;

        if (timeDiff > 0) {
            console.log(vehicles[i].vehicleNumber);
        }
    }
}

expiredRegistrations(vehicles);

console.log("------------------------");

function capacityOfVehicles(vehicles) {
    for (let i = 0; i < numberOfVehicles; i++) {
        if (vehicles[i].capacity >= 6) {
            console.log(vehicles[i].vehicleNumber);
        }
    }
}

capacityOfVehicles(vehicles);

console.log("------------------------");

function licensePlate(vehicles) {
    for (let i = 0; i < numberOfVehicles; i++) {
        if ((vehicles[i].licenseNo).slice(-3) == "222") {
            console.log(vehicles[i].vehicleNumber);
        }
    }
}

licensePlate(vehicles);