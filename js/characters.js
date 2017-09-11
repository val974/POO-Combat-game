// my parent - characters

export class Characters {
	constructor(nom, health,damage){
		this.nom = nom;
		this.health = health;
		this.damage = damage;
	}

	getattacked(ennemis){
		this.health -= ennemis.damage;
		if(this.health <= 0){
			this.health=0;
		}
	}
}