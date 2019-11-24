var players = [{name: "Player 1",position: 0},{name: "Player 2",position: 0}];
var hasWon = false;
let currentPlayerTurn = 0;
let position = 0;

function rollDice(){
  if (hasWon) {
    return;
  };

let currentPlayer = players[currentPlayerTurn];
roll = Math.floor(Math.random() * 6 + 1);
currentPlayer.position += roll;
snakesladders(currentPlayer);

if (currentPlayer.position === 25 || currentPlayer.position > 25 ) {
    console.log(currentPlayer.name + " has won!! Game Over!!");
    document.getElementById("result").innerHTML += currentPlayer.name + " has won!! Game Over!!";
    hasWon = true;
  }

if (currentPlayer.position === position) {
 diff = currentPlayer.position - position;
    currentPlayerPosition = position - diff;
  }

  currentPlayerTurn++;

if (currentPlayerTurn >= players.length) {
    currentPlayerTurn = 0;
  }
};

function snakesladders(currentPlayer){
  if (currentPlayer.position === 8 ) {
        currentPlayer.position = 15;
        console.log(currentPlayer.name +" rolls...  Die:", roll + "  You stumble on a ladder, advance to position ", currentPlayer.position);
        document.getElementById("result").innerHTML += currentPlayer.name +" rolls...  Die:"+roll + "  You stumble on a ladder, advance to position "+currentPlayer.position+"<br />";

      }
  else if (currentPlayer.position === 19 ) {
        currentPlayer.position = 24;
        console.log(currentPlayer.name +" rolls...  Die:", roll + "  You stumble on a ladder, advance to position ", currentPlayer.position);
        document.getElementById("result").innerHTML += currentPlayer.name +" rolls...  Die:"+roll + "  You stumble on a ladder, advance to position "+currentPlayer.position+"<br />";

          }
  else if (currentPlayer.position === 15 ) {
        currentPlayer.position = 5;
        console.log(currentPlayer.name +" rolls...  Die:", roll + "  You stumble on a snake, go back to position ", currentPlayer.position);
        document.getElementById("result").innerHTML += currentPlayer.name +" rolls...  Die:"+roll + "  You stumble on a snake, go back to position "+currentPlayer.position+"<br />";

          }
  else if (currentPlayer.position === 23 ) {
        currentPlayer.position = 16;
        console.log(currentPlayer.name +" rolls...  Die:", roll + "  You stumble on a snake, go back to position ", currentPlayer.position);
        document.getElementById("result").innerHTML += currentPlayer.name +" rolls...  Die:"+roll + "  You stumble on a snake, go back to position "+currentPlayer.position+"<br />";

          }
   else {
        //actPos(currentPlayer);
        console.log(currentPlayer.name +" rolls...  Die:", roll + "  Move to position ", currentPlayer.position);
        document.getElementById("result").innerHTML += currentPlayer.name +" rolls...  Die:"+roll + "  Move to position "+currentPlayer.position+"<br />";

          }
};

/*function actPos(currentPlayer){
  if (currentPlayer.position > 25 ){
     minus = currentPlayer.position - 25;
    currentPlayer.position = 25 - minus;
  }
}*/
