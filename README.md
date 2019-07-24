#### Introduction:

As a solution of QA case study. I have created the Test Automation framework using which we can capable to write automated test scripts for https://haveibeenpwned.com/** 

#### Pre-requisite:

- **NPM** as node package manager is installed
- **NodeJS** as runtime environment is installed
- **WebdriverIO** as base test automation framework
- **MochaJS** as test runner
- **Babel-JS** as JavaScript compatibility compiler 
- **Page object** model with layered architecture

#### Test case automated with data driven strategy:

- Verify for email <EMAIL>, the pwned result is true/false


#### Steps to execute:

1.	Clone the code from GitHub: 
2.	Import the code into IDE for better visibility. (preferably, IntelliJ IDEA)
3.	Edit the file credential.js and put email and password accordingly.
4.	Run command: 
   ~~~~
      >  npm install
      >  npm test