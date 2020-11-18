// // song
// let word = "bottles";
// let count = 99;
// while (count > 0) {
//     if (count == 1){
//         word = "bottle"
//     }
//     console.log(count + " " + word + " of beer on the wall");
//     console.log(count + " " + word + " of beer,");
//     console.log("Take one down, pass it around,");

//     count = count - 1;
//     if (count > 0) {
//       if (count == 1){
//         console.log(count + " " + word.slice(0, -1) + " of beer on the wall.");
//       }
//     } else {
//         console.log("No more " + word + " of beer on the wall.");
//     }
// }

// fibonacci
let fibonacci = function(numMax){
    for(var fibArray = [0,1], i = 0, j = 1, k = 0; k <= numMax ; i = j, j = x, k++ ){
        x = i + j;
        fibArray.push(x);
    }
    console.log(fibArray);
}

fibonacci(12)