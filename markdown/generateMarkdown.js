// const License = require('github-licenses');
//const gitLicense = require('github-licenses');
//console.log(License.MIT)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license == 'undefined') {
    return license = ' '
  } else {
    return  '![License](https://img.shields.io/badge/License-'+ license + '-brightgreen)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
  
## Description
  
  ${data.description}

  ## Table of Contents 
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
   - [Contributions](#contributions)
   - [Tests](#tests)
   - [Questions](#questions)

  ## Installation
  
  ${data.installation}

  ## Usage 

  ${data.usage}

  ## License

   

  ## Contributions 

  ${data.contributions}

  ## Tests

  ${data.tests}

  ## Questions

  [${data.username}](https://github.com/${data.username}?tab=repositories)\n
  ${data.email}
`;


}

module.exports = generateMarkdown;
