const Employee = require('../lib/Employee');

let employeeData;
let employee;

beforeAll(() => {
    employeeData = ['Furhan Samani', '007', 'contact@furhan.dev'];
});

beforeEach(() => {
    employee = new Employee(...employeeData);
});

describe('Employee constructor', () => {
    it('Construct Employee Object', () => {
        expect(employee).toBeInstanceOf(Employee);
    });
});

describe('getName', () => {
    it('Verify employee name matches input', () => {
        expect(employee.getName()).toStrictEqual("Furhan Samani");
    });
});

describe('getId', () => {
    it('Verify employee id matches input', () => {
        expect(employee.getId()).toStrictEqual("007");
    });
});

describe('getEmail', () => {
    it('Verify employee email matches input', () => {
        expect(employee.getEmail()).toStrictEqual("contact@furhan.dev");
    });
});

describe('getRole', () => {
    it('Verify employee id matches input', () => {
        expect(employee.getRole()).toStrictEqual("Employee");
    });
});