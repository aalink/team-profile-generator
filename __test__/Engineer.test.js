const Engineer = require("../lib/Engineer");

describe("Engineer Class Test", () => {
  describe("Testing Properties:", () => {
    it("Confirm that GitHub property can be set.", () => {
        const github = "www.github.com/aaron";
        const engineer = new Engineer("Aaron", 1234, "aaron@company.com", github);
        expect(engineer.github).toBe(github);
      });
  });
  describe("Testing Methods to get properties:", () => {
    it("Testing getGithub() method", () => {
        const github = "www.github.com/aaron";
        const engineer = new Engineer("Aaron", 1234, "aaron@company.com", github);
        const getGithubTest = engineer.getGithub()
        expect(getGithubTest).toBe(github)
    })
    it("Testing getRole() method", () => {
        const role = "Engineer"
        const engineer = new Engineer("Aaron", 1234, "aaron@company.com");
        const getRoleTest = engineer.getRole()
        expect(getRoleTest).toBe(role)
    })
  });
});
