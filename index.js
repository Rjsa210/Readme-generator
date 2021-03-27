const inquirer = require('inquirer');
const fs = require('fs');


//create prompts
//write function to assign badge
const generateLicenseBadge = (response) => {
  switch (response.license) {
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'Eclipse':
      return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      break;
    case 'IBM Public License':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
      break;
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla Public License':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'WTFPL':
      return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
      break;
    default:
      return '';
  } 
}

generateContributions = (response) => {
  switch (response.contributions) {
    case 'No contributions':
      return `Unfortunately, ${response.projectname} is not accepting contributions at this time.`
      break;
    case 'Please email suggestions':
      return `Please send all comments and suggestions via email to: ${response.email}`
    default:
      return `${response.projectname} is open source`
  }
}

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
      'Apache',
      'Boost',
      'Eclipse',
      'IBM Public License',
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
    name: 'email',
    message: 'What is your E-mail address?'
  },
];


const generateReadMe = (response) => {
  let licenseBadge = generateLicenseBadge(response);
  let contribution = generateContributions(response);
  return (
    `# ${response.projectname}

## Description
${response.description} 

### Contents
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
${licenseBadge}


## Contributing
${contribution} 

## Tests
${response.test}

## Questions
Please send questions to:\n
Github: [${response.github}](https://github.com/${response.github})\n
Email: ${response.email}

`
  );
}


const init = () => {
  inquirer.prompt(questions)
    .then((response) => {
      try {
        const readme = generateReadMe(response);
        fs.writeFileSync(`${response.projectname}_readme.md`, readme);
        console.log('readme successfully created');
      } catch (error) {
        console.log(error);
      }
    });
};

init();





















