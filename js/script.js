// my parent - characters
function characters (nom, health, attackPower,damage){
	this.nom = nom;
	this.health = health;
	this.attackPower = attackPower;
}

//my hero
function MyHero (nom,health,attackPower,armor,damage,armorBonus,healthBonus){
	characters.call(this,nom,health,attackPower);
	this.armor = armor;
	this.damage = function(ennemies){
		if(this.armor >0){
			let result = this.armor - ennemies.attackPower
		}
	}

	this.armorBonus = function(){
		console.log(this.armor + 20);
	}

	this.healthBonus = function(){
		console.log(this.health + 50);
	}
}

MyHero.prototype =Object.create(characters.prototype);
MyHero.prototype.constructor = characters;


//ennemies
function Ennemies(nom,health,attackPower,damage){
	characters.call(this,nom,health,attackPower,damage);
}

Ennemies.prototype = Object.create(characters.prototype);
Ennemies.prototype.constructor = characters;

//je crée une méthode sur le prototype pour les dégâts
characters.prototype.damage = function(victimes){
	console.log(victimes.health - this.attackPower);
}


//je donne des attributs à mon héro
let Jack = new MyHero("Jack",200,15,0,0,0,0);

//je donne des attributs à mes ennemis
let minion = new Ennemies("minion",10,10,0);
let lieutenantMinion = new Ennemies ("Lieutenant Minion",30,30,0);
let chefMinion = new Ennemies ("chefMinion",100,100,0);



//Story 1 : le héros reçoit un bonus vie
console.log(this.health + 50 )

//Story 2 : le héros reçoit un bonus armure
console.log(this.armor + 20)

//Story 3 : le héros se fait attaquer par un minion 
minion.damage(Jack);


































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