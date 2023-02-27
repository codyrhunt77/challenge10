const Manager = require('./models/manager');
const Engineer = require('./models/engineer');
const Intern = require('./models/intern');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const DIR = path.resolve(__dirname, 'dist');
const dirPath = path.join(DIR, 'team.html');
const pull = require('./src/index');
const idArr = [];
const leTeam = [];

function appHome() {
    function addManager() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Managers name.',
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    } 
                    return 'Enter a character';
                },
            },
                {
                    type: 'input',
                    name: 'managerId',
                    message: 'Managers id.',
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if (pass) {
                            return true;
                        }
                        
                        return 'Enter a character';
                    },
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: 'Managers email.',
                    validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/);
                        if (pass) {
                            return true;
                        }
                        
                        return 'Enter a email.';
                    },
                },
                {
                    type: 'input',
                    name: 'managerOfficeNumber',
                    message: 'Managers office number..',
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if (pass) {
                            return true;
                        }
                        
                        return 'Enter a number.';
                    },
                },
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNumber,
            );
            leTeam.push(manager);
            idArr.push(answers.managerId);
            createTeam();
        });
    }
    function createTeam() {
        inquirer
        .createPromptModule([
            {
                type:'list',
                name:'employeeChoice',
                message:'What position would you like?',
                choices: [
                    'Engineer',
                    'Intern',
                    "Manager",
                ],
            },
        ])
        .then((teamChoice) => {
            switch ( teamChoice.employeeChoice) {
                case 'Engineer':
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case 'Manager':
                    addManager();
                    break;
                    default:
                   buildTeam();

            }
        });
    }
    function addEngineer() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Engineers name.',
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    } 
                    return 'Enter a character';
                },
            },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: 'Engineers id.',
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if (pass) {
                            if (idArr.includes(answer)) {
                                return "ID in use, select another.";
                            } else {
                            return true;
                        }
                    }
                        return 'Enter a character';
                    },
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: 'Engineers email.',
                    validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/);
                        if (pass) {
                            return true;
                        }
                        
                        return 'Enter a email.';
                    },
                },
                {
                    type: 'input',
                    name: 'engineerGit',
                    message: 'Engineers git.',
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                        
                        return 'Enter a character.';
                    },
                },
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGit,
            );
            leTeam.push(engineer);
            idArr.push(answers.engineerId);
            createTeam();
        });
    }
       function addIntern() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'Interns name.',
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    } 
                    return 'Enter a character';
                },
            },
                {
                    type: 'input',
                    name: 'internsId',
                    message: 'Interns id.',
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if (pass) {
                            if (idArr.includes(answer)) {
                                return 'ID in use, select another.'
                            } else {
                            return true;
                            }
                        }
                        
                        return 'Enter a character';
                    },
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: 'Interns email.',
                    validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/);
                        if (pass) {
                            return true;
                        }
                        
                        return 'Enter a email.';
                    },
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: 'Interns school.',
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if (pass) {
                            return true;
                        }
                        
                        return 'Enter a number.';
                    },
                },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool,
            );
            leTeam.push(intern);
            idArr.push(answers.internId);
            createTeam();
        });
    }
       } 
       function buildTeam() {
        if (!fs.existsSync(DIR)) {
            fs.mkdirSync(DIR);
        }
        fs.writeFileSync(dirPath, render(leTeam), 'utf-8')
       
       createManager();
    }
    appHome();
    
