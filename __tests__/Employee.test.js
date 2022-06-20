const Employee = require('../lib/Employee');

let employeeData;
let employee;

beforeAll(() => {
    employeeData = ['Furhan Samani', '007', 'contact@furhan.dev', '4/20/15', 'fa-user'];
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
    it('Verify employee role matches input', () => {
        expect(employee.getRole()).toStrictEqual("Employee");
    });
});

describe('getStartDate', () => {
    it('Verify employee start date matches input', () => {
        expect(employee.getStartDate()).toStrictEqual("4/20/15");
    });
});

describe('getIcon', () => {
    it('Verify employee icon matches input', () => {
        expect(employee.getIcon()).toStrictEqual("fa-user");
    });
});