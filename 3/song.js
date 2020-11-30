// song
function song() {
    let word = "bottles";
    let count = 99;
    while (count > 0) {
        if (count == 1){
            word = "bottle"
        }
        console.log(count + " " + word + " of beer on the wall");
        console.log(count + " " + word + " of beer,");
        console.log("Take one down, pass it around,");

        count = count - 1;
        if (count == 1){
            console.log(count + " " + word.slice(0, -1) + " of beer on the wall.");
        };
    };
    if (count <= 0) {
        console.log("No more " + word + " of beer on the wall.");
    };
}

song();