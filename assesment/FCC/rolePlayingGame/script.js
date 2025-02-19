class Character {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }

  attack(target) {
    console.log(`${this.name} attacks ${target.name} for ${this.attackPower} damage.`);
    target.takeDamage(this.attackPower);
  }

  takeDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} takes ${damage} damage. Health is now ${this.health}.`);
    if (this.health <= 0) {
      console.log(`${this.name} has been defeated!`);
    }
  }
}

class Game {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  startBattle() {
    if (this.characters.length < 2) {
      console.log('Not enough characters to start a battle.');
      return;
    }

    let [char1, char2] = this.characters;
    while (char1.health > 0 && char2.health > 0) {
      char1.attack(char2);
      if (char2.health > 0) {
        char2.attack(char1);
      }
    }
  }
}

// Example usage:
const hero = new Character('Hero', 100, 15);
const monster = new Character('Monster', 80, 10);

const game = new Game();
game.addCharacter(hero);
game.addCharacter(monster);

game.startBattle();
