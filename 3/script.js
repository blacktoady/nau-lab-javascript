// // song
// function song() {
//     let word = "bottles";
//     let count = 99;
//     while (count > 0) {
//         if (count == 1){
//             word = "bottle"
//         }
//         console.log(count + " " + word + " of beer on the wall");
//         console.log(count + " " + word + " of beer,");
//         console.log("Take one down, pass it around,");

//         count = count--;
//         if (count == 1){
//             console.log(count + " " + word.slice(0, -1) + " of beer on the wall.");
//         };
//     };
//     if (count <= 0) {
//         console.log("No more " + word + " of beer on the wall.");
//     };
// }


// // fibonacci
// function fib(n) {
//     let a = 1;
//     let b = 1;
//     let fibArray = [0, 1, 1];
//     if (n < 3) {
//         console.log("first 3 elements: [0, 1, 1]");
//     }   else {
//         for (let i = 4; i <= n; i++) {
//             let c = a + b;
//             a = b;
//             b = c;
//             fibArray.push(b);
//         };
//         console.log(fibArray); 
//     };
    
// }
 
// fib(7);