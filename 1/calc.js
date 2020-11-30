// love calc
let name = prompt('your name: ');
let partnerName = prompt("your partner's name: ");

if (name == "") {
    alert("please enter your name");
}   else if (name.lenght <= 2) {
    alert("incorrect name");
}   else if (partnerName == "") {
    alert("please enter your partner's name");
}   else if (partnerName.lenght <= 2) {
    alert("incorrect partner's name");
}   else {
    let data = Math.random() * 100;
    data = Math.floor(data);
    alert("compatibility of " + name + " and " + partnerName + " is " + data);
}