let input = prompt('How many people are coming to your wedding?');

// Your code here

function getPrice(param){
    let price;
if (param > 200) {
    price = 20000;
}
else if (param <= 200 && param > 100) {
    price = 15000;
}
else if (param <=100 && param > 50) {
    price = 10000;
}
else {
    price = 4000;
}
return price;
}

console.log('Your wedding will cost '+getPrice(input)+' dollars');
