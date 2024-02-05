let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    
}

const drawGame = () =>{
    // console.log("Game was draw");
    msg.innerText = "Game was draw! Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWiin, userChoice, compChoice) => {
    if(userWiin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats comp's ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose");
        msg.innerText = `You lose! Comp's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } 
    else {
        let userWiin = true;
        if(userChoice === "rock"){
            userWiin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWiin = compChoice === "scissor" ? false : true;
        }else{
            userWiin = compChoice === "rock" ? false : true;
        }
        showWinner(userWiin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
       playGame(userChoice);
    })
})