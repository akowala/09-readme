const fs = require ("fs");
const inquirer = require("inquirer");
const createMD = require('./generateMD');
    console.log(generateMD);

inquirer
    .prompt([
    {
    type: "input",
    message: "Please provide the name of your project.",
    name: "name"
}, {
    type: "input",
    message:"Please enter a desription of your project.",
    name: "description"
}, {
    type: "input",
    message:"Please include all information about installation instructions",
    name:"installation"
}, {
    type:"input",
    message:"Please include details about the usage of your project.",
    name:"usage"
}, {
    type:"input",
    message:"Please include contribution guidelines.",
    name:"contributions"
}, {
    type:"input",
    message:"Please including testing instructions for your project.",
    name: "testing"
}, {
    type: "list",
    message:"Please choose from a list of licenses for your application.",
    name: "license",
    choices:[ "MIT", "Apache 2.0", "Mozilla Public, 2.0"]
}, {
    type: "input",
    message: "Please enter your GitHub username.",
    name:"github"
}, {
    type: "input",
    message: "Please enter your email.",
    name: "email"
}
])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();