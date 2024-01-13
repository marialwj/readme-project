const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {   
        message: "What is the name of the project?",
        name: "title"
    },
    {   
        message: "Please provide a table on content",
        name: "table of content"
    },
    {   
        message: "What is the name of the user?",
        name: "userName"
    },
    {  
        message: "Please provide a description of the project",
        name: "description"
    },
    {   
        message: "What is the installation process?",
        name: "installation"
    },
    {   
        message: "How will this project be used?",
        name: "usage"
    },
    {   
        message: "What licenses are required with this project?",
        name: "licenses"
    },
    {   
        message: "Who were the contributors to this project?",
        name: "contribution"
    },
    {   
        message: "What is the test process for this project?",
        name: "test"
    },
    {   
        message: "What is the user github email address?",
        name: "GitHub user email"
    },
    {   
        message: "Please provide a profile picture",
        name: "GitHub profile picture"
    }
]

function init() {
    inquirer
      .prompt(questions)
      .then((inquirerResponse) => {
        console.log("Making ReadMe");
        const markdownContent = generateMarkdown(inquirerResponse);
  
        // Write the generated markdown content to ReadMe.md
        fs.writeFileSync("ReadMe.md", markdownContent);
        
        // Get GitHub user data based on the provided username
        const userName = inquirerResponse.userName;
        axios.get(`https://api.github.com/users/${userName}`)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => {
            console.log("Error fetching GitHub user data:", err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  init();