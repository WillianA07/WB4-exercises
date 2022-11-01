
"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage (myScores) {
    let scoresLength = myScores.length;
    let i;
    let scoreTotal = 0;
    let average = 0;

    for (i = 0; i < scoresLength; i++) {
        scoreTotal += myScores[i]
        average = scoreTotal / scoresLength;
    }
    return average;
}

console.log(getAverage(myScores));
console.log(getAverage(yourScores));