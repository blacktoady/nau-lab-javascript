// leap year

function leapYear(year) {
    if ((year % 100) == 0) {
        if ((year % 400) == 0) {
            console.log("leap year");
        }   else {
            console.log("common year");
        }
    }   else if ((year % 4) == 0) {
        console.log("leap year");
    }   else {
        console.log("common year");
    }
}

leapYear(2011);