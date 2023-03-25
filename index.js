// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./markdown/generateMarkdown')

// TODO: Create an array of questions for user input
// const questions = ['What is the title? ', 'Give a description of the project: ',  ', ' ', ' '];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('File Generated!'))
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title?',
            name: 'title'
        },
        {
           type: 'input',
           message: 'Give a description of the project:',
           name: 'description'
        },
        {
            type: 'input',
            message: 'What are the steps to install the project?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Any Contribution guidelines?',
            name: 'contributions'
        },
        {
            type: 'input',
            message: 'Any testing instructions?',
            name: 'instructions'
        },
        {
            type: 'input',
            message: 'What is your username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        }
    ]).then((answers) => {
       writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
