//Faire une classe héro (nom, vie, armure, puissanceAttaque)
	//les méthodes seront attaque(),subitAttaque,gagneArmure,gagneVie
//les ennemis sont une classe (type,vue,puissanceAttaque)
	//les méthodes seront attaque(),subitAttaque()


	//le héros récupère un bonus de vie
	//1- le héros a un nom, un nombre de vie, il fait des dégâts, il peut avoir une armure et peut avoir un bonus de vie
function Heros (nom,nombreVie,degats,armure){
	this.nom = nom;
	this.nombreVie = nombreVie;
	this.degats = degats;
	this.armure = armure;
}

function Ennemis(nom,nombreVie,degats){
	this.nom = nom;
	this.nombreVie = nombreVie;
	this.degats = degats;
}

function Armure(points,bonus){
	this.points = points;
	this.bonus = bonus;
}

function Vie (nombreVie,bonus){
	this.nombreVie = nombreVie;
	this.bonus = bonus;
}

//je donne des attributs à mon héro
let theHero = new Heros("Jack",200,15,0,0);

//je donne des attributs à mes ennemis
let minion = new Ennemis("minion",10,10);
let lieutenantMinion = new Ennemis ("Lieutenant Minion",30,30);
let chefMinion = new Ennemis ("chefMinion",100,100);

//je donne des attributs à mes bonus vie & armure
let armurePoints = new Armure(0,20);
let viepoints= new Vie (200,50);

//Le héros prend un bonus de vie de 50.
console.log("Le héros a" + " " + theHero.nombreVie + " "+ "points de vie");
let vieapresbonus =  theHero.nombreVie + viepoints.bonus;
console.log("le héros a obtenu un bonus 'Vie supplémentaires' de 50 points et a maintenant une vie de" + " " + vieapresbonus +" "+"points")

//le héros prend un bonus armure de 20.
let armureapresbonus = theHero.armure + armurePoints.bonus;
console.log("le héros a obtenu un bonus armure, il a maintenant" + " " + armureapresbonus + " "+ "points sur son armure");

//le héros se fait attaquer par un minion 
let degatsCausesParMinion = 















function Heros (nom,nombreVie,armure,puissanceAttaque){
	this.nom = nom;
	this.nombreVie = nombreVie;
	this.armure = armure 
	this.puissanceAttaque = puissanceAttaque;

	this.getAttacked = function(victimes){
		console.log("Oui ! le héros a attaqué l'ennemi! Il reste :" + (victimes.nombreVie - this.puissanceAttaque)  +" " + " points de vie");

	}

	this.gagneArmure = function(){
		console.log("Whaou, le héros reçoit un bonus armure! Il a maintenant :" + (this.armure = this.armure + 20) + " " + "points d'armure");
	}
	this.gagneVie = function(){
		console.log("Whaou, le héros reçoit un bonus vie ! Il a maintenant :" + (this.nombreVie = nombreVie + 50)+ " " + "points de vie");
	}

	this.degats = function(ennemi){
		if(this.armure > ennemi.puissanceAttaque ) {
			let result = this.armure - ennemi.puissanceAttaque;
			console.log(this.armure);
			/*let nombreVie = this.nombreVie - resultat;*/
			
/*		} else { 
			this.nombreVie - result;
			console.log (this.nombreVie);
		}*/
	}
}



function Ennemis(nom,nombreVie,puissanceAttaque){
	this.nom = nom;
	this.nombreVie = nombreVie;
	this.puissanceAttaque = puissanceAttaque;

	this.getAttacked = function(victimes){
		/*console.log("Oh non ! le héros a été attaqué par l'ennemi! Il reste :" + " "+ (victimes.nombreVie - this.puissanceAttaque) + " " + "points de vie");*/
		console.log(this.nombreVie +" " + this.armure)

	}


}

//je donne des attributs à mon héro
let theHero = new Heros("Jack",200,0,15);

//je donne des attributs à mes ennemis
let minion = new Ennemis("minion",10,10);
let lieutenantMinion = new Ennemis ("Lieutenant Minion",30,30);
let chefMinion = new Ennemis ("chefMinion",100,100);

//j'affiche le nombre de vie actuel
console.log("Le héros a" + " "+ theHero.nombreVie + " "+ "points de vie");

//Le héros reçoit un bonus de vie
theHero.gagneVie()

//Le héros reçoit un bonus armure
theHero.gagneArmure();

//le héros est attaqué par le minion
chefMinion.getAttacked(theHero);
/*console.log(theHero.armure)
console.log(theHero.nombreVie)*/
//le héros




//Le héros prend un bonus de vie de 50.
/*console.log("Le héros a" + " " + theHero.nombreVie + " "+ "points de vie");
let vieapresbonus =  theHero.nombreVie + viepoints.bonus;
console.log("le héros a obtenu un bonus 'Vie supplémentaires' de 50 points et a maintenant une vie de" + " " + vieapresbonus +" "+"points")

//le héros prend un bonus armure de 20.
let armureapresbonus = theHero.armure + armurePoints.bonus;
console.log("le héros a obtenu un bonus armure, il a maintenant" + " " + armureapresbonus + " "+ "points sur son armure");*/

//le héros se fait attaquer par un minion 