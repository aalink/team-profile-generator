const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
  }
}

const intern01 = new Intern("Intern", "in-01", "intern@company.com");

console.log(intern01.name, "|||",  intern01.id, "|||",  intern01.email);
