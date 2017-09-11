import {Characters} from "../js/characters.js"
import {MyHero} from "../js/hero.js"
import{Ennemies} from "../js/ennemis.js"
import{jack} from "../js/jack.js"

export let minion = new Ennemies("minion",30,10);

let getButton = document.querySelectorAll('button');
getButton[0].addEventListener("click", function (){
	minion.getattacked(jack);
	pointsminion();
});


function pointsminion(){
	document.getElementById("pointsMinion").innerHTML = "Les pv du héros sont de " + minion.health ;
}

