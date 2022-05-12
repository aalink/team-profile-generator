const Employee = require("../lib/Employee");

describe("Employee Class Test", () => {
  describe("Testing Properties:", () => {
    it("Confirm that type is object", () => {
      const employee = new Employee();
      expect(typeof employee).toBe("object");
    });
    it("Confirm that name property can be set.", () => {
      const name = "Aaron";
      const employee = new Employee(name);
      expect(employee.name).toBe(name);
    });
    it("Confirm that ID property can be set.", () => {
      const id = "1234";
      const employee = new Employee("Aaron", id);
      expect(employee.id).toBe(id);
    });
    it("Confirm that Email property can be set.", () => {
      const email = "aaron@company.com";
      const employee = new Employee("Aaron", 1234, email);
      expect(employee.email).toBe(email);
    });
  });
  describe("Testing Methods to get properties:", () => {
      it("Testing getName() method", () => {
          const name = "Aaron"
          const employee = new Employee(name, 1234, "aaron@company.com");
          const getNameTest = employee.getName()
          expect(getNameTest).toBe(name)
      })
      it("Testing getId() method", () => {
        const id = 1234
        const employee = new Employee("Aaron", id, "aaron@company.com");
        const getIdTest = employee.getId()
        expect(getIdTest).toBe(id)
    })
    it("Testing getEmail() method", () => {
        const email = "aaron@company.com"
        const employee = new Employee("Aaron", 1234, email);
        const getEmailTest = employee.getEmail()
        expect(getEmailTest).toBe(email)
    })
    it("Testing getRole() method", () => {
        const role = "Employee"
        const employee = new Employee("Aaron", 1234, "aaron@company.com");
        const getRoleTest = employee.getRole()
        expect(getRoleTest).toBe(role)
    })
  });
});
