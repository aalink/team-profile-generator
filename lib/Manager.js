const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber
  }
  getOfficeNumber () {
    return this.officeNumber
  }
  getRole() {
    return 'Manager'
  }
}

// const manager01 = new Manager("Manager", "ma-01", "manager@company.com");

// console.log(manager01.name, "|||",  manager01.id, "|||",  manager01.email);

module.exports = Manager;
