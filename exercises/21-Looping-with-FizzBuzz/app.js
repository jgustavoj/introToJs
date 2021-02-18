function fizzBuzz() {  
    for(let i=1; i<101; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        } else if(i % 3 == 0){
            console.log("Fizz");
        } else if(i % 5 == 0){
            console.log("Buzz")
        } else {
            console.log(i)
        }      
    }    
}

fizzBuzz();



//loop and print 1 - 100
//create a conditional for multiple of 3 and 5 to print FizzBuzz
//create conditional to print fizz when multiple of 3
//conditional for multiple of 5 to print Buzz-