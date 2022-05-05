const fs = require('fs');
const inquirer = require("inquirer");
const Htmlcode = require('./lib/Htmlcode');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Htmlcode = require('./lib/Htmlcode')
test = "Employee"

const testEmp = new Engineer('Employee', '01', 'test@email.com', "aalink")
// const makeHtml = new Htmlcode('Link', 'Hero', 'hero@hyrule.com')
// console.log(makeHtml.html)
console.log(testEmp.name)
console.log(testEmp.id)
console.log(testEmp.email)
console.log(testEmp.github)

fileName = 'index.html'
fs.writeFile(`./dist/${fileName}`, Htmlcode(), err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "manager",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's ID?",
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
    {
      type: "list",
      name: "addemployee",
      message: "Which type of team member would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members.",
      ],
    },
  ]);
};








