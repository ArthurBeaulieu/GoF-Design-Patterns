class Memento_ES6 {
  constructor(value) {
    this.value = value;
  }
}

const Originator_ES6 = {
  store: function(val) {
    return new Memento_ES6(val);
  },

  restore: function(memento) {
    return memento.value;
  }
};

class Caretaker_ES6 {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}
