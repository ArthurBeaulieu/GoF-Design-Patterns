class Car_ES6 {
  drive(driver) {
    return `${driver.name} is ${driver.age} years old : she can drive.`;
  }
}

class CarProxy_ES6 {
  constructor(driver) {
    this.driver = driver;
  }

  drive() {
    if (this.driver.age < 18) {
      return `${this.driver.name} is ${this.driver.age} years old : she can't drive.`;  
    }

    return new Car_ES6().drive(this.driver);
  };
}

class Driver_ES6 {
  constructor(age) {
    this.age = age;
    this.name = 'Alice';
  }
}
