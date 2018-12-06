class Tax_ES6 {
  calc(value) {
    if (value >= 1000) {
      value = this.overThousand(value);
    }

    return this.complementaryFee(value);
  }

  complementaryFee(value) {
    return value + 10;
  }
}

class Tax1_ES6 extends Tax_ES6 {
  constructor() {
    super();
  }

  overThousand(value) {
    return value * 1.1;
  }
}

class Tax2_ES6 extends Tax_ES6 {
  constructor() {
    super();
  }

  overThousand(value) {
    return value * 1.2;
  }
}
