function BonusVisitor_ES6(employee) {
  if (employee instanceof Manager_ES6) {
    employee.bonus = employee.salary * 2;
  }

  if (employee instanceof Developer_ES6) {
    employee.bonus = employee.salary * 1.66;
  }

  return employee.bonus;
}

class Employee_ES6 {
  constructor(salary) {
    this.bonus = 0;
    this.salary = salary;
  }

  accept(visitor) {
    return visitor(this);
  }
}

class Manager_ES6 extends Employee_ES6 {
  constructor(salary) {
    super(salary);
  }
}

class Developer_ES6 extends Employee_ES6 {
  constructor(salary) {
    super(salary);
  }
}