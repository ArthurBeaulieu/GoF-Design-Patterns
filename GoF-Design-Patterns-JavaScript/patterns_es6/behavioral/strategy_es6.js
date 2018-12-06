class ShoppingCart_ES6 {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout() {
    return this.discount(this.amount);
  }

  setAmount(amount) {
    this.amount = amount;
  }
}

function GuestStrategy_ES6(amount) {
  return amount;
}

function RegularStrategy_ES6(amount) {
  return amount * 0.9;
}

function PremiumStrategy_ES6(amount) {
  return amount * 0.8;
}
