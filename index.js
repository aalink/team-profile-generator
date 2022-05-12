// Imports
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const makeHTML = require("./src/makeHTML");
// const Htmlcode = require("./src/Htmlcode");

const usedIDList = [];
const assembledTeam = {
  manager: null,
  engineers: [],
  interns: [],
};

// Function to ask questions about a manager
function managerPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "manager",
        message: "What is the team manager's name?",
        validate: function (name) {
          if (name === "") {
            return console.log("You must enter a name, try again.");
          }
          return true;
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's ID?",
        validate: function (id) {
          if (isNaN(id)) {
            return console.log("A number must be used, try again.");
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's EMail",
      },
      {
        type: "input",
        name: "office",
        message: "What is the team manager's office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.manager,
        answers.id,
        answers.email,
        answers.office
      );
      assembledTeam.manager = manager;
      usedIDList.push(answers.id);
      constructTeam();
      console.log(manager);
    });
}

// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

// Function to ask questions about an engineer
function engineerPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineer",
        message: "What is the team engineer's name?",
        validate: function (name) {
          if (name === "") {
            return console.log("You must enter a name, try again.");
          }
          return true;
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the team engineer's ID?",
        validate: function (id) {
          if (isNaN(id)) {
            return console.log("A number must be used, try again.");
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the team engineer's EMail",
      },
      {
        type: "input",
        name: "github",
        message: "What is the team engineer's GitHub?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineer,
        answers.id,
        answers.email,
        answers.github
      );
      assembledTeam.engineer = engineer;
      usedIDList.push(answers.id);
      console.log(engineer);
    });
}

// Function to ask questions about an intern
function internPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "intern",
        message: "What is the team intern's name?",
        validate: function (name) {
          if (name === "") {
            return console.log("You must enter a name, try again.");
          }
          return true;
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the team intern's ID?",
        validate: function (id) {
          if (isNaN(id)) {
            return console.log("A number must be used, try again.");
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the team intern's EMail",
      },
      {
        type: "input",
        name: "School",
        message: "What is the team intern's School?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.intern,
        answers.id,
        answers.email,
        answers.School
      );
      assembledTeam.intern = intern;
      usedIDList.push(answers.id);
      console.log(intern);
    });
}

// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// Function to assemble the team when prompts for employee type are completed.

function constructTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choiceList",
        message: "What type of member would you like to add to the team?",
        choices: ["Engineer", "Intern", "No more members are needed."],
      },
    ])
    .then((answers) => {
      switch (answers.choiceList) {
        case "Engineer":
          engineerPrompts();
          break;
        case "Intern":
          internPrompts();
          break;
        default:
          writeTeamToFile();
      }
    });
}

// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
function writeTeamToFile() {
  fs.writeFile("./dist/index3.html", "makeHTML(assembledTeam)", (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}

managerPrompts();
