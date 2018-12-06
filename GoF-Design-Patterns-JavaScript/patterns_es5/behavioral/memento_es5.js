function Memento_ES5(value) {
  this.value = value;
}

var Originator_ES5 = {
  store: function(val) {
    return new Memento_ES5(val);
  },

  restore: function(memento) {
    return memento.value;
  }
};

function Caretaker_ES5() {
  this.values = [];
}

Caretaker_ES5.prototype.addMemento = function(memento) {
  this.values.push(memento);
};

Caretaker_ES5.prototype.getMemento = function(index) {
  return this.values[index];
};
