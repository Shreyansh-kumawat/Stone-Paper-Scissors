const choices = document.querySelectorAll(".choice");
const botScreen = document.querySelector(".comp-move")
const msg = document.querySelector(".msg")
const bot_msg = document.querySelector(".bot-turn")
const userscorepara = document.querySelector("#user-score");
const botscorepara = document.querySelector("#comp-score");



let userscore = 0;
let botscore = 0;



const drawGame = () => {
    

}




const showWinner = (userWin) => {
    if(userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        //console.log("Win");
       msg.innerText = "Congo, You Won";
       document.querySelector("body").style.backgroundColor = "rgb(91, 255, 118)"
       

    }else {
        //console.log("loose");
        msg.innerText = "Ahh Shit! You Lost";
        document.querySelector("body").style.backgroundColor = "rgba(255, 42, 42, 0.834)"
        botscore++;
        botscorepara.innerText = botscore;
    }
}


const genbotChoice = () => {
    let options = ["stone", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() *3)
    return options[randomIndex];

}




const playGame = (userChoice) => {
//console.log("user = ", userChoice);
const botChoice = genbotChoice();
//console.log("Bot = ", botChoice);


const printdraw = () => {
    //console.log(botChoice)
    if(botChoice === "paper") {
        //console.log("Printed paper");
        botScreen.style.backgroundImage = "url('images/bot_paper.jpg')";
        bot_msg.innerText = `Bot: ${botChoice}`;
        
    } else if(botChoice === "stone"){
        //console.log("printed stone");
        botScreen.style.backgroundImage = "url('images/bot_stone.jpg')";
        bot_msg.innerText = `Bot: ${botChoice}`;
    } else{
        //console.log("printed scissors");
        botScreen.style.backgroundImage = "url('images/bot_scissors.jpg')";
        bot_msg.innerText = `Bot: ${botChoice}`;
    };
};


if(userChoice === botChoice) {
 drawGame();
 msg.innerText = "Ohk! Its Draw"
 document.querySelector("body").style.backgroundColor = "rgb(151, 152, 157)"
printdraw();

}  else{
    let userWin = true;

    if(userChoice === "stone"){
       userWin = botChoice === "paper" ?false : true;
       if(botChoice === "scissors"){
        botScreen.style.backgroundImage = "url('images/bot_scissors.jpg')";
        bot_msg.innerText = "Bot: Scissors";
        //console.log("Scissors")
       } else{
    botScreen.style.backgroundImage = "url('images/bot_paper.jpg')";
    bot_msg.innerText = "Bot: Paper";
    //console.log("Paper")
       }

    } else if(userChoice === "paper") {
        userWin = botChoice === "scissors" ? false : true;
        if(botChoice === "stone"){
        botScreen.style.backgroundImage = "url('images/bot_stone.jpg')";
        bot_msg.innerText = "Bot: Stone";
        //console.log("Stone")
    }else{
        botScreen.style.backgroundImage = "url('images/bot_scissors.jpg')";
        bot_msg.innerText = "Bot: Scissors";
        //console.log("Scissors")
    }
    
    } else{
        userWin = botChoice === "stone" ? false : true;
        if(botChoice === "stone"){
             botScreen.style.backgroundImage = "url('images/bot_stone.jpg')";
             bot_msg.innerText = "Bot: Stone";
             //console.log("Stone")
        }
        else{
        botScreen.style.backgroundImage = "url('images/bot_paper.jpg')";
        bot_msg.innerText = "Bot: Paper";
        //console.log("Paper")
    }
    }


showWinner(userWin);
    };
};



choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});