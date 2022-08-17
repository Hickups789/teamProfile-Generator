const generateManager = function (manager) {
  return `
<div class = "col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <h4>Manager</h4>
        </div>

        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>
`
};

const generateIntern = function (intern) {
  return `
    <div class = "col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4>
        </div>

        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
</div>
    `
};

const generateEngineer = function (engineer) {
    return `
    <div class = "col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
        </div>

        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="username">GitHub:<href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>
    `
}
