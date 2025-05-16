const btn=document.getElementById('btn');
const dice=document.getElementById('dice');
const rollHistory=document.getElementById('roll-history');

const historyArr=[];
let index=0;


function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}
function updateHistory(){
        let rollResult=historyArr[index];
        let childDiv=document.createElement('div');
        let h3=document.createElement('h3');
        h3.innerHTML=`Roll: ${index+1}`
        childDiv.appendChild(h3);
        const diceFace=getDiceFace(rollResult);
        let dice=document.createElement('div');
        dice.innerHTML=diceFace;
        dice.setAttribute('class','dice');
        childDiv.appendChild(dice);
        childDiv.setAttribute('class','child');
        rollHistory.appendChild(childDiv);
        index++;
 
}

function rollDice(){
    console.log("dice hase been roller");
    const rollResult=Math.floor(Math.random()*6)+1;
    const diceFace=getDiceFace(rollResult);
    dice.innerHTML=diceFace;
    historyArr.push(rollResult);
    updateHistory();
    console.log("Dice hase been added to the list");
}

btn.addEventListener('click', ()=>{
    dice.classList.add('roll-animation');
    rollDice();
    setTimeout(()=>{
        dice.classList.remove('roll-animation');
    },1000);
});




// create all elemnt from array as list and push it to roll-histoty

