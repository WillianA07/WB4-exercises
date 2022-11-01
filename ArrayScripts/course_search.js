
"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",

    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    },
]

function getStartDate(courses) {
    let matching = [];
    let courseLength = courses.length;

    for (let i = 0; i < courseLength; i++) {
        if (courses[i].CourseId == "PROG200") {
            matching = courses[i].StartDate;
        }
    }
    return matching;
}

console.log(getStartDate(courses));

function getTitle(courses) {
    let matching = [];
    let courseLength = courses.length;

    for (let i = 0; i < courseLength; i++) {
        if (courses[i].CourseId == "PROJ500") {
            matching = courses[i].Title;
        }
    }
    return matching;
}

console.log(getTitle(courses));

let courseLength = courses.length;

for (let i = 0; i < courseLength; i++) {
    if (courses[i].Fee <= 50) {
        console.log(courses[i].Title);
    }
}
    
for (let i = 0; i < courseLength; i++) {
    if (courses[i].Location == "Classroom 1") {
        console.log(courses[i].Title);
    }
}