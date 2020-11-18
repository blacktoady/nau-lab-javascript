let name = "Anatolii";
let surname = "Ponomariov";

// // for
// for (let i = 100; i >= 1; i--) {
//     if ((i % 3) == 0 && (i % 5) == 0) {
//         console.log(name + " " + surname);
//     }   else if ((i % 3) == 0) {
//         console.log(name);
//     }   else if ((i % 5) == 0) {
//         console.log(surname);
//     }   else {
//         console.log(i);
//     }
// }

// while
let i = 100;
while (i >= 1) {
    if ((i % 3) == 0 && (i % 5) == 0) {
        console.log(name + " " + surname);
    }   else if ((i % 3) == 0) {
        console.log(name);
    }   else if ((i % 5) == 0) {
        console.log(surname);
    }   else {
        console.log(i);
    }
    i--;
}