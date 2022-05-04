const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
  }
}

const manager01 = new Manager("Manager", "ma-01", "manager@company.com");

console.log(manager01.name, "|||",  manager01.id, "|||",  manager01.email);
