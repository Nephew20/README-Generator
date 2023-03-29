// function that generates the license badge 
function renderLicenseBadge(license) {
  if (license == 'N/A') {
    return ' '
  }
  else {
    return '![License](https://img.shields.io/badge/License-'+ license + '-brightgreen)'
  }
}

// function to generate the link to the licenses 
function renderLicenseLink(license) {
  if (license == 'N/A') {
    return ' '
  }
  else {
    return 'https://opensource.org/licenses/' + license
  }
}

//function to generate the entire license section
function renderLicenseSection(license) {
  if (license == 'N/A') {
    return ' '
  }
  else {
    return '## License\n Click on the link to learn more about the ' + license +' license'
  }
}

//generates the skeleton readme that takes in user input 
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

  Github Repo: [${data.username}](https://github.com/${data.username}?tab=repositories)\n
  
  For any future questions you can contact me at my email: ${data.email}
`;


}

module.exports = generateMarkdown;
