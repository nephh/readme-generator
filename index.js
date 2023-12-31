const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown.js");

const licenseChoices = [
  "MIT License",
  "GNU General Public License (GPL)",
  "Apache License 2.0",
  "BSD 3-Clause License",
  "Creative Commons Attribution 4.0 International License",
  "Mozilla Public License 2.0",
  "None",
];

const questions = [
  {
    type: "input",
    message: "Enter the title of your project:",
    name: "title",
  },
  {
    type: "list",
    message: "Choose a license for your project:",
    name: "license",
    choices: licenseChoices,
  },
  {
    type: "input",
    message: "Write a short introduction for your project:",
    name: "intro",
  },
  {
    type: "editor",
    message: "Enter the content of your usage section:",
    name: "usage",
    default:
      "Replace this text with instructions on how to use your application.",
  },
  {
    type: "editor",
    message: "Enter the content of your installation section:",
    name: "install",
    default:
      "Replace this text with instructions on how to install your application if needed.",
  },
  {
    type: "editor",
    message: "Enter the content of your usage section:",
    name: "usage",
    default:
      "Replace this text with instructions on how to use your application.",
  },
  {
    type: "editor",
    message: "Enter some content for the testing section if you would like: ",
    name: "test",
    default:
      "Replace this text with instructions on how to test your application. You can save this file blank if your app does not have tests.",
  },
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email address:",
    name: "email",
  },
  {
    type: "confirm",
    message: 'Would you like to add a "Contributing" section to your readme?',
    name: "contribute",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Success! Your readme has been generated.");
  });
}

function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile(`README.md`, generate(response));
  });
}

init();