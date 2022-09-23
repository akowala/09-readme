const fs = require ("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
    {
    type: "input",
    message: "What is your name?",
    name: "name"
}, {
    type: "input",
    message:"What city and state do you live in?",
    name: "location"
}, {
    type: "input",
    message:"Tell me a little about yourself.",
    name:"bio"
}, {
    type:"linkedin",
    message:"Please provide a link to your LinkedIn.",
    name:"linkedinLink"
}, {
    type:"github",
    message:"Please provide a link to your GitHub.",
    name:"githubLink"
}
])

.then((response)=>
    fs.appendFile('index.html', JSON.stringify(response, null, 2), (err) => 
        err ? console.log(err) : console.log("Success!")
    )
    );