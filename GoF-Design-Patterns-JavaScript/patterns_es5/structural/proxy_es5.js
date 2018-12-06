function Car_ES5() {
  this.drive = function(driver) {
    return `${driver.name} is ${driver.age} years old : he can drive.`;
  };
}

function CarProxy_ES5(driver) {
  this.driver = driver;

  this.drive = function() {
    if (this.driver.age < 18) {
      return `${this.driver.name} is ${this.driver.age} years old : he can't drive.`;  
    }

    return new Car_ES5().drive(driver);
  };
}

function Driver_ES5(age) {
  this.age = age;
  this.name = 'Bob'
}

