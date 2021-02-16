var total = prompt('How much money do you have in your pocket?');

// Your code below:
function money () {
    if(total > 100){
        console.log("Give me your money!");
    } else if (total > 50){
        console.log("Buy me some coffee, you cheapskate!");
    } else {
        console.log("You are a poor guy, go away!");
    }

}
money()