function getComputerChoice(){
    let x = Math.random()*10;
    //console.log(`random value = ${x}`);

    if (x <= 3){
        return "rock";
    }
    else if (x > 3.0 && x < 6.0){
        return "paper";
    }
    else
        return "scissors";
    
}

function oneRound(playerSelection){
    let computerChoice = getComputerChoice();

    if(playerSelection.toLowerCase() === computerChoice)
        return `Tie! ${playerSelection} is as powerful as a ${computerChoice}`;

    else if(playerSelection.toLowerCase() == "rock" && computerChoice=="scissors")
        return `You Win! ${playerSelection.toLowerCase()} beats ${computerChoice}`;

    else if(playerSelection.toLowerCase() == "rock" && computerChoice=="paper")
        return `You Lose! ${computerChoice} beats ${playerSelection.toLowerCase()}`;

    else if(playerSelection.toLowerCase() == "paper" && computerChoice=="rock")
        return `You Win! ${playerSelection.toLowerCase()} beats ${computerChoice}`;

    else if(playerSelection.toLowerCase() == "paper" && computerChoice=="scissors")
        return `You Lose! ${computerChoice} beats ${playerSelection.toLowerCase()}`;
    
    else if(playerSelection.toLowerCase() == "scissors" && computerChoice=="paper")
        return `You Win! ${playerSelection.toLowerCase()} beats ${computerChoice}`;

    else if(playerSelection.toLowerCase() == "scissors" && computerChoice=="rock")
        return `You Lose! ${computerChoice} beats ${playerSelection.toLowerCase()}`;
}

function game(){
    let playerWins = 0;
    let tie = 0;
    for(let i = 0; i <5; i++){
        let round = oneRound(playerSelection = prompt());
        console.log(round);
        if(round.indexOf("You Win!") != -1)
            playerWins++;
        else if(round.indexOf("Tie!") != -1)
            tie++;
    }
    console.log(`Player won ${playerWins} times.`)
    console.log(`Computer won ${5-tie-playerWins} times.`)
}