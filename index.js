const fs = require ("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMd");

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

.then((answers) =>
    fs.writeFile('newreadMe.md', generateMarkdown(answers),(err) =>
    err ? console.log(err):console.log("Thank you!"))
);

