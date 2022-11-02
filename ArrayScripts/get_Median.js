
"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100, 94];
let yourScores = [82, 98, 94, 88, 92, 100, 100];


let scoresLength = myScores.length;
let yourScoreslength = yourScores.length;

function sortScores(a , b) {
    if (a < b) {
        return -1;
    }
    else if (a == b) {
        return 0;
    }
    else {
        return 1;
    }
}

yourScores.sort(sortScores);

for (let y = 0; y < yourScoreslength; y++) {
    console.log(yourScores[y]);
}

console.log("---------")

myScores.sort(sortScores);

for (let i = 0; i < scoresLength; i++) {
    console.log(myScores[i]);
}

console.log("---------")

// Median


function getMedian(myScores) {
    if ((myScores.length) % 2 == 0) {
        let high = myScores.length / 2;
        let low = high - 1;
        let avg = (myScores[high] + myScores[low]) / 2 
        console.log(avg);
    }
    else {
        let median = Math.floor(myScores.length / 2);
        console.log(myScores[median]);
    }
}

getMedian(myScores);

console.log("---------");

getMedian(yourScores);

console.log("---------")
