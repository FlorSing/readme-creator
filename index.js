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
    message: 'Add a description.'
  },
  {
    type: 'confirm',
    name: 'tableOfContents',
    message: 'Do you want to add a table of contents?',
    default: true
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Necessary Installations.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage Information.'
  },
  {
    type: 'choices',
    name: 'license',
    message: 'License.'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Contribution guidelines.'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Test Examples.'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Email for questions.'
  },
  
];

  inquirer.prompt(questions).then((data) => {
    
    console.log(JSON.stringify(data, null, '  '))
    
    let title = `# ${data.title} \n\n`;
    let description=  `## Description \n\n ${data.description}`;
    let installation=  `## Installation \n\n ${data.installation}`;
    let usage=  `## Usage \n\n ${data.usage}`;
    let license=  `## License \n\n ${data.license}`;
    let contributing=  `## How to Contribute \n\n ${data.contributing}`;
    let tests=  `## Test Examples \n\n ${data.test}`;
    let questions=  `## Questions \n\n ${data.questions}`;

    fs.writeFile('README.md', '', (err) => err ? console.error(err) : console.log('README'));

    fs.appendFile('README.md', title, (err) => err ? console.error(err) : console.log('title'));

    fs.appendFile('README.md', description, (err) => err ? console.error(err) : console.log('description'));
    
    fs.appendFile('README.md', installation, (err) => err ? console.error(err) : console.log('installation'));

    fs.appendFile('README.md', usage, (err) => err ? console.error(err) : console.log('usage'));

    fs.appendFile('README.md', license, (err) => err ? console.error(err) : console.log('license'));

    fs.appendFile('README.md', contributing, (err) => err ? console.error(err) : console.log('contributing'));

    fs.appendFile('README.md', tests, (err) => err ? console.error(err) : console.log('tests'));

    fs.appendFile('README.md', questions, (err) => err ? console.error(err) : console.log('questions'));

    });
