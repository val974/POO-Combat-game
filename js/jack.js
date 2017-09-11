import {Characters} from "../js/characters.js"
import {MyHero} from "../js/hero.js"
import{Ennemies} from "../js/ennemis.js"
import{minion} from "../js/minion.js"



export let jack = new MyHero("Jack",200,15);

let getButton = document.querySelectorAll('button');
getButton[1].addEventListener("click", function essai(){
	jack.getattacked(minion);
	ecrire();
});

function ecrire(){
	document.getElementById("pointsheros").innerHTML = "Les pv du héros sont de " + jack.health
}