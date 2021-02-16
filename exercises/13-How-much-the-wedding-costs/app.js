let input = prompt('How many people are coming to your wedding?');

// Your code here

function getPrice(param){
    let price;
if(param <= 50){
    price = 4000;
} else if(param > 50 && param <= 100){
    price = 10000;
}else if (param > 100 && param <= 200){
    price = 15000;
}else {
    price = 20000;
}
return price;
}
    console.log('Your wedding will cost '+getPrice(input)+' dollars');



