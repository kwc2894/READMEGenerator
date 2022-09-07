const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ name, description, install, guide, liscense, contributions, testb, github, linkedin, Email }) =>
  `## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Github](#github)
  - [linkedin](#linkedin)
  - [email](#email)
  ## Description:
  ${name}
  ## Installation:
  ${install}
  ## Usage:
  ${description}
  ## License:
  ${liscense}
  ## How to use:
  ${guide}
  ## Contribution:
  ${contributions}
  ## Testing:
  ${testb}
  ## Github:
  ${github}
  ## linkedin:
  ${linkedin}
  ## Email
  ${Email}`
  ;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the title of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project.',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Provide directions on how to install the project',
    },
    {
      type: 'input',
      name: 'guide',
      message: 'How do you use the project?',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'How should people contribute to the project?',
    },
    {
      type: 'input',
      name: 'testb',
      message: 'How is this tested?',
    },
    {
      type: 'input',
      name: 'liscense',
      message: 'What is the license that is being used?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your linkedIn username'
    },
    {
      type: 'input',
      name: 'Email',
      message: 'Enter your Email.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateREADME(answers);

    fs.writeFile('README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
