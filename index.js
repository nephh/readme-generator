// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input

const licenseChoices = [
  'MIT License',
  'GNU General Public License (GPL)',
  'Apache License 2.0',
  'BSD 3-Clause License',
  'Creative Commons Attribution 4.0 International License',
  'Mozilla Public License 2.0',
];

const questions = [
  {
    type: "input",
    message: "What would you like the filename to be?",
    name: "fileName",
  },
  {
    type: "input",
    message: "What would you like the readme title to be?",
    name: "title",
  },
  {
    type: "list",
    message: "Choose a license for your project: ",
    name: "license",
    choices: licenseChoices,
  },
  {
    type: "input",
    message: "Write a short introduction for your app.",
    name: "intro",
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) => {
    writeToFile(`${response.fileName}.md`, generate(response));
  }
  );
}

// Function call to initialize app
init();
