function Sheep_ES5(name, weight) {
  this.name = name;
  this.weight = weight;

  this.clone = function() {
    return new Sheep_ES5(this.name, this.weight);
  }
}
