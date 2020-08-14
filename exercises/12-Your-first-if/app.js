var total = prompt('How much money do you have in your pocket?');

// Your code below:
function money(total) {
  let result;

  if (total > 100) {
    result = 'Give me your money!';

  } else if (total > 50 ){
      result = 'Buy me some coffee, you cheapskate!';

  }
  else if (total <= 50) {
    result = 'You are a poor guy, go away!';
  }
  
  return result; 
}
console.log (money(total));
