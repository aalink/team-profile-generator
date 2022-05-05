const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school
  }
  getName() {}
  getId() {}
  getEmail() {}
  getSchool() {}
  getRole() {
    return 'Intern'
  }
}

// const intern01 = new Intern("Intern", "in-01", "intern@company.com");

// console.log(intern01.name, "|||",  intern01.id, "|||",  intern01.email);

module.exports = Intern;
