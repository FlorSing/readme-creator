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
  
  
];

  inquirer.prompt(questions).then((data) => {
    
    console.log(JSON.stringify(data, null, '  '))
    
    let title = `# ${data.title}`;
    
    let description=  `# Description \n\n ${data.description}`;

    fs.writeFile('title.txt', title, (err) =>
        err ? console.error(err) : console.log('title')
        );

    fs.writeFile('description.txt', description, (err) =>
        err ? console.error(err) : console.log('description')
        );
    
    });
