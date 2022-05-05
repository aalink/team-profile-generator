const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github
  }
  getName() {}
  getId() {}
  getEmail() {}
  getGithub() {}
  getRole() {
    return 'Engineer'
  }
}

const engineer01 = new Engineer("Engineer", "en-01", "engineer@company.com");

console.log(engineer01.name, "|||",  engineer01.id, "|||",  engineer01.email);
