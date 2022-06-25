// var playerName = 'Any name';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 25;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);
// array of enemy names
var enemyNames = [ "Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//game states
// "WIN" - player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * defeat each enemy-robot
//"LOSE"- Player robot's health is zero or less

// fight function
var fight = function(enemyName) {
 
  //repeat and execute as long as the enemy-robot is alive
  while (playerHealth > 0 && enemyHealth > 0) {

  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // if player choses to skip
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
      window.alert (playerName + ' has decided to skip this fight. Goodbye!');
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney);
      break;
    };
  }

  //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log (
      playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      
      //award money to player for winning
      playerMoney = playerMoney + 20;
      //leaving while loop due to enemy death
      break;
      
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
      
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }  //end of while loop 
}; // end of fight function

for(var i = 0; i < enemyNames.length; i++) {
  //phases different robots into function
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}
