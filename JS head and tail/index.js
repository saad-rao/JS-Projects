
var headTail = ["head", "tail"];

//ya 1 array banaya ha jis me hum na head aur tail rakh liya


// us ka baad hamen 1 random number generate krna ha or us ko hum array ke
//  length se multiply karwa den ga, tw hamare pas 0 aur 1 ka beech num generate hoga
                   //random num *    2  
var randomNumber = Math.random()*headTail.length;
//  console.log(randomNumber);

//  ya jo ha random number generate kr da ga 0-1 means decimal khattam kr de ga
 var roundNum = Math.floor(randomNumber)
//  console.log(roundNum);
 
var getValue = headTail[roundNum];

let userInput = prompt("head or tail").toLowerCase();

if (userInput === "head" || userInput === "tail"){
    if(userInput === getValue){
        alert(`user ${getValue} wins!`)
    }

    else{
        alert(`computer ${getValue} wins!`)
    }
}
else{
    alert(`invalid value ${userInput}` )
}



//Below is the another way of doing this 

let player1 = Number (prompt("Enter the Haid or tail"))
// let player2 = Number (prompt("Enter the Tails"))

let randomNum = Math.random()*1
// console.log(randomNum);


let removeDecimal = Math.round(randomNum)
console.log(removeDecimal);

if(player1 === 0 || player1 === "Heads".toLowerCase() || player1 === "Tails".toLowerCase() ){
    alert("Heads win");
    
}

else{
    alert("Tails win")
}
