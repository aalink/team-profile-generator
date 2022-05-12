
//Generate template literal for manager HTML
function generateManager(manager) {
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
    `;
}

//Generate template literal for engineer HTML
function generateEngineer(engineers) {
  const engineerHTML = engineers.map((engineer) => `
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
    `);
    return engineerHTML.join()
}

//Generate template literal for intern HTML
function generateIntern(interns) {
  const internHTML = interns.map((intern) => `
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
    `);
    return internHTML.join()
}

// module.exports = team => {

function generateTeam(members) {
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
          ${generateManager(members.manager)}
          ${generateEngineer(members.engineers)}
          ${generateIntern(members.interns)}


      </section>
  
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
}

module.exports = generateTeam;