const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, startDate, school) {
        super(name, id, email, startDate, "fa-graduation-cap");
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;