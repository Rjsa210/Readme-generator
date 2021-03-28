module.export = [
  // What is your project title
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
