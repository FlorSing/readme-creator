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
  {
    type: 'input',
    name: 'installation',
    message: 'What installations are required in your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions for use.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Add/choose a license.',
    choices: ['Apache License 2.0', 'GNU General Public License v3.0','MIT License', 'BSD 3-Clause', 'None'],
    filter (value){
      return badge = value;
  }},
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
    
    // console.log(JSON.stringify(data, null, '  '))

   // console.log(data.license);

    console.log('\nGenerating README file...\n');

    //license choice

    // const licenseChoices = new Map([
    //   ['Apache License 2.0',  '![License: Apache2.0](https://img.shields.io/badge/License-Apache%20License%202.0-red.svg)'],
    //   ['BSD 3-Clause',  '![License: BSD-3 Clause](https://img.shields.io/badge/License-BSD3-green.svg)'],
    //   ['GNU General Public License v3.0', '![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)'],
    //   ['MIT License', '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)']
    // ])
    // ;
    //   for (const [key, value] of licenseChoices) {
    //     if (data.license==key){
    //       console.log(value);
    //     }
    // };

  // const badge = value;

  // console.log(badge);
    //destructure items for table of contents:
    const contents = ['- [Installation](#installation)', '- [Usage](#usage)', '- [License](#license)', '- [Contributing](#contributing)', '- [Tests](#tests)', '- [Questions](#questions)'];
    const [installation, usage, license, contributing, tests, questions] = contents;

    //text file to append to readme file == these are the text content of README file 
    const readmeText = `# ${data.title} \n
    \n ${badge} \n
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
    \n ## License \n\n ${data.license} \n
    \n ## Contributing \n\n ${data.contributing}\n
    \n ## Tests \n\n ${data.tests}\n
    \n ## Questions \n
    \n Please leave any comment or questions at: ${data.github}\n
    \n You can also drop an email at: ${data.email}`;

    //write readme file and then append the file with text variable created from above
    fs.writeFile('READMEproj.md', '', (err) => err ? console.error(err) : console.log('...README file created'));
    fs.appendFile('READMEproj.md', readmeText, (err) => err ? console.error(err) : console.log('...README text appended'));

  });




  // if (value == 'Apache License 2.0'){
  //   badge = '![License: Apache2.0](https://img.shields.io/badge/License-Apache%20License%202.0-red.svg)'
  //   link = 'https://choosealicense.com/licenses/apache-2.0/'
  // } else if(value == 'GNU General Public License v3.0'){
  //   badge = '![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  //   link = 'https://choosealicense.com/licenses/gpl-3.0/' 
  // } else if (value == 'MIT License'){
  //   badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  //   link = 'https://choosealicense.com/licenses/mit/'
  // } else if (value == 'BSD 3-Clause'){
  //   badge = '![License: BSD-3 Clause](https://img.shields.io/badge/License-BSD3-green.svg)'
  //   link = 'https://choosealicense.com/licenses/bsd-3-clause/'
  // } else badge = null; 