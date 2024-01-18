const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
      message: "What's the name of your project?",
      name: "title",
    },
    {
      message: "Briefly describe your project:",
      name: "description",
    },
    {
      message: "How do users install your project?",
      name: "installation",
    },
    {
      message: "How can others use your project?",
      name: "usage",
    },
    {
      type: "list",
      message: "Choose a license for your project:",
      name: "license",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      message: "Who contributed to your project?",
      name: "contribution",
    },
    {
      message: "What's the testing process for your project?",
      name: "test",
    },
    {
      message: "What's your GitHub username?",
      name: "userName",
    },
    {
      message: "What's your email address? (Optional, for contact purposes)",
      name: "email",
    },
  ];
  

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