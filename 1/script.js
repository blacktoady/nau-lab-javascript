// // love calc
// let name = prompt('your name: ');
// let partnerName = prompt("your partner's name: ");

// if (name == "") {
//     alert("please enter your name");
// }   else if (name.lenght <= 2) {
//     alert("incorrect name");
// }   else if (partnerName == "") {
//     alert("please enter your partner's name");
// }   else if (partnerName.lenght <= 2) {
//     alert("incorrect partner's name");
// }   else {
//     let data = Math.random() * 100;
//     data = Math.floor(data);
//     alert("compatibility of " + name + " and " + partnerName + " is " + data);
// }

// // bmi calculator
// let height = prompt("your height (cm):");
// let weight = prompt("your weight (kg):");

// height = height / 100;

// let bmi = weight / (height ** 2);

// if (bmi >= 18.6 && bmi <= 25) {
//     alert("Normal");
// }   else if (bmi < 16) {
//     alert("Acute underweight");
// }   else if (bmi >= 16 && bmi < 18.6) {
//     alert("Underweight");
// }   else if (bmi > 25 && bmi < 30) {
//     alert("Overweight");
// }   else if (bmi > 30) {
//     alert("Obesity");
// }   else {
//     alert("something went wrong");
// }

// // leap year
// let year = +prompt("year:");

// if ((year % 100) == 0) {
//     if ((year % 400) == 0) {
//         alert("leap year");
//     }   else {
//         alert("common year");
//     }
// }   else if ((year % 4) == 0) {
//     alert("leap year");
// }   else {
//     alert("common year");
// }

// Who’s buying Coffee?
let names = Array("Keith", "Joe", "Daniel", "Ivan", "Peter", "Nicholas", "Alex", "Tim");

let name = names[Math.floor(Math.random()*names.length)];

console.log(name);
