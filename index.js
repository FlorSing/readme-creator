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
    
    const readmeText = `# ${data.title} \n
    \n ## Description \n\n ${data.description}\n
    \n ## Installation \n\n ${data.installation}\n
    \n ## Usage \n\n ${data.usage}\n
    \n ## License \n\n ${data.license}\n
    \n ## How to Contribute \n\n ${data.contributing}\n
    \n ## Test Examples \n\n ${data.tests}\n
    \n ## Questions \n\n ${data.questions}\n\n`;

    fs.writeFile('README.md', '', (err) => err ? console.error(err) : console.log('README file created'));

    fs.appendFile('README.md', readmeText, (err) => err ? console.error(err) : console.log('readme text appended'));
    });
