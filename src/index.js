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
                <li class="list-group-item">Email: ${manager.getEmail()}</li>
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
            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
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
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
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