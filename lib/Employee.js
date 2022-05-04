class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {}
  getId() {}
  getEmail() {}
  getRole() {}
}

const employee01 = new Employee('Employee', 'em-01', 'employee@company.com')

console.log(employee01.name, "|||",employee01.id, "|||", employee01.email)

module.exports = Employee;
