// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength
    this.hero = new Hero({position: 0}); 
    this.boomerang = new Boomerang ()
    this.enemy = new Enemy({position: trackLength-1});
    this.view = new View(this);
    this.track = [];
    this.regenerateTrack() 
  }

    regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    
    this.track = (new Array(this.trackLength)).fill(' '),
    this.track[this.hero.position] = this.hero.skin,
    this.track[this.enemy.position] = this.enemy.skin,
    this.track[this.boomerang.position+1] = this.boomerang.skin
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }
  check_2() {
    if (this.boomerang.position >= this.enemy.position) {
      this.enemy.die();
      this.boomerang.fly()
    }
  }



  play() {
    setInterval(() => {
      // Let's play!
      this.enemy.moveLeft()
      this.check();
      this.check_2()
      this.regenerateTrack();
      
      setInterval(() => {
        this.boomerang.moveRight()
        this.view.render(this.track);
      },200);
      
      
    },500);
   

  }
}

module.exports = Game;
