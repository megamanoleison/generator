/*var total = prompt('How much money do you have in your pocket?');


if (total > 100 ){
     alert ("Dame tu dinero");
} else if (total > 50){
    alert(" Comprame un cafe, tramposo");
}else if(total <= 50) {
    alert(" Eres un tipo pobre vete");
}
let input = prompt('How many people are coming to your wedding?');

// Your code here
var price =
if  

// con el console detras de cada if

  /*  var price = 0;
    let input = prompt('How many people are coming to your wedding?');
    

if (input <= 50){
    price = 4000;
     console.log('Your wedding will cost '+price+' dollars');
}else if( input <=100){
    price = 10000;
    console.log('Your wedding will cost '+price+' dollars');
}else if ( input <=200){
    price = 15000;
    console.log('Your wedding will cost '+price+' dollars');
}else{
    price = 2000
     console.log('Your wedding will cost '+price+' dollars');
}*/
// con una funcion que abarca todo
/*var price = 0;
let input = prompt('How many people are coming to your wedding?');
function resultado(){

if (input <= 50){
    price = 4000;
     
}else if( input <=100){
    price = 10000;
    
}else if ( input <=200){
    price = 15000;
    
}else{
    price = 20000   
}
console.log('Your wedding will cost '+price+' dollars');
    
}

resultado();*/
function getColor()

{
    let colorname = window.prompt('What color do you want?');


	switch(colorname.toUpperCase()){
        case "GREEN":
         return true;
        
         case "RED" :
        return true
        ;
    
        case "BLUE":
        return true;
    
         
        default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
        return 
    }
}


var isAvailable = getColor();

if(isAvailable){
    
	console.log('Good news! That color is available');
}else {
    console.log('We are sorry, that color is not available')
}
