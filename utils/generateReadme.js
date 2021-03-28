
module.exports = {
  generateLicenseBadge: function(response) {
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
  },

  generateContributions: function(response) {
    switch (response.contributions) {
      case 'No contributions':
        return `Unfortunately, ${response.projectname} is not accepting contributions at this time.`
        break;
      case 'Please email suggestions':
        return `Please send all comments and suggestions via email to: ${response.email}`
      default:
        return `${response.projectname} is open source`
    }
  },

  genReadme: function(response) {
    let licenseBadge = module.exports.generateLicenseBadge(response);
    let contribution = module.exports.generateContributions(response);
    return `# ${response.projectname}

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
Email: ${response.email}`;


  }
}
