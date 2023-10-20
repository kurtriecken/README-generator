// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (license == 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return '(https://opensource.org/licenses/MIT)\n\n'
  }
  else if (license == 'Apache 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)\n\n'
  }
  else return '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // console.log(`license is ${license}`);
  if (license == 'No license') {
    return '\n\n## License\n\nThis project does not include a license.\n\n';
  }
  else {
    let text = `\n\n## License\n\n[This project uses the following license: ${license}]`;
    return text;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);
  // console.log("0000000000000");
  // console.log(badge);
  let link = renderLicenseLink(data.license);
  // console.log("0000000000000");
  // console.log(link);
  let licenseMd = renderLicenseSection(data.license);
  // console.log("0000000000000");
  // console.log(licenseMd);
  
  return `# ${data.title} ${badge}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  -[Installation](#installation)
  
  -[Usage](#usage)
  
  -[License](#license)
  
  -[Credits](#credits)
  
  -[Contributions](#how-to-contribute)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}

  ${licenseMd}${link}

  ## How to Contribute
  
  ${data.contributions}

  ## Questions

  [Please follow this link to my GitHub profile!](https://github.com/${data.gitHub})

  For any additional questions, please [email me here.](mailto:${data.email})

  ## Credits
  
  [${data.name}](${data.gitHub})
`;
}

module.exports = generateMarkdown;
