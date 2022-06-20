class Employee {
    constructor(name, id, email, startDate, icon) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.startDate = startDate;
        this.icon = icon;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getStartDate() {
        return this.startDate;
    }

    getIcon() {
        return this.icon;
    }

    getRole() {
        return this.constructor.name;
    }
}

module.exports = Employee;