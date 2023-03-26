// const License = require('github-licenses');
//const gitLicense = require('github-licenses');
//console.log(License.MIT)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license == 'N/A') {
    return ' '
  }
  else {
    return '![License](https://img.shields.io/badge/License-'+ license + '-brightgreen)'
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'N/A') {
    return ' '
  }
  else {
    return 'https://opensource.org/licenses/' + license
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'N/A') {
    return ' '
  }
  else {
    return '## License\n Click on the link to learn more about ' + license
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
## Description
  
  ${data.description}

  ## Table of Contents 
   - [Installation](#installation)
   - [Usage](#usage)
   - [Contributions](#contributions)
   - [Tests](#tests)
   - [Questions](#questions)

  ## Installation
  
  ${data.installation}

  ## Usage 

  ${data.usage}

  ${renderLicenseSection(data.license)}\n
  ${renderLicenseLink(data.license)}
   

  ## Contributions 

  ${data.contributions}

  ## Tests

  ${data.tests}

  ## Questions

  [${data.username}](https://github.com/${data.username}?tab=repositories)\n
  
  For any future questions you can contact me at my email: ${data.email}
`;


}

module.exports = generateMarkdown;
