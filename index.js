const fs = require('fs');
test = "Employee"
const content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${test}</title>
    <h1>${test}</h1>
</head>
<body>
    
</body>
</html>
`;
fileName = 'index.html'
fs.writeFile(`./dist/${fileName}`, content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
