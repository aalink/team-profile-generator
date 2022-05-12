const Intern = require("../lib/Intern");

describe("Intern Class Test", () => {
  describe("Testing Properties:", () => {
    it("Confirm that School property can be set.", () => {
        const school = "Georgia Tech";
        const intern = new Intern("Aaron", 1234, "aaron@company.com", school);
        expect(intern.school).toBe(school);
      });
  });
  describe("Testing Methods to get properties:", () => {
    it("Testing getSchool() method", () => {
        const school = "Georgia Tech";
        const intern = new Intern("Aaron", 1234, "aaron@company.com", school);
        const getSchoolTest = intern.getSchool()
        expect(getSchoolTest).toBe(school)
    })
    it("Testing getRole() method", () => {
        const role = "Intern"
        const intern = new Intern("Aaron", 1234, "aaron@company.com");
        const getRoleTest = intern.getRole()
        expect(getRoleTest).toBe(role)
    })
  });
});
