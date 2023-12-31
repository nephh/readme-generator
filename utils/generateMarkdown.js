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
      licenseBadge = "";
  }
  return licenseBadge;
}

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

function renderLicense(license) {
  if (license === "None") {
    return "";
  } else {
    return `## License

This project is licensed under the terms of the [${license}](${renderLicenseLink(
      license
    )}).
    
You can find the full license text in the [LICENSE](LICENSE) file.`;
  }
}

function renderConduct(contribute) {
  if (contribute) {
    return `## Contributing

I welcome and appreciate contributions from the open-source community! Before you get started, please take a moment to review the guidelines and familiarize yourself with the Code of Conduct.

### Code of Conduct

I am committed to providing a welcoming and respectful environment for all contributors. Please read the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) to understand the expectations for behavior and interactions within this project.

### How to Contribute

1. Fork this repository to your GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch for your contribution: 'git checkout -b feature/your-feature-name'
4. Make your changes, add your code, and commit your work.
5. Push your changes to your forked repository on GitHub: 'git push origin feature/your-feature-name'
6. Open a Pull Request (PR) to the original repository. Please provide a clear and concise description of your changes in the PR.
7. I will review your PR and may provide feedback or request changes. Once your contribution is approved, it will be merged into the main project.

Thank you for your interest in contributing to the project!

  `;
  } else {
    return "";
  }
}

function renderTesting(test) {
  const testContent = test;
  if (testContent.trim() === "") {
    return "";
  } else {
    return `## Testing

${testContent}`;
  }
}

function renderTableOfContents(test, contribute, license) {
  const testingSection =
    test.trim() === ""
      ? ``
      : `
- [Testing](#testing)`;

const licenseSection =
    license === "None"
      ? ``
      : `
- [License](#license)`;

  const contributeSection = contribute
    ? `
- [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
  - [How to Contribute](#how-to-contribute)`
    : ``;

  return `## Table of Contents

- [Installation](#installation)
- [Usage](#usage) ${testingSection}
- [Credits](#credits) ${contributeSection} ${licenseSection}
- [Questions and Contact](#questions-and-contact)`;
}

function generateMarkdown(data) {
  const {
    title,
    license,
    contribute,
    intro,
    install,
    usage,
    email,
    github,
    test,
  } = data;

  const contributeBadge = contribute
    ? `[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)`
    : ``;

  const licenseBadge =
    license != "None"
      ? `[![License Badge](${renderLicenseBadge(license)})](${renderLicenseLink(
          license
        )})`
      : ``;

  return `# ${title}

${licenseBadge}
${contributeBadge}

${intro}

${renderTableOfContents(test, contribute)}

## Installation

${install}

## Usage

${usage}

${renderTesting(test)}

## Credits

N/A

${renderConduct(contribute)}

${renderLicense(license)}

## Questions and Contact

Thank you for checking out the project!

If you have any questions or need further assistance with this project, feel free to reach out. You can contact me through the following methods:
    
- **GitHub Issues**: Please use the Github Issue Tracker for bug reports, feature requests, or general questions related to the project. You can find my Github profile @[${github}](https://github.com/${github})
    
- **Email**: You can also email me at [${email}](mailto:${email}) for any private or sensitive inquiries.
`;
}

module.exports = generateMarkdown;
