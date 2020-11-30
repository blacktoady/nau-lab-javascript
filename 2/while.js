let name = "Anatolii";
let surname = "Ponomariov";

// while
function nameWhile() {
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
};

nameWhile();