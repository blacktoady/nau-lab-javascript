// bmi calculator

function bmi(height, weight) {
    height = height / 100;

    let bmi = weight / (height ** 2);

    if (bmi >= 18.6 && bmi <= 25) {
        console.log("Normal");
    }   else if (bmi < 16) {
        console.log("Acute underweight");
    }   else if (bmi >= 16 && bmi < 18.6) {
        console.log("Underweight");
    }   else if (bmi > 25 && bmi < 30) {
        console.log("Overweight");
    }   else if (bmi > 30) {
        console.log("Obesity");
    }   else {
        console.log("something went wrong");
    }
}

bmi(178, 68);