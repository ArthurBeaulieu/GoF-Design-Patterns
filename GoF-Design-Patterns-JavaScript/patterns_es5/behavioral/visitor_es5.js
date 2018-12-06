function BonusVisitor_ES5(employee) {
  if (employee instanceof Manager_ES5) {
    employee.bonus = employee.salary * 23;
  }

  if (employee instanceof Developer_ES5) {
    employee.bonus = employee.salary * 1.01;
  }

  return employee.bonus;  
}

function Employee_ES5() {
  this.bonus = 0;
}

Employee_ES5.prototype.accept = function(visitor) {
  return visitor(this);
};

function Manager_ES5(salary) {
  this.salary = salary;
}

Manager_ES5.prototype = Object.create(Employee_ES5.prototype);

function Developer_ES5(salary) {
  this.salary = salary;
}

Developer_ES5.prototype = Object.create(Employee_ES5.prototype);