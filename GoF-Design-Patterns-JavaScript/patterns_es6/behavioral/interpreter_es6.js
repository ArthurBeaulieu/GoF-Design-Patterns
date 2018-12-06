class Sum_ES6 {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() + this.right.interpret();
  }
}

class Substract_ES6 {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() - this.right.interpret();
  }
}


class Num_ES6 {
  constructor(val) {
    this.val = val;
  }

  interpret() {
    return this.val;
  }
}
