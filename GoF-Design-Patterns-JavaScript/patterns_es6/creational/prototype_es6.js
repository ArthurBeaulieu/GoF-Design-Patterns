class Sheep_ES6 {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  clone() {
    return new Sheep_ES6(this.name, this.weight);
  }
}