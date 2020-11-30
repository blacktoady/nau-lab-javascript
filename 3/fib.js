// fibonacci
function fib(n) {
    let a = 1;
    let b = 1;
    let fibArray = [0, 1, 1];
    if (n < 3) {
        console.log("first 3 elements: [0, 1, 1]");
    }   else {
        for (let i = 4; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
            fibArray.push(b);
        };
        console.log(fibArray); 
    };
    
}
 
fib(7);