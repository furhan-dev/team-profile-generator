const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, startDate, officeNumber) {
        super(name, id, email, startDate, "fa-user-tie");
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;