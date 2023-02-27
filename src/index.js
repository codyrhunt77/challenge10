const createTeam = team => {
    const createManager = manager => {
        return `
        <div class="employee">
        <div class="header">
            <h2 class="title">${manager.getName()}</h2>
            <h3 class="title">${manager.getRole()}</h3>
            </div> 
            <div class="body">
            <ul class="group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
        `;
    };
    const createEngineer = engineer => {
        return `
        <div class="employee">
        <div class="header">
        <h2 class="title">${engineer.getName()}</h2>
        <h3 class="title">${engineer.getRole()}</h3>
        </div>
        <div class="body">
        <ul class="group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email:<a href="mailto:${engineer.getEmail()}">${engineer.getId()}</a></li>
            <li class="list-group-item">Git: ${engineer.getGit()}</li>
        </ul>
        </div
        </div>
        `;
    };
    const createIntern = intern => {
        return `
        <div class="employee">
        <div class="header">
        <h2 class="title">${intern.getName()}</h2>
        <h3 class="title">${intern.getRole()}</h3>
        </div>
        <div class="body">
        <ul class="group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}>${intern.getEmail()}</a></li>
            <li class="list-group-item">School:${intern.getSchool()}</li>
        </ul>
        </div
        </div>
        `;
    };
    const HTML = [];
    HTML.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
        );
    HTML.push(team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => createEngineer(engineer))
            );
    HTML.push(team
                .filter(employee => employee.getRole() === "Intern")
                .map(intern => createIntern(intern))
                );
            return HTML.join("")
}
module.exports = team => {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width-device-width, inintial-scale=1.0 />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title> Team </title>
        <body>
        <div class="container">
        <div class="row">
        ${createTeam(team)}
        </div>
        </div>
        </body>
    `
}