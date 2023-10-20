// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 0;
  }

  fly() {
    this.moveRight();
    if (this.boomerang.position === this.enemy.position) {
      this.enemy.die();
    }
    this.moveLeft();
  }

  moveLeft() {
    // Идём влево.
    this.position -= 2;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
