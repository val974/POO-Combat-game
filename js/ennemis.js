//j'étends ma classe characters à ennemis
class Ennemies extends Characters {
	constructor(nom, health,damage){
		super(nom,health,damage)
	}
}


//je donne des attributs à mes ennemis
let minion = new Ennemies("minion",10,10,0);
let lieutenantMinion = new Ennemies ("Lieutenant Minion",30,30,0);
let chefMinion = new Ennemies ("chefMinion",100,100,0);
