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
    message: 'What is your GitHub ID?'
  },
  
];

  inquirer.prompt(questions).then((data) => {
    
    console.log('Generating README file...');

    //destructure items for table of contents:
    const contents = ['- [Installation](#installation)', '- [Usage](#usage)', '- [License](#license)', '- [Contributing](#contributing)', '- [Tests](#tests)'];
    const [installation, usage, license, contributing, tests] = contents;

    //text file to append to readme file == these are the text content of README file 
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
    \n ## Questions \n
    \n Please leave any comment or questions at: ${data.questions}\n\n`;

    //write readme file and then append the file with text variable created from above
    fs.writeFile('READMEproj.md', '', (err) => err ? console.error(err) : console.log('README file created'));
    fs.appendFile('READMEproj.md', readmeText, (err) => err ? console.error(err) : console.log('README text appended'));

  });
