function sing(){
    let array = [];
    
    for(let i=0; i < 12; i++){
        if(i === 4){
            array.push("words of wisdom");
        
        }else if(i == 10){
            array.push("there will be an answer");
        }
        else {
            array.push("let it be");
        }
    }
    
    return array.join(', ');
}

//Your code above ^^^

console.log(sing());