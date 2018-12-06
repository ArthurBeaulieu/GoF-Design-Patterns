class ShopFacade_ES6 {
  constructor() {
    this.discount = new Discount_ES6();
    this.shipping = new Shipping_ES6();
    this.fees = new Fees_ES6();
  }

  calc(price) {
    price = this.discount.calc(price);
    price = this.fees.calc(price);
    price += this.shipping.calc();
    return price;
  }
}

class Discount_ES6 {
  calc(value) {
    return value * 0.9;
  }
}

class Shipping_ES6 {
  calc() {
    return 5;
  }
}

class Fees_ES6 {
  calc(value) {
    return value * 1.05;
  }
}