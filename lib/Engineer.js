const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, startDate, github) {
        super(name, id, email, startDate, "fa-code");
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;