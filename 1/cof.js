// Who’s buying Coffee?
function coffee() {
    let names = new Array("Keith", "Joe", "Daniel", "Ivan", "Peter", "Nicholas", "Alex", "Tim");

    let name = names[Math.floor(Math.random()*names.length)];

    return name;
}
console.log(coffee());