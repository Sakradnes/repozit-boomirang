// Враг.

class Enemy {
  constructor({position}) {
    this.generateSkin();

    this.position = position

    this.position = position;

  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    console.log('Enemy is dead!');
    this.position = ' ';
  }
}

module.exports = Enemy;
