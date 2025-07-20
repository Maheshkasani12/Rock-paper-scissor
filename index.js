let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const  msg =document.querySelector("#msg");

const userCount =document.querySelector("#user-score");
const compCount = document.querySelector("#comp-score")

 const genComChoice=()=>{
    //rock,paper,scissor
    const option=["rock","paper","scissor"];
   const randanId= Math.floor(Math.random()*3);
   return option[randanId];


 }
 const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Draw match!";
 }

 const showWin=(win)=>{

    if(win){
        userScore++;
        userCount.innerText=userScore;
        console.log("you win!");
        msg.innerText="you win";


    }
    else{
         compScore++;
        compCount.innerText=compScore;
        console.log("you lose");
        msg.innerText="you lost";
        
    }
 }


const playGame = (userChoice)=>{//user choice
    console.log("user-choice" ,userChoice);
    const comChoice = genComChoice();
    console.log("com choice is",comChoice);
    if(userChoice ===comChoice){
        drawGame();
    }
    else{
        let win= true;
        if(userChoice==="rock"){

            //scissors,paper
            userWin = comChoice === "paper"?false:true;

        }
        else if(userChoice ==="paper"){
            win= comChoice === "scissor"?false:true;
        }
        else{
            win = comChoice === "rock"?false:true;
        }
        showWin(win);

    }

}






choices.forEach((choice)=>{
    choice.addEventListener("click",(e)=>{
const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
        
    })
})