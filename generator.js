let who = ['the dog','my granma','his turtle','my bird'];
let action = ['eat','pissed','crushed','broked'];
let what = ['mi car', 'my shoe', 'my garden', 'my house'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
document.getElementById("excuse").innerHTML= getExcuse();

function getExcuse(){


    let randonNumbers = [];
    
for (let i = 0; i < 4; i++) {
    randonNumbers.push(Math.floor(Math.random()* 4));
}

return document.getElementById("excuse").innerHTML= who[randonNumbers[0]] + " " + action[randonNumbers[1]] + " " + what[randonNumbers[2]] + " "+ when[randonNumbers[3]];

}

/*function getExcuse() {
    let phrase = [who, action, what, when];
    let excuse = "";

    for(sentence in phrase){
        console.log();
        excuse = excuse.concat(" ", phrase[sentence][getrandom (phrase)]);

    }
    return excuse;
}
function getrandom( phrasePart){
    return Math.floor[Math.random() * phrasePart.length];
}*/