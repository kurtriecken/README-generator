// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// const renderLicenseBadge = require('./utils/generateMarkdown.js');
// const renderLicenseLink = require('./utils/generateMarkdown.js');
// const renderLicenseSection = require('./utils/generateMarkdown.js');



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
                name: 'Apache 2.0',
            },
            {
                name: 'No license',
            }
        ],
        default: 'Apache 2.0',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log(data.license);
    // let badge = renderLicenseBadge(data.license);
    // let link = renderLicenseLink(data.license);
    // let licenseMd = renderLicenseSection(data.license, link);
    // console.log(licenseMd);
    let text = generateMarkdown(data);
    console.log(`text generated is: ${text}`);
    fs.writeFile(fileName, text, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile("./YourFileIsInHere/README.md", response);
        })
}

// Function call to initialize app
init();