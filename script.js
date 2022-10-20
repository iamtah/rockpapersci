function getComputerChoice(){
    let a = Math.floor(Math.random()*2) +1

    switch(a){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let result, layerselection;
function gameRound(){
    let compChoice = getComputerChoice();
    playerselection =prompt("Rock , Paper , Scissors ?");
    if( compChoice === playerselection){
        result = 3;
        return result;
    }
    compChoice === "rock" && playerselection === "paper" ?  result = 1:
    compChoice === "paper"  && playerselection === "scissors" ? result= 1 : 
    compChoice=== "scissors" && playerselection ==="rock" ? result =1 :
    result = 0; // i used ternary operator for practising.
    return result;
}
gameRound()


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
game(); 
