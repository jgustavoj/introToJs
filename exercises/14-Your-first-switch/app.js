function getColor(selection)
{
	switch(selection.toLowerCase()){
        // Add more options here
        case 'red': 
            return true;
            break;
        case 'green':
            return true;
            break;
        case 'blue':
            return true;
            break;
	    default:
	    	return false;  
	        break;               
	}
}

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
    console.log('We are sorry, that color is not available');
    
    //test passes but compile gives the wrong value 