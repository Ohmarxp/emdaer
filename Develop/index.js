// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const markdownGenerator = require('./utils/generateMarkdown')

// Questions for user input
const questions = [
    // Project's name
    {
      type: "input",
      name: "title",
      message: "Please provide your project's title",
    },
    // Project's description
    {
      type: "input",
      name: "description",
      message: "Decribe your project",
    },
    // Instructions for installation
    {
      type: "input",
      name: "installation",
      message: "What are the installation procedures?",
    },
    // Usage information
    {
      type: "input",
      name: "usage",
      message: "How do you use this project? ",
    },
    // Contribution guidelines
    {
      type: "input",
      name: "contribution",
      message: "How can other developers contribute to this project?",
    },
    // Test Instructions
    {
      type: "input",
      name: "testing",
      message: "What are the testing procedures?",
    },
    // License Options
    {
      type: "checkbox",
      name: "licensing",
      message: "Choose a license for your project.",
      options: [   
        "BSD 3-Clause",
        "GNU v3",
        "Mozilla Public License 2.0",
        "Apache 2.0",
        "MIT",
        "Unlicense",
      ],
    },
    // Github Username
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
     
    },
    // Email Address
    {
      type: "input",
      name: "email",
      message: "Enter your email address?",
    }
  ];

// Function to write README file

function writeToFile(file, data) {
  fs.writeFile(file, data, (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Success! Information transferred to the README!");
    }
  });
}
// Function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
