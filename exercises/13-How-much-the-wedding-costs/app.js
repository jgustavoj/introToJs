let input = prompt('How many people are coming to your wedding?');

// Your code here

function setPrice(param){
    let price;
if (param > 200) {
    price = "$20,000";
}
else if (param <= 200 && param > 100) {
    price = "$15,000";
}
else if (param <=100 && param > 50) {
    price = "$10,000";
}
else {
    price = "$4,000";
}
return price;
}

console.log('Your wedding will cost '+setPrice(input)+' dollars');