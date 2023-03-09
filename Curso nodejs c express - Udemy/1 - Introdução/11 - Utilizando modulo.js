const fs = require("fs"); // File system

fs.readFile("10 - primeiroPrograma.js", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});
