const Manager = require('../lib/Manager');

let managerData;
let manager;

beforeAll(() => {
    managerData = ["Big Boss", "001", "boss@furhan.dev", "666"];
});

beforeEach(() => {
    manager = new Manager(...managerData);
});

describe('Manager constructor', () => {
    it('verify constuctor', () => {
        expect(manager).toBeInstanceOf(Manager);
    });
});

describe('getName', () => {
    it('verify name', () => {
        expect(manager.getName()).toStrictEqual("Big Boss");
    });
});

describe('getId', () => {
    it('verify ID', () => {
        expect(manager.getId()).toStrictEqual("001");
    });
});

describe('getEmail', () => {
    it('verify email', () => {
        expect(manager.getEmail()).toStrictEqual("boss@furhan.dev");
    });
});

describe('getRole', () => {
    it('verify role', () => {
        expect(manager.getRole()).toStrictEqual("Manager");
    });
});

describe('getOfficeNumber', () => {
    it('verify office number', () => {
        expect(manager.getOfficeNumber()).toStrictEqual("666");
    });
});