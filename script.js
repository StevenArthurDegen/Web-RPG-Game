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

import {player, monsters} from "./allStats.js"

fightButton.onclick = fight;
button3.onclick = inventory;
button4.onclick = inn;

// Picks a monster from the allStats monster array at random
function monsterPicker(array){
    const randomNum = Math.floor(Math.random()* array.length);
    let  monster = array[randomNum];  
    return monster;
}
// Allows you to fight a monster
function fight() {
    const monster = monsterPicker(monsters);

    button1.onclick = attack;
    button2.onclick = dodge;

    menu.style.display = "none";
    stats.style.display = "flex";
    level.innerText = player.level;
    playerHealth.innerText = player.health;
    monsterName.innerText = monster.name;
    monsterHealth.innerText = monster.health;
    text.innerText = "You have encountered a level " + monster.level + " monster get ready to fight!";   
}

function attack(){
    console.log('attack')
};
function dodge() {
    console.log('dodge')
}
function inventory(){
    console.log('inventory')
}
function inn(){
    console.log('inn')
};
