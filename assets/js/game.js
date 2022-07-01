
// will keep player name from being empty, and provide player name to start game.
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("what is your robot's name?");
  }
  console.log("Your Robot's name is " + name);
  return name;

}

var fightOrSkip = function () {
  //ask player if they'd like to fight or skip using fightOrSkip funtion.
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose. ' );
  //!promptFight is referring to values such as null, '', Nan and 0
 

  if (promptFight === "" || promptFight === null ) {
        window.alert("You need to provide a valid answer! Try again.");
        return fightOrSkip();
      }
    

  promptFight = promptFight.toLowerCase();
  if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm ("Are your sure you'd like to quit?");

    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Bye!");

      playerInfo.playerMoney = playerInfo.money - 10;
      return true;

      shop();

      
  }
 }
 return false;
}

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
  if (fightOrSkip()) {
    break;
  }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0,enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );enemyInfo.length

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  } // end of while loop
}; // end of fight function

//function to start a new game
var startGame = function() {
//debugger;

//reset player stats
playerInfo.reset();

// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyInfo.length; i++) {

  // if player is still alive, keep fighting
  if (playerInfo.health > 0) {

    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    

    // pick new enemy to fight based on the index of the enemy.names array
    var pickedEnemyObj = enemyInfo[i];

    // reset enemy.health before starting new fight
    pickedEnemyObj.health = randomNumber(40,60);

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
    fight(pickedEnemyObj);

    //if player is not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length -1) {
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

      if (storeConfirm) {
        shop();
      }
    };
  }
  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
}
// either player is out of health or enemies
endGame();
};

var endGame = function() {
  //if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + " .");
  } 
  else {
    window.alert("You LOSE!");
  };

  var playAgainConfirm = window.confirm("Would you like to play again?");

  if(playAgainConfirm) {
    //restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 1 for REFILL, 2 for UPGRADE, 3 to LEAVE."
  );
shopOptionPrompt = parseInt(shopOptionPrompt);
//switch 
switch (shopOptionPrompt) {

   case 1:
  
   
  playerInfo.refillHealth();
   break;
   case 2:

  
  playerInfo.upgradeAttack();
   break;
   case 3:
  
    window.alert("Leaving the store");

    //Leave store
    break;

  default:
    window.alert("You did not pick a valid option. Try again.");
    //call shop() again to force player to pick a valid option
    shop();
    break;
}

};

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() *(max - min + 1) + min);

  return value;
};

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,

  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
    refillHealth: function() {
     if(this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
     }
     else {
      window.alert("You don't have enough money!");
     };
    },
    upgradeAttack: function() {
     if(this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
     }
     else {
      window.alert("You don't have enough money!");
     }
    },
};

//starting stats for  enemy
var enemyInfo = [
  {
    name: "Roborto", 
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }

];




 
//Starts the game when the page loads
startGame();


