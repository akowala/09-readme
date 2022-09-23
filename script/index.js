const fs = require ("fs");
const inquirer = require("inquirer");
const { Z_FIXED } = require("zlib");
const createMD = require('./generateMD');

inquirer
    .prompt([
    {
    type: "input",
    message: "Please provide the name of your project.",
    name: "name"
}, {
    type: "editor",
    message:"Please enter a desription of your project.",
    name: "description"
}, {
    type: "editor",
    message:"Please include all information about installation instructions",
    name:"installation"
}, {
    type:"editor",
    message:"Please include details about the usage of your project.",
    name:"usage"
}, {
    type:"editor",
    message:"Please include contribution guidelines.",
    name:"contributions"
}, {
    type:"editor",
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
    message: "pleae enter your email.",
    name: email
}
])
// this needs to be fixed

// .then((response)=>
//     fs.appendFile('generateMD', createREADME(data),(err) => 
//         err ? console.log(err) : console.log("Look at your readme page!")
//     )
//     );