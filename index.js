// Imports needed
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for the prompt function
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter your gitHub username:',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
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
        message: 'Please share how others may contribute to this project',
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

// Calls the necessary function to write the text for the README
// Then writes that text to a markdown file
function writeToFile(fileName, data) {
    let text = generateMarkdown(data);
    fs.writeFile(fileName, text, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// Initialization including invoking inquirer to prompt the user with quetsions
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile("./YourFileIsInHere/README.md", response);
        })
}

// Function call to initialize app
init();