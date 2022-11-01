
"use strict";

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
];

let membersLength = academyMembers.length;

function findMemberWithID(academyMembers, memID) {
    for (let i = 0; i < membersLength; i++) {
        let memberID = academyMembers[i].memID;

        if (memberID == memID) {
            console.log(academyMembers[i].name);
        }
    }
}

findMemberWithID(academyMembers, 187);

console.log("------------------------------");

function whoBeenIn3Films(academyMembers) {
    for (let i = 0; i < membersLength; i++) {
        let numberOfFilms = academyMembers[i].films.length;

        if (numberOfFilms >= 3) {
            console.log(academyMembers[i].name)
        }
    }
}

whoBeenIn3Films(academyMembers);

console.log("------------------------------");

function nameThatStartWithBob(academyMembers) {
    for (let i = 0; i < membersLength; i++) {
        if ((academyMembers[i].name).slice(0 , 3) == "Bob") {
            console.log(academyMembers[i].name)
        }
    }
}

nameThatStartWithBob(academyMembers);

console.log("------------------------------");

function filmThatStartWithA(academyMembers) {
    for (let i = 0; i < membersLength; i++) {
        let films = academyMembers[i].films;
        let filmLength = films.length;

        for (let f = 0; f < filmLength; f++) {
            let startsWithA = films[f].slice(0,1) == "A";
            if (startsWithA) {
                console.log(academyMembers[i].name);
            }
        }
    }
}

filmThatStartWithA(academyMembers);