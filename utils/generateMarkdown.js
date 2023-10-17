// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;

  switch (license) {
    case "MIT License":
      licenseBadge = "https://img.shields.io/badge/License-MIT-blue.svg";
      break;
    case "GNU General Public License (GPL)":
      licenseBadge = "https://img.shields.io/badge/License-GPL%20v3-blue.svg";
      break;
    case "Apache License 2.0":
      licenseBadge =
        "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      break;
    case "BSD 3-Clause License":
      licenseBadge =
        "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
      break;
    case "Creative Commons Attribution 4.0 International License":
      licenseBadge =
        "https://img.shields.io/badge/License-CC%20BY%204.0-blue.svg";
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = "https://img.shields.io/badge/License-MPL%202.0-blue.svg";
      break;
    default:
      licenseBadge = "https://img.shields.io/badge/License-None-red.svg";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseURL;

  switch (license) {
    case "MIT License":
      licenseURL = "https://opensource.org/licenses/MIT";
      break;
    case "GNU General Public License (GPL)":
      licenseURL = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache License 2.0":
      licenseURL = "https://www.apache.org/licenses/LICENSE-2.0";
      break;
    case "BSD 3-Clause License":
      licenseURL = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "Creative Commons Attribution 4.0 International License":
      licenseURL = "https://creativecommons.org/licenses/by/4.0/";
      break;
    case "Mozilla Public License 2.0":
      licenseURL = "https://www.mozilla.org/en-US/MPL/2.0/";
      break;
    default:
      licenseURL = "";
  }
  return licenseURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

[![License Badge](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

This repository contains the HTML and CSS code for a password generator that will generate a password for the user.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Changes Made](#changes-made)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Introduction

${data.intro}

## Installation

N/A

## Changes Made

The code that was added by myself are the generatePassword function, as well as all the code within the writePassword function
in order for the application to work. Comments within the file give a more in-depth look at the code written.
## Usage

See commented lines in the JavaScript file to see the specific changes. Website is hosted [here.](https://nephh.github.io/basic-password-generator)


## Credits

N/A

## License

This project is licensed under the terms of the [${data.license}](${renderLicenseLink(data.license)}).

You can find the full license text in the [LICENSE](LICENSE) file.

`;
}

module.exports = generateMarkdown;
