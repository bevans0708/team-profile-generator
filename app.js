const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "index.html");

const render = require("./lib/htmlRenderer");

const team = [];
addToTeam();

function addToTeam() {
   inquirer.prompt([
      {
         type: "list",
         message: "Select type of employee to add, or select 'Finish' to end.",
         choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Finish",
         ]
      }
   ]).then(function(data) {
      const employeeType = data.addEmployee;
      if (employeeType === "Manager") {
         managerInfo();
      } else if (employeeType === "Engineer") {
         engineerInfo();
      } else if ( employeeType === "Intern") {
         internInfo();
      } else if (employeeType === "Finish") {
         renderTeam();
      }
   });
};

function managerInfo() {
   inquirer.prompt ([
      {
         type: "input",
         name: "managerName",
         message: "Enter manager's name:",
         validate: input => {
            if (input) {
               return true;
            } else {
               console.log("Please enter a name!");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "managerId",
         message: "Enter manager's Id:",
         validate: input => {
            if (input) {
               return true;
            } else {
               console.log("Please enter an Id!");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "managerEmail",
         message: "Enter manager's email address:",
         validate: input => {
            if (input) {
               return true;
            } else {
               console.log("Please enter an email address!");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "managerOffice",
         message: "Enter manager's office phone number:",
         validate: input => {
            if (input) {
               return true;
            } else {
               console.log("Please enter a phone number!");
               return false;
            }
         }
      }
   ])
};

function engineerInfo() {
   inquirer.prompt ([
      {
         type: "input",
         name: "engineerName",
         message: "Enter engineer's name:",
         validate: input => {
            if (input) {
               return true;
            } else {
               console.log("Please enter a name!");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "engineerId",
         message: "Enter engineer's Id:",
         validate: input => {
            if (input) {
               return true;
            } else {
               console.log("Please enter an Id!");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "engineerEmail",
         message: "Enter engineer's email address:",
         validate: input => {
            if (input) {
               return true;
            } else {
               console.log("Please enter an email address!");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "engineerGithub",
         message: "Enter engineer's Github Username:",
         validate: input => {
            if (input) {
               return true;
            } else {
               console.log("Please enter a username!");
               return false;
            }
         }
      }
   ])
};

function internInfo() {
   inquirer.prompt ([
      {
         type: "input",
         name: "internName",
         message: "Enter intern's name:",
         validate: input => {
            if (input) {
               return true;
            } else {
               console.log("Please enter a name!");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "internId",
         message: "Enter intern's Id:",
         validate: input => {
            if (input) {
               return true;
            } else {
               console.log("Please enter an Id!");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "internEmail",
         message: "Enter intern's email address:",
         validate: input => {
            if (input) {
               return true;
            } else {
               console.log("Please enter an email address!");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "internSchool",
         message: "Enter intern's school:",
         validate: input => {
            if (input) {
               return true;
            } else {
               console.log("Please enter a school!");
               return false;
            }
         }
      }
   ])
};