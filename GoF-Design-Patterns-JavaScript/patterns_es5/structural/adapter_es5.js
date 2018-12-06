function Soldier_ES5(lvl) {
  this.lvl = lvl;
}

Soldier_ES5.prototype.attack = function() {
  return this.lvl;
};

function Jedi_ES5(lvl) {
  this.lvl = lvl;
}

Jedi_ES5.prototype.attackWithSaber = function() {
  return this.lvl * 50;
};

function JediAdapter_ES5(jedi) {
  this.jedi = jedi;
}

JediAdapter_ES5.prototype.attack = function() {
  return this.jedi.attackWithSaber();
};
