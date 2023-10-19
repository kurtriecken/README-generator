// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
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
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);
        })
}

// Function call to initialize app
init();


