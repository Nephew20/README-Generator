// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');

// TODO: Create an array of questions for user input
const questions = ['What is the title? ', 'Give a description of the project: ', 'What are the steps to install the project? ', 'Any Contribution guidelines? ', 'Any testing instructions? '];
console.log(questions)

// TODO: Create a function to write README file
const readMe = 'README.md'

function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), (err) => 
    err ? console.error(err) : console.log('File Generated!'))
}

writeToFile(readMe, questions)
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
