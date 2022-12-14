// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
   - [name](name)
   - [description](#description)
   - [installation](#installation)
   - [usage](#usage)
   - [contributions](#contributions)
   - [testing](#testing)
   - [license](#license)

   ## Name
   ${data.name}
   ## Description
   ${data.description}
   ## Installation
   ${data.installation}
   ## Usage
   ${data.usage}
   ## Contributions
   ${data.contributions}
   ## Testing
   ${data.testing}
   ## License
   ${data.license}
`;
}

module.exports = generateMarkdown;