const inquirer = require("inquirer");
const fs = require("fs");

// classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// get template functions
const { htmlTemplate, cardTemplate } = require("./src/html-templates");

// keep track of team
const team = [];

// prompt user for input
const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the employee's start date (e.g. MM/DD/YY):",
                name: "startDate",
            },
            {
                type: "input",
                message: "Enter the employee's name:",
                name: "name",
            },
            {
                type: "input",
                message: "Enter the employee's ID number:",
                name: "id",
            },
            {
                type: "input",
                message: "Enter the employee's email address:",
                name: "email",
            },
            {
                type: "list",
                message: "What is the employee's role?",
                choices: ["Manager", "Engineer", "Intern"],
                name: "role",
            },
            {
                type: "input",
                message: "Enter the manager's office number:",
                name: "officeNumber",
                when: answers => answers.role === "Manager"
            },
            {
                type: "input",
                message: "Enter the engineer's GitHub:",
                name: "github",
                when: answers => answers.role === "Engineer"
            },
            {
                type: "input",
                message: "Enter the intern's college:",
                name: "school",
                when: answers => answers.role === "Intern"
            }
        ])
        // add employee to team and prompt to add another employee
        .then(answers => {
            addEmployee(answers);
            return inquirer
                .prompt([
                    {
                        type: "confirm",
                        message: "Would you like to add another employee to your team?",
                        name: "addEmployee",
                    },
                ]);
        })
        .then(answers => {
            if (answers.addEmployee) return promptUser()
        });
}

// adds appropriate employee type to teams array
function addEmployee(answers) {
    const employeeData = [answers.name, answers.id, answers.email, answers.startDate];
    switch (answers.role) {
        case "Manager":
            team.push(new Manager(...employeeData, answers.officeNumber));
            break;
        case "Engineer":
            team.push(new Engineer(...employeeData, answers.github));
            break;
        case "Intern":
            team.push(new Intern(...employeeData, answers.school));
            break;
    }
}

// generate team profile html based on team array
const generateTeamProfile = () => {
    cards = [];
    team.forEach(employee => cards.push(cardTemplate(employee)));
    return htmlTemplate(cards.join("\n"));
}

promptUser()
    .then(() => fs.writeFileSync('./dist/team-profile.html', generateTeamProfile()))
    .then(() => console.log(`Succesfully generated your team profile: ${__dirname}/dist/team-profile.html`))
    .catch((err) => console.error(err));