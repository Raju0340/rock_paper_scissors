let userScore=0;
let compScore =0 ;
let userScoreTrack = document.querySelector("#user-score");
let compScoreTrack = document.querySelector("#comp-score");
let mg = document.querySelector(".msg");
function computerChoice(){
    const choices = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random()*3);
    let temp = choices[randIdx];
    return temp;
}
function showWinner(won,userOption,compChoice){
 
  
    if(won){
        userScore++;
        userScoreTrack.innerText=userScore;
        mg.innerText = `You Won..! Your  ${userOption} Beats ${compChoice}`;
       mg.style.backgroundColor="green";
    }else{

  compScore++;
  compScoreTrack.innerText=compScore;
  mg.style.backgroundColor="red";
  mg.innerText=`You Lost..! ${compChoice} Beats Your ${userOption}`;
    }
}
function playGame(userOption){
    let compChoice =computerChoice();
    let userScore = 0;
    let compScore=0;
    // console.log(compChoice);
if(userOption == compChoice){
    // console.log("Math is Draw");
    mg.style.backgroundColor="yellow";
    mg.innerText="Match is Draw";

}else{
    let won = true;
    if(userOption =="rock"){
     won =  compChoice==="paper"?false:true;
    }else if(userOption==="paper"){
        won = compChoice==="scissors"?false:true;
    }else{
        won = compChoice==="rock"?false:true;
    }
  
showWinner(won,userOption,compChoice);
}}
const options = document.querySelectorAll(".choice");
for(let choice of options){
    choice.addEventListener("click",()=>{
        let userOption = choice.getAttribute("id");
    //    console.log(userOption);
       playGame(userOption);
    });
}
