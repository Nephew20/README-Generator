//packages used in the project
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

//generate the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('File Generated!'))
}


//function that runs the app
function init() {

    //questions for the user 
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
            message: 'Provide instructions and examples for use:',
            name: 'usage'
        },

        {
            type: 'list',
            message: 'Select one of these licenses if they were used, if not select N/A',
            name: 'license',
            choices: ['MIT', 'ISC', 'Zlib', 'N/A']
        },
        {
            type: 'input',
            message: 'Any Contribution guidelines?',
            name: 'contributions'
        },
        {
            type: 'input',
            message: 'Any testing instructions?',
            name: 'tests'
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
        if (answers == 'undefined') {
            answers = ' '
        }
       writeToFile('README.md', generateMarkdown(answers))

    })
}

//call to run the app
init();
