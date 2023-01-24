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
let round = `No rounds yet!`;
let i = 0
let playerWins = 0;
let tie = 0;
function oneRound(e){
   // if(i >= 5) return;

    console.log(e.target.id);
    let computerChoice = getComputerChoice();

    if(e.target.id.toLowerCase() === computerChoice)
        round = `Tie! ${e.target.id} is as powerful as a ${computerChoice}`;

    else if(e.target.id.toLowerCase() == "rock" && computerChoice=="scissors")
        round = `You Win! ${e.target.id.toLowerCase()} beats ${computerChoice}`;

    else if(e.target.id.toLowerCase() == "rock" && computerChoice=="paper")
        round = `You Lose! ${computerChoice} beats ${e.target.id.toLowerCase()}`;

    else if(e.target.id.toLowerCase() == "paper" && computerChoice=="rock")
        round = `You Win! ${e.target.id.toLowerCase()} beats ${computerChoice}`;

    else if(e.target.id.toLowerCase() == "paper" && computerChoice=="scissors")
        round = `You Lose! ${computerChoice} beats ${e.target.id.toLowerCase()}`;
    
    else if(e.target.id.toLowerCase() == "scissors" && computerChoice=="paper")
        round = `You Win! ${e.target.id.toLowerCase()} beats ${computerChoice}`;

    else if(e.target.id.toLowerCase() == "scissors" && computerChoice=="rock")
        round = `You Lose! ${computerChoice} beats ${e.target.id.toLowerCase()}`;


    
    i++;
    if(i < 5){
        if(round.indexOf("You Win!") != -1)
            playerWins++;
        else if(round.indexOf("Tie!") != -1)
            tie++;
    }
    if (i >= 5){
        const playerWon = document.createElement('div');
        playerWon.style.color= '#0F1F0F';
        const computerWon = document.createElement('div');
        computerWon.style.color='#0F1F0F'
        playerWon.textContent = `Player won ${playerWins} times.`;
        computerWon.textContent = `Computer won ${5-tie-playerWins} times.`;
        document.querySelector('body').append(playerWon);
        document.querySelector('body').append(computerWon);
        i=0;
        tie=0
        playerWins=0;
    }
}





buts = document.querySelectorAll('button');
buts.forEach(but => but.addEventListener('click', oneRound));