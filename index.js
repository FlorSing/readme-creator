const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Add a shor description explaining the what, why, and how of the project. '
  },
  {
    type: 'checkbox',
    name: 'tableOfContents',
    message: 'Do you want to add a table of contents?',
    choices: ['Installation', 'Usage', 'License', 'Contribution Guideline', 'Tests'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.'
  },
  {
    type: 'choices',
    name: 'license',
    message: 'Add/choose a license.'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Guidelines on how to contribute. '
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Examples of how to run the application.'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Email for where to send questions.'
  },
  
];

  inquirer.prompt(questions).then((data) => {
    
    console.log(JSON.stringify(data, null, '  '));
    const contents = ['- [Installation](#installation)', '- [Usage](#usage)', '- [License](#license)', '- [Contributing](#contributing)', '- [Tests](#tests)'];
    const [installation, usage, license, contributing, tests] = contents;

    const readmeText = `# ${data.title} \n
    \n ## Description \n\n ${data.description}\n
    \n ## Table of Contents \n
    \n ${installation}\n
    \n ${usage}\n
    \n ${license}\n
    \n ${contributing}\n
    \n ${tests}\n
    \n ## Installation \n\n ${data.installation}\n
    \n ## Usage \n\n ${data.usage}\n
    \n ## License \n\n ${data.license}\n
    \n ## Contributing \n\n ${data.contributing}\n
    \n ## Tests \n\n ${data.tests}\n
    \n ## Questions \n\n ${data.questions}\n\n`;

    fs.writeFile('README.md', '', (err) => err ? console.error(err) : console.log('README file created'));

    fs.appendFile('README.md', readmeText, (err) => err ? console.error(err) : console.log('readme text appended'));
    });
