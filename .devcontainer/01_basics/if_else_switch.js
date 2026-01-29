let marks = 75;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else {
    console.log("Fail");
}

// if-else = condition & range, flexible


let day = 2;

switch (day) {
    case 1: 
    console.log("Monday");
    break;

    case 2:
    console.log("Tuesday");
    break;

    default:
    console.log("Invalid day");
}

// switch case = fixed values, cleaner for options


// grade calculator

let score = 95;

if(score >= 90) {
    console.log("Grade A");
} else if(score >= 75) {
    console.log("Grade B");
} else if(score >= 60) {
    console.log("Grade C");
} else {
    console.log("fail");
}