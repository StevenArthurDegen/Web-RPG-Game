import {player, monsterList} from "./allStats.js"
// listing out all the html features 
const fightButton = document.querySelector("#fight");
const menu = document.querySelector("#menu");
const text = document.querySelector("#text");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const stats = document.querySelector("#stats")
const playerHealth = document.querySelector("#player-health");
const monsterHealth = document.querySelector("#monster-health");
const playerStat = document.querySelector("#player-stats");
const monsterStat = document.querySelector("#monster-stats");
const level = document.querySelector("#player-level");
const monsterName = document.querySelector("#monster-name");
// monsterFighting will hold the monster info when the fight button is click
let monsterFighting;

// initalizing buttons for game and setting up future actions
fightButton.onclick = fight;
button1.onclick = attack;
button2.onclick = dodge;
button3.onclick = inventory;
button4.onclick = inn;

// Picks a monster from the allStats monster array at random
function monsterPicker(array){
    const randomNum = Math.floor(Math.random()* array.length);

    return monsterFighting = array.filter((item, index) => index == randomNum);  
};

// Allows you to fight a monster
function fight() {
    monsterPicker(monsterList);
    console.log(monsterList)
    console.log(monsterFighting)
    menu.style.display = "none";
    stats.style.display = "flex";

    level.innerText = player.level;
    playerHealth.innerText = player.health;

    monsterName.innerText = monsterFighting[0].name;
    monsterHealth.innerText = monsterFighting[0].health;

    text.innerText = "You have encountered a level " + monsterFighting.level + " monster get ready to fight!";
};

function attack(){
    // setting RNG for attack
    const randomPlayerNum = Math.floor(Math.random() * 5);
    const randomMonsterNum = Math.floor(Math.random() * 5);
    // creating critcal attack 
    const playerCritical = (player["attack power"] * 1.5) - player["attack power"];
    const monsterCritical = (monsterFighting[0]["attack power"] * 1.5) - monsterFighting[0]["attack power"];

    // setting up player attack based off randomPlayerNum 
    if(randomPlayerNum >= 3){
        monsterFighting[0].health -= player["attack power"];
        //critical attack 
        if(randomPlayerNum === 5) {
            monsterFighting[0].health -= playerCritical;
        };
    };

    // setting up monster attack based off randomMonsterNum
    if(randomMonsterNum >= 3){
        player.health -= monsterFighting[0]["attack power"];
        //critcal attack
        if(randomMonsterNum === 5) {
            player.health -= monsterCritical;
        };
    };

    winLose();

    playerHealth.innerText = player.health;
    monsterHealth.innerText = monsterFighting[0].health;
};

function winLose() {

    if(monsterFighting[0].health <= 0){
        menu.style.display = "flex";
        stats.style.display = "none";
        text.innerText = "You won that fight";

    }

    if(player.health <= 0){
        menu.style.display = "flex";
        stats.style.display = "none";
        text.innerText = "You DIED try again";
        player.health = 100;
    }
}

function dodge() {
    console.log('dodge')
};
function inventory(){
    console.log('inventory')
};
function inn(){
    console.log('inn')
};


//monsterList is still getting mutated. it needs to stay unmutated and only have monsterFighting mutate