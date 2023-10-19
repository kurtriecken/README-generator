// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

let textToWrite = "# ${title}\n\n## Description\n\n${description}\n\n## Installation\n\n${intallation}\n\n## Usage\n\n${usage}\n\n## License\n\n${license}## Credits\n\n[${name}'s GitHub](${gitHub})\n\n## How to Contribute\n\n${contributions}";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter your gitHub profile URL:',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How is this project installed?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How will this project be used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please share how others may contribute to this project.',
        name: 'contributions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license',
        choices: [
            {
                name: 'MIT',
            },
            {
                name: 'A different license',
            },
            {
                name: 'A thirD choice NO WAY',
            }
        ],
        default: 'A different license',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const {name, gitHub, title, description, installation, usage, contributions, license} = data;
    fs.mkdirSync("YourFileIsInHere");
    fs.writeFile(fileName, `# ${title}\n\n## Description\n\n${description}\n\n## Table of Contents\n\n-[Installation](#installation)\n\n-[Usage](#usage)\n\n-[License](#license)\n\n-[Credits](#credits)\n\n-[Contributions](#how-to-contribute)\n\n## Installation\n\n${installation}\n\n## Usage\n\n${usage}\n\n## License\n\n${license}\n\n## Credits\n\n[${name}'s GitHub](${gitHub})\n\n## How to Contribute\n\n${contributions}`, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile("./YourFileIsInHere/readMePlease.md", response);
        })
}

// Function call to initialize app
init();


