// Player stats and name
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);
// enemy stats and name
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//Money
var playerMoney = 10;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    // prompt player on whether they want to fight or skip
    var promptFight = window.prompt("Would you like to fight this round or skip? enter 'FIGHT' or 'SKIP' to choose");
    console.log(promptFight);
    // if player chooses to fight
    if (promptFight === "FIGHT" || promptFight === "fight") {
           
    //subtract the value of 'playerAttack from the value of 'enemyHealth' and use that result to update the value in the "enemyHealth" variable
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
    )
    // enemy's health check
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }

    //Subtract the value of "enemyAttack" from the value of playerHealth and use that result to update the value in 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack
    //log a resulting message to the console so we know that it worked.
    console.log (
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. "
    );

    //player health check
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }; 

    //if player choses to skip
 }  else if (promptFight === "SKIP" || promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes, leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    

    window.alert(playerName + " has chosen to skip the fight!");

 }  else {
    window.alert("You need to choose a valid option. Try again!");
 } 
  
};

fight();