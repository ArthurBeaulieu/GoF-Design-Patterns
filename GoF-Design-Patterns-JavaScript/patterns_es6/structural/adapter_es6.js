class Soldier_ES6 {
  constructor(level) {
    this.level = level;
  }

  attack() {
    return this.level;
  }
}

class Jedi_ES6 {
  constructor(level) {
    this.level = level;
  }

  attackWithSaber() {
    return this.level * 50;
  }
}

class JediAdapter_ES6 {
  constructor(jedi) {
    this.jedi = jedi;
  }

  attack() {
    return this.jedi.attackWithSaber();
  }
}
