let UserScore = 0;
let computerScore = 0;
const UserScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const ScoreBoard_div = document.querySelector(".Score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices =['r','p','s'];
    const randomNumber =  Math.floor(Math.random()*3);
    return choices [randomNumber];
}

function convertToWord(letter){
if (letter === "r")  return "Rock";
if (letter === "p" ) return  "paper";
return "Scissors";
}




function win(userChoice, computerchoice) {
    UserScore++;
    UserScore_span.innerHTML = UserScore;
    computerScore_span.innerHTML = computerScore;
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "user".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smalluserword}  beats ${ convertToWord(computerchoice)} ${smallcompword} You Win!"`;
    document.getElementById(userChoice).classList.add('green-glow');
}



function lose (userChoice, computerchoice){
    computerScore++;
    UserScore_span.innerHTML = UserScore;
    computerScore_span.innerHTML = computerScore;
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "user".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smalluserword}  looses to ${ convertToWord(computerchoice)} ${smallcompword} You Lost...!"`;
    
}

function draw (userChoice, computerchoice){
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "user".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smalluserword}  equals ${ convertToWord(computerchoice)} ${smallcompword} It's a draw!"`;

 
    
}

function game (userChoice) {
const computerchoice = getComputerChoice();
switch (userChoice + computerchoice){
case  "rs":
case  "pr":
case  "sp":
 win(userChoice, computerchoice);
break;
case "rp":
case "ps":
case "sr":
lose(userChoice, computerchoice);
    break;
    case "rr":
    case "pp":
    case "ss":
draw(userChoice, computerchoice);
        break;
  }
}
    
    function main (){
    rock_div.addEventListener('click', function () {
        game('r');
    })

    paper_div.addEventListener('click', function () {
        game('p');
    })

    scissors_div.addEventListener('click', function () {
        game('s');
    })
}
 
main();
