
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
];

// let courseLength = courses.length;

// function sortCoursesByTitle(courses) {
//     for (let i = 0; i < courseLength; i++) {
//         let titleLength = courses[i].Title.length;
//         for (let t = 0; t < titleLength; t++) {
//             let titles = courses[i].Title[t];
//             titles.sort();
//             console.log(titles);
//         }
//     }
// }

// sortCoursesByTitle(courses);

// let courseLength = courses.length;

// for (let i = 0; i < courseLength; i++) {
//     let titles = courses[i].Title;
//     titles.sort();
//     console.log(titles);
// }

courses.sort(sortTitles);

function sortTitles(a , b) {
    if (a.Title < b.Title) {
        return -1;
    }
    else if (a.Title == b.Title) {
        return 0;
    }
    else {
        return 1;
    }
}

console.log(courses);