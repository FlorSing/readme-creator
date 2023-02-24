const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Add a short description explaining the what, why, and how of the project. '
  },
  // {
  //   type: 'checkbox',
  //   name: 'tableOfContents',
  //   message: 'Do you want to add a table of contents?',
  //   choices: ['Installation', 'Usage', 'License', 'Contribution Guideline', 'Tests'],
  // },
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
    type: 'checkbox',
    name: 'license',
    message: 'Add/choose a license.',
    choices: ['Apache License 2.0', 'GNU General Public License v3.0','MIT License', 'BSD 3', 'None'],
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
    name: 'github',
    message: 'What is your GitHub ID?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  
];

  inquirer.prompt(questions).then((data) => {
    
    console.log('\nGenerating README file...\n');

    //license choices
    const apache = {
      http: 'https://choosealicense.com/licenses/apache-2.0/',
      badge: 'https://img.shields.io/badge/License-Apache%20License%202.0-red.svg'
    };
    const bsd = {
      http: 'https://choosealicense.com/licenses/bsd-3-clause/',
      badge: 'https://img.shields.io/badge/License-BSD3-green.svg'
    };
    const gnu = {
      http: 'https://choosealicense.com/licenses/gpl-3.0/',
      badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg'
    };
    const mit = {
      http: 'https://choosealicense.com/licenses/mit/',
      badge: 'https://img.shields.io/badge/License-MIT-yellow.svg'
    };

    //destructure items for table of contents:
    const contents = ['- [Installation](#installation)', '- [Usage](#usage)', '- [License](#license)', '- [Contributing](#contributing)', '- [Tests](#tests)', '- [Questions](#questions)'];
    const [installation, usage, license, contributing, tests, questions] = contents;

    //text file to append to readme file == these are the text content of README file 
    const readmeText = `# ${data.title} \n
    \n ## Description \n\n ${data.description}\n
    \n ## Table of Contents \n
    \n ${installation}\n
    \n ${usage}\n
    \n ${license}\n
    \n ${contributing}\n
    \n ${tests}\n
    \n ${questions}\n
    \n ## Installation \n\n ${data.installation}\n
    \n ## Usage \n\n ${data.usage}\n
    \n ## License \n\n ${data.license}\n
    \n ## Contributing \n\n ${data.contributing}\n
    \n ## Tests \n\n ${data.tests}\n
    \n ## Questions \n
    \n Please leave any comment or questions at: ${data.github}\n
    \n You can also drop an email at: ${data.email}`;

    //write readme file and then append the file with text variable created from above
    fs.writeFile('READMEproj.md', '', (err) => err ? console.error(err) : console.log('...README file created'));
    fs.appendFile('READMEproj.md', readmeText, (err) => err ? console.error(err) : console.log('...README text appended'));

  });




    