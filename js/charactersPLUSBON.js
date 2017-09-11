// my parent - characters

class Characters {
	constructor(nom, health,damage){
		this.nom = nom;
		this.health = health;
	}
}

//j'étends ma classe characters à hero
class MyHero extends Characters {
	constructor(nom, health,damage,armor){
		super(nom,health,damage);
		this.armor = armor;
	}

	healthBonus() {
		this.health += 50;
		console.log(this.nom + ' a reçu un bonus de vie. ses pv sont a '+this.health)
	}
	
	armorBonus(){
		this.armor +=20;
		return this.armor;
		console.log(this.nom +  "a reçu un bonus d'armure. ses pv sont a" + this.armor )
	}

}

//j'étends ma classe characters

class Ennemies extends Characters {
	constructor(nom, health,damage){
		super(nom,health,damage)
	}
}


//je donne des attributs à mon héro
let jack = new MyHero("Jack",200,15,0);

//je donne des attributs à mes ennemis
let minion = new Ennemies("minion",10,10,0);
let lieutenantMinion = new Ennemies ("Lieutenant Minion",30,30,0);
let chefMinion = new Ennemies ("chefMinion",100,100,0);

//Story 1 : le héros reçoit un bonus vie
console.log(jack.healthBonus());
console.log(jack.health);

//Story 2 : le héros reçoit un bonus armure
console.log(jack.armorBonus());
console.log(jack.armor);

//Story 3 : le héros se fait attaquer par un minion 





































/*function myHero(name,health,armor,attackPower,damage, healthBonus, armorBonus){
	this.name = name;
	this.health = health;
	this.armor = armor;
	this.attackPower = attackPower;
	this.damage = function(enemies){

			let result =  enemies.attackPower - this.armor;
			if (result < 0){
				console.log(this.health - result);
				}		
			else {
				console.log(this.armorBonus)
			}	

		};

		this.healthBonus = function(){
			console.log ("Le héros a " + (this.health + 50)+ " "+ "points de vie");
		}

		this.armorBonus = function(){
			console.log("Le héros récupère un bonus armure, il a maintenant " + (this.armor + 20) + " points d'armure");
		}
	}

	function enemies (type,health,attackPower,damage){
		this.type= type;
		this.health = health;
		this.attackPower = attackPower;
		this.damage = damage;
	}

//Mon héros
let jack = new myHero ("Jack",200,0,15,0);

//Mes ennemis
let minion = new enemies ("minion",10,10,0)
let lieutenantMinion = new enemies ("lieutenant Minion",30,30,0);
let chefMinion = new enemies ("chefMinion", 100,100,0);

//Story 1 : Le héros récupère un bonus de vie
jack.healthBonus();

//Story 2 : le héros récupère un bonus armure
jack.armorBonus();

//Story 3 : le héros se fait attaquer par un minion.
jack.damage(minion);*/