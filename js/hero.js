
//j'étends ma classe characters à heros

import {Characters} from "../js/characters.js";

export class MyHero extends Characters {
	constructor(nom, health,damage){
		super(nom,health,damage);
	}
}
