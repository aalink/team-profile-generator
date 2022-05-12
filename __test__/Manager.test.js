const Manager = require("../lib/Manager");

describe("Manager Class Test", () => {
  describe("Testing Properties:", () => {
    it("Confirm that Office Number property can be set.", () => {
        const officeNumber = "Georgia Tech";
        const manager = new Manager("Aaron", 1234, "aaron@company.com", officeNumber);
        expect(manager.officeNumber).toBe(officeNumber);
      });
  });
  describe("Testing Methods to get properties:", () => {
    it("Testing getOfficeNumber() method", () => {
        const officeNumber = "Georgia Tech";
        const manager = new Manager("Aaron", 1234, "aaron@company.com", officeNumber);
        const getOfficeNumberTest = manager.getOfficeNumber()
        expect(getOfficeNumberTest).toBe(officeNumber)
    })
    it("Testing getRole() method", () => {
        const role = "Manager"
        const manager = new Manager("Aaron", 1234, "aaron@company.com");
        const getRoleTest = manager.getRole()
        expect(getRoleTest).toBe(role)
    })
  });
});
