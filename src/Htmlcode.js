const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");


function generateTeam (team) {
  const generateManager = manager => {
    return `
    <div class="card" style="width: 18rem">
    <h3>${manager.getName()}</h3>
    <div class="card-body">
      <h5 class="card-role">${manager.getRole()}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: ${manager.getEmail()}</li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
    `
  }
  const generateEngineer = engineer => {
    return `
    <div class="card" style="width: 18rem">
    <h3>${engineer.getName()}</h3>
    <div class="card-body">
      <h5 class="card-role">${engineer.getRole()}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: ${engineer.getEmail()}</li>
        <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
      </ul>
    </div>
  </div>
    `
  }
  const generateIntern = intern => {
    return `
    <div class="card" style="width: 18rem">
    <h3>${intern.getName()}</h3>
    <div class="card-body">
      <h5 class="card-role">${intern.getRole()}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: ${intern.getEmail()}</li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>
    `
  }
  const teamMembersArray = []
  teamMembersArray.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)) )
  teamMembersArray.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)) )
  teamMembersArray.push(team.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)) )
}

module.exports = team => {

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
  
      <!-- Bootstrap CSS -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
  
      <title>Team Profile Generator</title>
    </head>
    <body>
      <h1 class="container-fluid text-center bg-dark text-info fw-bold p-5">
        My Team
      </h1>
  
      <section id="data-team-section">
          <div class="d-flex flex-wrap justify-content-center">
          ${generateTeam(team)}

      </section>
  
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  
  `
}