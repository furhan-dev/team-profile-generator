const Employee = require('../lib/Employee');

const employeeData = ['Furhan Samani', '007', 'contact@furhan.dev'];
const employee = new Employee(...employeeData);

describe('Employee constructor', () => {
    it('Construct Employee Object', () => {
        expect(employee).toBeInstanceOf(Employee);
    });
});

describe('getName', () => {
    it('Verify employee name matches input', () => {
        expect(employee.getName()).toBe("Furhan Samani");
    });
});

describe('getId', () => {
    it('Verify employee id matches input', () => {
        expect(employee.getId()).toBe("007");
    });
});

describe('getEmail', () => {
    it('Verify employee email matches input', () => {
        expect(employee.getEmail()).toBe("contact@furhan.dev");
    });
});

describe('getRole', () => {
    it('Verify employee id matches input', () => {
        expect(employee.getRole()).toBe("Employee");
    });
});