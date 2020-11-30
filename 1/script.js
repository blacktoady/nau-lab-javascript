// // love calc
// let name = prompt('your name: ');
// let partnerName = prompt("your partner's name: ");

// if (name == "") {
//     console.log("please enter your name");
// }   else if (name.lenght <= 2) {
//     console.log("incorrect name");
// }   else if (partnerName == "") {
//     console.log("please enter your partner's name");
// }   else if (partnerName.lenght <= 2) {
//     console.log("incorrect partner's name");
// }   else {
//     let data = Math.random() * 100;
//     data = Math.floor(data);
//     console.log("compatibility of " + name + " and " + partnerName + " is " + data);
// }

// // bmi calculator

// function bmi(height, weight) {
//     height = height / 100;

//     let bmi = weight / (height ** 2);

//     if (bmi >= 18.6 && bmi <= 25) {
//         console.log("Normal");
//     }   else if (bmi < 16) {
//         console.log("Acute underweight");
//     }   else if (bmi >= 16 && bmi < 18.6) {
//         console.log("Underweight");
//     }   else if (bmi > 25 && bmi < 30) {
//         console.log("Overweight");
//     }   else if (bmi > 30) {
//         console.log("Obesity");
//     }   else {
//         console.log("something went wrong");
//     }
// }

// bmi(178, 68);

// // leap year

// function leapYear(year) {
//     if ((year % 100) == 0) {
//         if ((year % 400) == 0) {
//             console.log("leap year");
//         }   else {
//             console.log("common year");
//         }
//     }   else if ((year % 4) == 0) {
//         console.log("leap year");
//     }   else {
//         console.log("common year");
//     }
// }

// leapYear(2011);


// // Who’s buying Coffee?
// function coffee() {
//     let names = new Array("Keith", "Joe", "Daniel", "Ivan", "Peter", "Nicholas", "Alex", "Tim");

//     let name = names[Math.floor(Math.random()*names.length)];

//     return name;
// }
// console.log(coffee());
