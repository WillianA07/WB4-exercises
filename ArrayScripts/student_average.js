
"use strict";

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
];

let iLength = students.length

for (let i = 0; i < iLength; i++) {
    let scoresTotal = 0;
    let average = 0;
    let jLength = students[i].scores.length;

    for (let j = 0; j < jLength; j++) {
        scoresTotal += students[i].scores[j];
    }

    average = scoresTotal / jLength;

    console.log("Student " + students[i].name + " average score is :" + average);
}

