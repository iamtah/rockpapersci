function getComputerChoice(){
    let a5 = Math.floor(Math.random()*3) +1

    switch(a5){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

let result, playerselection;
function gameRound(){
    let compChoice = getComputerChoice();
   // playerselection =prompt("Rock , Paper , Scissors ?");
    if( compChoice === playerselection){
        result = 2;
        return result;
    }
    compChoice === "rock" && playerselection === "paper" ?  result = 1:
    compChoice === "paper"  && playerselection === "scissors" ? result= 1 : 
    compChoice=== "scissors" && playerselection ==="rock" ? result =1 :
    result = 0; // i used ternary operator for practising.
    
    return result;
    
}

let j = 0,k = 0;

function countResult(){
    
    if(result===0) j+=1;
    if(result===1) k+=1;
    if(j===5){
        j =0;
        k =0;
        return counterdiv.innerText ="Computer Wins! da di doo!";
    }
    if(k===5){
        j=0;
        k=0;
        return counterdiv.innerText="Player, pff, u won i guess ?";
    }
}


function resultRender()
{
    gameRound();
    countResult();
    if(result===2){
      return  div.innerText ="Draw!";
    }
    else if(result===1){
        return  div.innerText ="Player Wins!";
    }
    return  div.innerText ="Computer Wins!";
}





const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const div = document.querySelector(".a");
const counterdiv = document.querySelector(".counter-div");

rock.onclick= function(){
    playerselection="rock" 
    resultRender();
};

paper.onclick =function(){
    playerselection="paper"; 
    resultRender();
};

scissors.onclick = function(){
    playerselection="scissors" 
    resultRender();
};
/*
function game(){
    
    for(i=0; i<5; i++){
    gameRound();
    if (result === 0){
        console.log("computer wins");
    }
    else if(result ===1){
        console.log("player wins")
    }
    else{
        console.log("draw")
    }
    }
}
game(); */
