const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
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
    default: false
  },
  
  {
    type: 'checkbox',
    name: 'languages',
    message: 'What languages do you speak?',
    choices: ['JavaScript', 'HTML', 'Python'],

  },
  {
    type: 'list',
    name: 'contact',
    message: 'What is preferred method of communication?',
    choices: ['email', 'phone', 'SMS'],
  },

];

  inquirer.prompt(questions).then((answers) => {
    
    console.log('\nnew readme file created:\n');
    console.log(JSON.stringify(answers, null, '  '))
  });


// function to write README file
function writeToFile(fileName, data) {
  let filename = `${answers.name.toLowerCase().split(' ').join('')}.json`;
    fs.writeFile(filename, JSON.stringify(answers, null, ' \t '),(err) =>
      err? console.error(err) : console.log('readme file ready'));
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

/*
Create a command-line application that accepts user input.
When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
The title of my project
Sections entitled:
Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions
When a user enters the project title then it is displayed as the title of the README
When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README


# <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.


*/