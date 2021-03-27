const inquirer = require('inquirer');
const fs = require('fs');


//create prompts
const questions = [
  // What is your project tit
  {
    type: 'input',
    name: 'projectname',
    message: 'What is the title of your project?'
  },
  // Please Describe your project (please note, this description will appear exactly as you enter it.)
  {
    type: 'input',
    name: 'description',
    message: 'Please Describe your project (please note, this description will appear exactly as you enter it.)'
  },
  // please enter your Installation instructions
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter your installation instructions. (please note, these will appear exactly as entered)'
  },
  //please enter your usage information
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter instructions for use of the application. (please note, these will appear exactly as entered)'
  },
  //contribution guidelines
  {
    type: 'list',
    name: 'contributions',
    message: 'How would you like people to contribute?',
    choices: [
      'No contributions',
      'Please email suggestions',
      'Open source',
    ],
  },
  //test instructions
  {
    type: 'input',
    name: 'test',
    message: 'Please enter a test for the application. (please note, this will appear exactly as entered)'
  },
  //Please select your liscense
  {
    type: 'list',
    name: 'license',
    message: 'Please select your license',
    choices: [
      'MIT License',
      'Mozilla Public License',
      'WTFPL',
    ],
  },
  //What is your GitHub UserName
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?'
  },
  //What is your Email address
  {
    type: 'input',
    name: 'e-mail',
    message: 'What is your E-mail address?'
  },
];


const generateReadMe = (response) =>

  `# ${response.projectname}
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)


## Description
${response.projectname} is intended to ${response.description} ______________. 

### Table of Contents
* [Installation](#Installation)
* [Usage Information](#Usage-Information)
* [Liscense](#Liscense)
* [Contribution Guidelines](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)


## Installation 
${response.installation}

## Usage Information
${response.usage}

## Liscense
Licensed by the ${response.license} liscense.

## Contributing
${response.contributions} 

## Tests
${response.test}

## Questions
Github: ${response.github}
Email: ${response.e-mail}

`;



const init = () => {
  inquirer.prompt(questions)
    .then((response) => {
      try {
        const readme = generateReadMe(response);
        fs.writeFileSync(`${response.projectname}.md`, readme);
        console.log('readme successfully created');
      } catch (error) {
        console.log(error);
      }
});
};

init();





















