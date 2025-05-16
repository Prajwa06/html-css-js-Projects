
let yourPoints=0;
let compPoints=0;

function startGame(input) {
  

  let compChoice = Math.ceil(Math.random() * 3);
  let userChoice = input;

 

  if (userChoice === 1) {
    if (compChoice === 1) {
      document.getElementById("yourChoice").innerHTML = "Your Choice: Rock";
      document.getElementById("compChoice").innerHTML = "Comp Choice: Rock";

      document.getElementById("result").innerHTML = "Tied";
      document.getElementById("result").style.color = "black";
    } else if (compChoice === 2) {
      document.getElementById("yourChoice").innerHTML = "Your Choice: Rock";
      document.getElementById("compChoice").innerHTML = "Comp Choice: Paper";

      document.getElementById("result").innerHTML = "YOU LOOSE";
      document.getElementById("result").style.color = "red";
      compPoints++;
    } else if (compChoice === 3) {
      document.getElementById("yourChoice").innerHTML = "Your Choice: Rock";
      document.getElementById("compChoice").innerHTML = "Comp Choice: Scissors";

      document.getElementById("result").innerHTML = "YOU WIN";
      document.getElementById("result").style.color = "green";
      yourPoints++;
    }
  } else if (userChoice === 2) {
    if (compChoice === 1) {
      document.getElementById("yourChoice").innerHTML = "Your Choice: Paper";
      document.getElementById("compChoice").innerHTML = "Comp Choice: Rock";

      document.getElementById("result").innerHTML = "YOU WON";
      document.getElementById("result").style.color = "green";
      yourPoints++;
    } else if (compChoice === 2) {
      document.getElementById("yourChoice").innerHTML = "Your Choice: Paper";
      document.getElementById("compChoice").innerHTML = "Comp Choice: Paper";

      document.getElementById("result").innerHTML = "Tied";
      document.getElementById("result").style.color = "black";
    } else if (compChoice === 3) {
      document.getElementById("yourChoice").innerHTML = "Your Choice: Paper";
      document.getElementById("compChoice").innerHTML = "Comp Choice: Scissors";

      document.getElementById("result").innerHTML = "YOU LOOSE";
      document.getElementById("result").style.color = "red";
      compPoints++;
    }
  } else if (userChoice === 3) {
    if (compChoice === 1) {
      document.getElementById("yourChoice").innerHTML = "Your Choice: Scissors";
      document.getElementById("compChoice").innerHTML = "Comp Choice: Rock";

      document.getElementById("result").innerHTML = "YOU LOOSE";
      document.getElementById("result").style.color = "red";
      compPoints++;
    } else if (compChoice === 2) {
      document.getElementById("yourChoice").innerHTML = "Your Choice: Scissors";
      document.getElementById("compChoice").innerHTML = "Comp Choice: Paper";

      document.getElementById("result").innerHTML = "YOU WIN";
      document.getElementById("result").style.color = "green";
      yourPoints++;
    } else if (compChoice === 3) {
      document.getElementById("yourChoice").innerHTML = "Your Choice: Scissors";
      document.getElementById("compChoice").innerHTML = "Comp Choice: Scissors";

      document.getElementById("result").innerHTML = "Tied";
      document.getElementById("result").style.color = "black";
    }
  }

  

  
}

const rock=document.getElementById('rock');
const paper=document.getElementById('paper');
const scissor=document.getElementById('scissor');
const yP=document.getElementById('yourPoints');
const cP=document.getElementById('compPoints');


rock.addEventListener('click',()=>{
    startGame(1);
    yP.innerHTML=`Your Points: ${yourPoints}`;
    cP.innerHTML=`Computer Points: ${compPoints}`;
});

paper.addEventListener('click',()=>{
    startGame(2);
    yP.innerHTML=`Your Points: ${yourPoints}`;
    cP.innerHTML=`Computer Points: ${compPoints}`;
});

scissor.addEventListener('click',()=>{
    startGame(3);
    yP.innerHTML=`Your Points: ${yourPoints}`;
    cP.innerHTML=`Computer Points: ${compPoints}`;
});

