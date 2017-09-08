//j'étends ma classe characters à heros
/*class Characters {
	constructor(nom, health,damage){
		this.nom = nom;
		this.health = health;
		this.damage = damage;
	}
}
*/
class MyHero extends Characters {
	constructor(nom, health,damage,armor){
		super(nom,health,damage);
		this.armor = armor;
	}

	healthBonus() {
		this.health += 50;
		/*return this.health += 50;*/
		console.log(this.nom + ' a reçu un bonus de vie. ses pv sont a '+this.health);
		
	}
	

	
	armorBonus(){
		this.armor +=20;
		console.log(this.nom +  " a reçu un bonus d'armure. ses points d'armure sont a " + this.armor );
		/*return this.armor;*/
	}
}


//je donne des attributs à mon héro
let jack = new MyHero("Jack",200,15,0);

console.log(jack.healthBonus());
console.log(jack.health);
console.log(jack.armorBonus());
console.log(jack.armor);

/*export default MyHero;*/