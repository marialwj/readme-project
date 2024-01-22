

# Professional README Generator

# Table of Contents
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[licenses](#licenses)
-[contribution](#contribution)
-[test](#test)
-[username](#username)
-[profile](#profile)


## description

    This project aims to simplify the process of creating a professional README.md file for open source projects on GitHub. The application is a command-line tool that dynamically generates a README.md file based on user input. By utilizing the Inquirer package, users can quickly provide information about their project, and the application will generate a README file with key sections such as Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.

## installation

    To install the necessary dependencies, use the command: npm i inquirer@8.2.4
 
 ## usage

    Start it with "node index.js" and then proceed to Follow the prompts to enter information about your project, including the project title, description, installation instructions, usage information, contribution guidelines, test instructions, chosen license, GitHub username, and email address.

## acceptance criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## license
    N/A

## screenshots (video)
[Demo to understand functionality](Untitled_%20Jan%2022%202024%201_03%20PM.mp4)

