const htmlTemplate = (cards) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
    href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&family=Roboto+Mono:wght@300&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap"
    rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>

<style>
    h1 {
      font-family: 'Raleway', sans-serif;
    }

    h3,
    li {
      font-family: 'Roboto', sans-serif;
    }

    li {
      font-size: .85rem;
    }

    .role {
      font-family: 'Roboto Mono', monospace;
      font-size: .9rem;
    }

    li {
      font-size: .8rem;
    }

    .card-footer {
      font-family: 'Roboto Mono', monospace;
      font-size: .8rem;
    }
</style>

<body>
    <div class="container-fluid w-75">
    <header class="bg-primary bg-gradient bg-opacity-75 py-4 my-2 rounded-2 shadow-sm">
        <h1 class="text-center text-white mb-0">
        <i class="fa-regular fa-address-card fa-fw mr-1"></i>
        Team Profile
        </h1>
    </header>
    <main>
        <div class="row d-flex justify-content-center align-items-center">
            ${cards}
        </div>
    </main>
    </div>
</body>

</html>`
};

const cardTemplate = (employee) => {

    // last row of card contains info specific to the employee role
    let roleSpecificLabel = '';
    let roleSpecificValue = '';
    switch (employee.getRole()) {
        case 'Manager':
            roleSpecificLabel = 'Office Number';
            roleSpecificValue = employee.getOfficeNumber();
            break;
        case 'Engineer':
            roleSpecificLabel = 'GitHub';
            roleSpecificValue = employee.getGithub();
            break;
        case 'Intern':
            roleSpecificLabel = 'College';
            roleSpecificValue = employee.getSchool();
            break;
    }

    return `<div class="card px-0 m-2 shadow-sm" style="width: 18rem;">
    <div class="card-header text-center bg-danger bg-opacity-75 bg-gradient text-white pt-4 pb-1">
        <h2 class="mb-0">${employee.getName()}</h2>
        <p class="role text-white">
            <i class="fa-solid ${employee.getIcon()}"></i>
            ${employee.getRole()}
        </p>
    </div>
    <ul class="list-group list-group-flush m-auto border-0">
    <li class="list-group-item">
        <ul class="list-group list-group list-group-horizontal my-3">
        <li class="list-group-item bg-dark bg-opacity-75 text-white">Empolyee ID</li>
        <li class="list-group-item">${employee.getId()}</li>
        </ul>
        <ul class="list-group list-group list-group-horizontal my-3">
        <li class="list-group-item bg-dark bg-opacity-75 text-white">Email</li>
        <li class="list-group-item">${employee.getEmail()}</li>
        </ul>
        <ul class="list-group list-group list-group-horizontal my-3">
        <li class="list-group-item bg-dark bg-opacity-75 text-white">${roleSpecificLabel}</li>
        <li class="list-group-item">${roleSpecificValue}</li>
        </ul>
    </li>
    </ul>
    <div class="card-footer text-center">
    <small class="text-muted ms-2">Employee since ${employee.getStartDate()}</small>
</div>`

}